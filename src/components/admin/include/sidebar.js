import React , {Component} from 'react';
import LoggedInUser from '../partials/loggedInUser';
import NavLink from '../partials/navlink';

export default class Sidebar extends Component
{
	render(){
		return(
			<React.Fragment>  
			  <aside className="main-sidebar sidebar-dark-primary elevation-4">
			    <div className="sidebar">
			      
			      <LoggedInUser/>

			      <nav className="mt-2">
			        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
			          
			          <NavLink icon='fas fa-tachometer-alt' link="/" title='Dashboard'/>

			          <NavLink icon='fas fa-chart-pie' link="/charts" title='Charts'/>

			          <NavLink icon='fas fa-user' link="/profile" title='Profile'/>

			          <NavLink icon='fas fa-users' link="/users" title='Users'/>

			          <NavLink icon='fas fa-lock' link="/register" title='Register'/>

			        </ul>
			      </nav>

			    </div>
			  </aside>
			</React.Fragment>  
		)
	}
}


