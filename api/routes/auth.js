const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {check, validatioResult} = require("express-validator");

//REGISTER
router.post("/register",
[
check("username", "Username is required").not().isEmpty(),
check("email", "Email is required").not().isEmail(),
check("mobile", "mobile is required").not().isEmail(),
check("password", " Password is required").not().isLength({min: 5})
],

 async (req, res) => {
  
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    mobile:req.body.mobile,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong password or username!"); // if no user send a error message

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;  // destruct the user and send it except the password

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
