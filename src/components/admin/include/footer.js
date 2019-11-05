import React , {Component} from 'react';

export default class Footer extends Component
{
	render(){
		return(
			<React.Fragment>  
				<footer className="main-footer">
				    <strong>Copyright &copy; 2019 </strong>
				    All rights reserved.
				    <div className="float-right d-none d-sm-inline-block">
				      <b>Version</b> { this.props.version }
				    </div>
				 </footer>
			</React.Fragment>  
		)
	}
}


