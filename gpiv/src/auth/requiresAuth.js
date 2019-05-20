// This file is a react component that takes a component and renders it
import React from "react";
import axios from "axios";

// 18b. Create an axios interceptor that acts as middleware. This could be in a separate file
// You can enter in any other headers you want to add in here
axios.interceptors.request.use(
  function (requestConfig) {
    requestConfig.headers.authorization = localStorage.getItem('jwt');

    return requestConfig;
  },
  function (error) {
    return Promise.reject(error);
  }

)

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
// make a conditional return statement that checks to see if there's a token. If not, it will return a message saying not logged in
      const token = localStorage.getItem('jwt');
      const notLoggedIn = <h3>Please login to see users</h3>;
      return <> { token ? <Component {...this.props} /> : notLoggedIn } </>;
    }
  };
}
