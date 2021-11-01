import "./Historique.css";
import { DataGrid } from "@material-ui/data-grid";
import { useContext ,useEffect} from "react";
import { PinContext } from "../pinContext/PinContext";
import {  getPins } from "../pinContext/apiCalls";
import {Link} from "react-router-dom"

export default function Historique() {

  
  const { pins, dispatch } = useContext(PinContext);
  useEffect(() => {
    getPins(dispatch);
  }, [dispatch]);

  
  const columns = [
    { field: "assetnumber", headerName: "ASSET NUMBER", width: 90 },
    
    
    { field: "latitude", headerName: "LONGITUDE", width: 200 },
    {
      field: "longitude",
      headerName: "LONGITUDE",
      width: 120,
    },
   
      {
        field: "updatedate",
        headerName: "TIME",
        width: 120,
      },
      {
        field: <Link  to="/preview"className="link"><button type="button" className="btn btn-primary"> Show Preview</button></Link>,
        width: 200,
      }
  ];

  return (
      <>
     <div>
         <div className="top">
             <h3 className="histtitle">Historique</h3>
         </div>
         <div>
            
         </div>
     </div>

     <div className="userList">
      <DataGrid
        rows={pins}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>



    </>


    
  );
}


