import { Link,useLocation } from "react-router-dom";
import "./device.css";
import { Publish } from "@material-ui/icons";


export default function Product() {
    const location = useLocation();
    const device = location.device;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Device</h1>
        <Link to="/newDevice">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
         
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={device.img} alt="" className="productInfoImg" />
                  <span className="productName">{device.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{device._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{device.genre}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Device Name</label>
            <input type="text" placeholder={device.title} />
           
            <label>Genre</label>
            <input type="text" placeholder={device.genre} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={device.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}