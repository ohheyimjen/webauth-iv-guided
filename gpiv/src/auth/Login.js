//4.
import React from 'react';
//10. yarn add axios, and then import it
import axios from 'axios';

//8. Make form for login
class Login extends React.Component {
  state = {
    username: 'Luigi', // this needs to match what you've inputed in postman
    password: 'pass'
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
{/* 12. adding onSubmit, so you can submit login info */}
        <form onSubmit={this.submitForm}>
{/* Each one of these divs creates a new form input box */}
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

//9. Gives the ability to type in fields 
  handleChange = event => {
    const { id, value } = event.target;

    this.setState({ [id]: value });
  };

//11. 
submitForm = event => {
  //prevents from continually refreshing the page
  event.preventDefault();
  const endpoint = 'http://localhost:5000/api/auth/login';

  axios
    .post(endpoint, this.state)
    .then(res => {
  // 13. after console.log(res); to make sure you're getting data when logging in
      localStorage.setItem('jwt', res.data.token); //you can to make sure this is working in the console -> application -> local storage. Should return a jwt key w/a value
      this.props.history.push('/users'); // 16b. directs you to list of users after logging in 
  })
    .catch(err => {
    console.error('Login Error', err)
  });
};

}

export default Login;
