import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Homepage from './components/admin/homepage';
import Sidebar from './components/admin/include/sidebar';
import Footer from './components/admin/include/footer';

import Charts from './components/admin/charts/charts';
import User from './components/admin/user/users';
import Profile from './components/admin/user/profile';
import Register from './components/admin/auth/register';

class App extends Component {
  render() {
    return (
      <Router>

        <Sidebar/>  
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/charts" component={Charts} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/users" component={User} />
          <Route exact path="/register" component={Register} />

          <Footer version="1.0"/>
        </div>
      </Router>
    );
  }
}

export default App;
