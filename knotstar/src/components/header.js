import { Link } from "react-router-dom";
import "../stylesheets/header.css";

export default function Header() {
  
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Knotstar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/Home' >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/Login' >Logout</Link>
              </li>
             
             
            </ul>
          
          </div>
        </div>
      </nav>
      <div class="poi" role="alert">
        
      <b > Enjoy your weekend </b>
       </div>
       </div>
       
    )
}