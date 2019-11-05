import React , {Component} from 'react';
import{
  Link
} from 'react-router-dom';

export default class NavLink extends Component
{
	render(){
		return(
			<React.Fragment>  
				<li className="nav-item">
		            <Link to={this.props.link} className="nav-link">
		              <p><i className={"nav-icon " + this.props.icon} ></i> {this.props.title} </p>
		            </Link>
		         </li>
			</React.Fragment>  
		)
	}
}






