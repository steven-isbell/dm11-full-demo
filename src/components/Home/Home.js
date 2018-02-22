import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from "../../ducks/reducer";

// We'll use an href to handle the logout so we can redirect from the server

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.user.name ? (
          <div>
            <h1>{this.props.user.authid}</h1>
            <h1>{this.props.user.name}</h1>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button>Logout</button>
            </a>
          </div>
        ) : (
          <h1>No User On Session</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(Home));
