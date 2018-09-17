import React, { Component } from "react";

import RoleAssignmentForm from "./components/RoleAssignmentForm";
import "./index.css";
import _ from "lodash";

class App extends Component {
  state = {
    selectedUser: "",
    selectedRole: "",
    selectedProject: "",
    error: false,
    errMsg: ""
  };

  userChangeHander = e => {
    this.setState({ selectedUser: e.target.value });
  };

  roleChangeHandler = e => {
    this.setState({ selectedRole: e.target.value });
  };

  projectChangeHandler = e => {
    this.setState({ selectedProject: e.target.value });
  };

  onAssignedClickHAndler = () => {
    const { selectedUser, selectedRole, selectedProject } = this.state;

    if (selectedUser === "" || selectedRole === "" || selectedProject === "") {
      this.setState({ error: true, errMsg: "All Feilds Are Required!!!" });
    } else {
      this.setState({ error: false, errMsg: "" });
      let data = localStorage.getItem("assigned");
      data = JSON.parse(data);
      if (data) {
        let isPresent = _.findIndex(data, {
          user: selectedUser,
          project: selectedProject
        });
        if (isPresent < 0) {
          let roleAssigned = {
            user: selectedUser,
            role: selectedRole,
            project: selectedProject
          };
          data.push(roleAssigned);
          //Storing data in the local storage mock
          localStorage.setItem("assigned", JSON.stringify(data));
        } else {
          this.setState({
            error: true,
            errMsg: "User can be assigned just one role per project!!!"
          });
        }
      } else {
        let roleAssigned = {
          user: selectedUser,
          role: selectedRole,
          project: selectedProject
        };
        //Storing data in the local storage mock
        localStorage.setItem("assigned", JSON.stringify([roleAssigned]));
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Roles Mangement System</h1>
        </header>
        <main>
          <div className="row">
            <div className="col-sm-12">
              <RoleAssignmentForm
                onAssigned={this.onAssignedClickHAndler}
                userSelected={this.userChangeHander}
                roleSelected={this.roleChangeHandler}
                projectSelected={this.projectChangeHandler}
                error={this.state.error}
                errMsg={this.state.errMsg}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
