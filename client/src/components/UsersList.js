import React, {Component} from 'react';
import UsersItem from "./UsersItem";
import "../App.css"

class UsersList extends Component {
   state = {}

   render() {

      return (
          <div className={"container"}>
             <button onClick={() => this.props.getUsers()}
                     type={"button"}
                     className={"btn btn-info"}> Visi vartotojai </button>
             <div className={"items-container"}>
                {this.props.allUsers.map((oneUser) => (
                    <UsersItem oneUser={oneUser}
                    />
                ))}
             </div>
          </div>
      );
   }
}

export default UsersList;