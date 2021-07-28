import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {getAllUsersData} from "./utils/requests"


import NavBar from "./components/Navbar";

import UsersList from "./components/UsersList";


class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         allUsers: [],


      }
   }

   componentDidMount() {
      this.getAllUsers();
   }

   getAllUsers = async () => {
      const result = await getAllUsersData();
      console.log(result)
      this.setState({allUsers: result});
   };

   render() {

      return (
          <div>
             <ToastContainer/>
             <NavBar/>
             <Switch>
                <Route exact path="/" render={(props) => (
                    <UsersList allUsers={this.state.allUsers}
                               getUsers={this.getAllUsers}
                               {...props}
                    />
                )}>
                </Route>
                {/*<Route path="formToCreateGoodOrService" render={(props) => (*/}
                {/*    <UsersForm {...props}*/}
                {/*    />*/}
                {/*)}>*/}
                {/*</Route>*/}
             </Switch>
             {/*<Footer/>*/}
          </div>
      )

   }


}

export default App;
