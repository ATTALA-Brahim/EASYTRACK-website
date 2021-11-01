import { useContext, useState } from "react";
import "./newProduct.css";
import swal from "sweetalert";
import { createDevice } from "../../deviceContext/apiCalls";
import { DeviceContext } from "../../deviceContext/DeviceContext";
import { useHistory } from "react-router-dom";

export default function NewMovie() {
  const [device, setDevice] = useState(null);
  const history = useHistory()


  const { dispatch } = useContext(DeviceContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setDevice({ ...device, [e.target.name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    createDevice(device, dispatch);
    history.push("/my-devices")
    swal("New Device Added!", "", "success");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">&nbsp; Add new device :</h1>
      <form className="addProductForm">

        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="Device Name"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">

          <label>Genre</label>
          <input
            type="select"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>

        <button type="button" style={{ height: '50px', width: '300px', marginTop: '51px' }} className="btn btn-outline-success" onClick={handleSubmit}>
          Add device
        </button>
      </form>
    </div>
  );
}