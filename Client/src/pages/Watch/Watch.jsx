import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
    const location = useLocation();  // give the pathname and the object which passed here movie 
  const movie = location.movie;  // so here you can acces the movie 
    return (
        <div className="watch">
            <Link to="/">
            
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </Link>
            <video  className="video" autoPlay progress controls src={movie.video}/>
        </div>
    )
}
