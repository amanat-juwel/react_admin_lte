import React , {Component} from 'react';
import{
  Link
} from 'react-router-dom';

export default class LoggedInUser extends Component
{
	render(){
		return(
			<React.Fragment>  
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
			        <div className="info">
			          <Link to="/profile" className="d-block">ADMIN DASHBOARD</Link>
			        </div>
			     </div>
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
			        <div className="image">
			          <img src={'/admin/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User " />
			        </div>
			        <div className="info">
			          <Link to="#" className="d-block">Amanat Juwel</Link>
			        </div>
			     </div>
			</React.Fragment>  
		)
	}
}






