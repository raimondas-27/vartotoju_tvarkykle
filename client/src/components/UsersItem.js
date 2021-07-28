import React, {Component} from 'react';
import "../App.css"
import {toast} from "react-toastify";

class UsersItem extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
          <div className={"orders-container"}>
             <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                   <h5 className="card-title">Vardas : {this.props.oneUser.name}</h5>
                   <h6 className="card-subtitle mb-2 mt-4 text-muted">Amžius : {this.props.oneUser.age}</h6>
                   <p className="card-text">El.paštas : {this.props.oneUser.email}</p>
                   <p className="card-text"> Slaptažodis : {this.props.oneUser.password}</p>
                   <button type="button"
                           className="btn btn-warning">Redaguoti
                   </button>
                   <button
                           type="button"
                           className="btn btn-danger">Ištrinti
                   </button>
                </div>
             </div>
          </div>
      )
   }
}


export default UsersItem;