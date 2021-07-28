import React, {Component} from 'react';
import "../App.css"
import {toast} from "react-toastify";

class UsersItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         edit: {
            _id: this.props.oneUser._id,
            name: this.props.oneUser.name,
            age: this.props.oneUser.age,
            email: this.props.oneUser.email,
            password: this.props.oneUser.password,
         },

         isEdit : false,

      };
   }



   render() {

      const {_id, name, age,email, password,} = this.state.edit;

      return (
          <div className={"orders-container"}>
             <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                   <h5 className="card-title">Vardas : {name}</h5>
                   <h6 className="card-subtitle mb-2 mt-4 text-muted">Amžius : {age}</h6>
                   <p className="card-text">El.paštas : {email}</p>
                   <p className="card-text"> Slaptažodis : {password}</p>
                   <button
                       type="button"
                       className="btn btn-warning">Redaguoti
                   </button>
                   <button onClick={() => this.props.onDelete(_id)}
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