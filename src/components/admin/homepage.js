import React , {Component} from 'react';
import Breadcumb from './partials/breadcumb';

export default class Homepage extends Component
{
	render(){
		return(
			<React.Fragment>  

				<div className="content-wrapper">
					<Breadcumb title='Dashboard' link='Dashboard'/>
				    
				    <section className="content">
				      <div className="container-fluid">

				        <div className="row">
				          <div className="col-lg-3 col-6">

				            <div className="small-box bg-info">
				              <div className="inner">
				                <h3>150</h3>

				                <p>New Orders</p>
				              </div>
				              <div className="icon">
				                <i className="ion ion-bag"></i>
				              </div>
				              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
				            </div>
				          </div>
				        </div>
				      </div>
				    </section>
				  </div>

			</React.Fragment>  
		)
	}
}


