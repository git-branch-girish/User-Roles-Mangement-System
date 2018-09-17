import React, { Component, Fragment } from "react";

class RoleAssignmentForm extends Component {
  //Given Data
  state = {
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Alice" },
      { id: 3, name: "Bob" }
    ],
    roles: [
      { id: 1, name: "Admin" },
      { id: 2, name: "Editor" },
      { id: 3, name: "Viewer" }
    ],
    projects: [
      { id: 1, name: "Trip to space" },
      { id: 2, name: "Assembly Ikea furniture" },
      { id: 3, name: "Datumize Zentral" }
    ]
  };

  render() {
    const {
      error,
      errMsg,
      onAssigned,
      userSelected,
      roleSelected,
      projectSelected
    } = this.props;

    let users = this.state.users;
    let UserOptionItems = users.map(user => (
      <option key={user.id}>{user.name}</option>
    ));

    let roles = this.state.roles;
    let roleOptionItems = roles.map(role => (
      <option key={role.id}>{role.name}</option>
    ));

    let projects = this.state.projects;
    let projectOptionItems = projects.map(project => (
      <option key={project.id}>{project.name}</option>
    ));

    return (
      <Fragment>
        <div className="col-sm-12">
          {error ? <p style={{ color: "red" }}>{errMsg}</p> : null}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Users</label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              onChange={userSelected}
            >
              <option value="">Select option</option>
              {UserOptionItems}
            </select>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Roles</label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect03"
              onChange={roleSelected}
            >
              <option value="">Select option</option>
              {roleOptionItems}
            </select>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Projects</label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={projectSelected}
            >
              <option value="">Select option</option>
              {projectOptionItems}
            </select>
          </div>
        </div>
        <div className="col-sm-12">
          <button
            type="button"
            className="btn btn-success Assigned-btn"
            onClick={onAssigned}
          >
            Assign
          </button>
        </div>
      </Fragment>
    );
  }
}

export default RoleAssignmentForm;
