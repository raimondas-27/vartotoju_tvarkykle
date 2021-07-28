import React, {Component} from 'react';
import "../App.css"
import {toast} from "react-toastify";
import {editUser} from "../utils/requests";

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

         isEdit: false,

      };
   }

   handleChangeAfterEditing = (event) => {
      const editCopy = {...this.state.edit}
      editCopy[event.target.name] = event.target.value;
      this.setState({edit: editCopy})
   }

   toggleEdit = () => {
      this.setState({isEdit: !this.state.isEdit});
   }

   handleEditData = async (id, itemBody) => {
      const editResult = await editUser(id, itemBody)
      if (editResult) {
         await this.setState({isEdit: false})
         await this.props.onGetUsers
         toast.success("Vartotojo duomenys buvo pakeisti")
      }
   }


   render() {

      const {_id, name, age, email, password,} = this.state.edit;

      return (
          <div className={"orders-container"}>
             {!this.state.isEdit ? (
                 <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                       <h5 className="card-title">Vardas : {name}</h5>
                       <h6 className="card-subtitle mb-2 mt-4 text-muted">Amžius : {age}</h6>
                       <p className="card-text">El.paštas : {email}</p>
                       <p className="card-text"> Slaptažodis : {password}</p>
                       <button onClick={() => this.toggleEdit(_id)}
                               type="button"
                               className="btn btn-warning">Redaguoti
                       </button>
                       <button onClick={() => this.props.onDelete(_id)}
                               type="button"
                               className="btn btn-danger">Ištrinti
                       </button>
                    </div>
                 </div>
             ) : (
                 <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                       <h5 className="card-title">Vardas : {name}</h5>
                       <input type="text"
                              value={name}
                              onChange={this.handleChangeAfterEditing}
                              name="name"
                       />
                       <h6 className="card-subtitle mb-2 mt-4 text-muted">Amžius : {age}</h6>
                       <input type="text"
                              value={age}
                              onChange={this.handleChangeAfterEditing}
                              name="age"
                       />
                       <p className="card-text">El.paštas : {email}</p>
                       <input type="text"
                              value={email}
                              onChange={this.handleChangeAfterEditing}
                              name="email"
                       />
                       <p className="card-text"> Slaptažodis : {password}</p>
                       <input type="text"
                              value={password}
                              onChange={this.handleChangeAfterEditing}
                              name="password"
                       />
                       <button
                           type="button"
                           className="btn btn-info"
                           onClick={() => this.handleEditData(_id, this.state.edit)}> Išsaugoti
                       </button>

                    </div>
                 </div>
             )}
          </div>
      )
   }
}


export default UsersItem;