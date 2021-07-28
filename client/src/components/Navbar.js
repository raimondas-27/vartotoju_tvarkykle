import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
   state = {}

   render() {
      return (
          <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/"><strong>Mano</strong> Useriai</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                      <li className="nav-item active">
                         <Link className="nav-link" to="/">Visi vartotojai <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                         <Link className="nav-link" to="/formToCreateUser">Forma naujam vartotojui</Link>
                      </li>
                   </ul>
                </div>
             </nav>
          </div>
      );
   }
}

export default NavBar;