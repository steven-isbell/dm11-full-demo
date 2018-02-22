import React, { Component } from "react";

class Profile extends Component {
  componentDidMount() {
    // In here you could go get the user data from this.props.match.params
    // Or you could handle the redirect from the router.
    // There's a few ways to handle this.
  }
  render() {
    return "Profile";
  }
}

export default Profile;
