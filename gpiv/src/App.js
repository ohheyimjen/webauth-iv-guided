import React from 'react';

import './App.css';
//3. 
import { Route, NavLink, withRouter } from 'react-router-dom';
//5. import Login file we just created in new auth folder that was just created in the src folder
import Login from './auth/Login';
// 8b. import users
import Users from '../src/users/Users';

function App(props) {

// 14b. Create logout function to use for button  
  function logout() {
    localStorage.removeItem('jwt');
// 15b. Make it so that you go back to login screen after hitting the logout button. This is when you add the 'props' in the function
    props.history.push('/login');
    // HISTORY ONLY WORKS once you import withRouter, and wrap the exported App in it as well

  }

  return (
    <div>
      <header>
{/* 7. Create nav link for login */}
      <NavLink to ='/login'>Login</NavLink>
      &nbsp; | &nbsp;
{/* 4b. Create users link */}
      <NavLink to ='/users'>Users</NavLink>
      &nbsp; | &nbsp;
{/* 13b. Create logout button */}
      <button type="button" onClick={logout}>Logout</button>
      </header>
{/* 6. Bring Login Route in */}
      <main>
        <Route path='/login' component={Login} />
        <Route path='/users' component={Users} />
      </main>
    </div>
  );
}

export default withRouter(App);
