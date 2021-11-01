import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { DeviceContext } from "../../deviceContext/DeviceContext";
import { deleteDevice, getDevices } from "../../deviceContext/apiCalls";

export default function ProductList() {
  const { devices, dispatch } = useContext(DeviceContext);
  useEffect(() => {
    getDevices(dispatch);
  }, [dispatch]);
  console.log(devices);
  const handleDelete = (id) => {
    deleteDevice(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 110 },
    {
      field: "Device",
      headerName: "Device",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },

    { field: "genre", headerName: "Genre", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <>
            <button
              className="productListDelete btn btn-danger"
              onClick={() => handleDelete(params.row._id)}
            >
              <i className="fa fa-trash-alt" />
              &nbsp; Delete
            </button>
            <Link  to={{ pathname: "/edit-Device/" + params.row._id, device: params.row }}>

            <button type="button" className="productListEdit btn btn-primary">
              <i className="fa fa-edit" />
              &nbsp; Edit
            </button>
            </Link>

            <Link
              to={{ pathname: "/start-tracking-device", device: params.row }}
            >
              <button
                type="button"
                className="btn btn-primary productListEdit "
              >
                <i className="fa fa-map-marked-alt" />
                &nbsp; Start Tracking
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: (
        <Link to="/show-device-history">
          <button
            style={{ width: "220px" }}
            type="button"
            className="btn btn-outline-primary"
          >
            <i className="fa fa-history" />
            &nbsp; Show history
          </button>{" "}
        </Link>
      ),
      width: 300,
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={devices}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
