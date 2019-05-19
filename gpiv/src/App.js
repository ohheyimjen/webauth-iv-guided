import React from 'react';

import './App.css';
//3. 
import { Route, NavLink } from 'react-router-dom';
//5. import Login file we just created in new auth folder that was just created in the src folder
import Login from './auth/Login';

function App() {
  return (
    <div>
      <header>
      {/* 7. Create nav link for login */}
      <NavLink to ='/login'>Login</NavLink>
      </header>
{/* 6. Bring Login Route in */}
      <main>
        <Route path='/login' component={Login} />
      </main>
    </div>
  );
}

export default App;
