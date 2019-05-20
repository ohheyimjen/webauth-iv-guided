// 1b after creating Login file and getting login to work
import React from 'react';
import axios from 'axios';
// 12b. import the new react component file
import requiresAuth from '../auth/requiresAuth';

class Users extends React.Component {
  state = {
    users: []
  }

  render() {
    return (
      <div>
        <h2>Our Users</h2>
{/* 2b map over our users and return a list of them */}
        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </div>
    )
  }

// 3b pull users in from backend using componentDidMount. After creating go back to App.js to add links
  componentDidMount() {
    const endpoint = 'http://localhost:5000/api/users';
// 9b. bring in the token from the backend w/requestConfig calling the headers
    const token = localStorage.getItem('jwt');
    // const requestConfig = {
    //   headers: {
    //     authorization: token,
    //   },
    // };     You can get rid of this once you create the axios interceptor
    axios
    // .get(endpoint, requestConfig)
      .get(endpoint)
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => console.error(err))
  }  
}

export default requiresAuth(Users);