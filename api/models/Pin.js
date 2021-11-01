const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    assetnumber: {
        type: String,
        required: true,
      },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    updatedate: {
      type: Date,
      default: Date.now(),
      required:false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);s