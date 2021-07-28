import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import {deleteUser, getAllUsersData, postNewUser} from "./utils/requests"

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";


class App extends Component {
   constructor(props) {
      super(props);

      this.state = {

         allUsers: [],

         addingData: {
            name: "",
            age: "",
            email: "",
            password: "",
         },
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

   handleChangeAfterAdding = (event) => {
      const formDataCopy = {...this.state.addingData};
      formDataCopy[event.target.name] = event.target.value;
      this.setState({addingData: formDataCopy});
   }

   addUser = async (event) => {
      event.preventDefault();
      const postResult = await postNewUser(this.state.addingData)
      console.log(postResult)
      if (postResult) {
         await this.getAllUsers()
         await toast.success("Vartotojas buvo pridėtas į sąrašą")
         event.target.value = '';
         await this.props.history.push('/');
      }
   }

   deleteUser = async (dataId) => {
      const deleteResult = await deleteUser(dataId)
      if (deleteResult) {
         await this.getAllUsers();
         await toast.success("Vartotojas buvo ištrintas iš sąrašo")
      }
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
                               onDelete={this.deleteUser}
                               {...props}
                    />
                )}>
                </Route>
                <Route path="/formToCreateUser" render={(props) => (
                    <UsersForm onAddUser={this.addUser}
                                onHandleChange={this.handleChangeAfterAdding}
                               {...props}
                    />
                )}>
                </Route>
             </Switch>
             <Footer/>
          </div>
      )
   }
}

export default withRouter(App);
