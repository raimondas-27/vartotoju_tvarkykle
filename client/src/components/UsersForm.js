import React, {Component} from 'react';
import "../App.css"

class UsersForm extends Component {
   constructor() {
      super();
      this.state = {}
   }
   render() {
      return (
          <div>
             <form onSubmit={this.props.onAddUser}
                   onChange={this.props.onHandleChange}
                   className={"form-container"}>
                <div className={"form-group"}>
                   <label htmlFor={"name"}>Įveskite vartotojo vardą:</label>
                   <input type={"text"}
                          name={"name"}
                          className={"form-control"}
                          id={"name"}
                          placeholder={"Vardas"}
                   />
                </div>
                <div className={"form-group"}>
                   <label htmlFor={"price"}> Įveskite vartotojo amžių:</label>
                   <input type={"text"}
                          name={"age"}
                          className={"form-control"}
                          id={"age"}
                          placeholder={"Amžius"}/>
                </div>
                <div className="form-group">
                   <label htmlFor="quantity">Įveskite vartotojo el. paštą:</label>
                   <input type="text"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="El.paštas"/>
                </div>
                <div className="form-group">
                   <label htmlFor="description">Įveskite vartotojo slaptažodį:</label>
                   <input type="text"
                          name="password"
                          className="form-control"
                          id="password"
                          placeholder="Slaptažodis"/>
                </div>
                <button type="submit" className="btn btn-primary">Išsaugoti</button>
             </form>
          </div>
      );
   }
}

export default UsersForm;