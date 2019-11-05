import React , {Component} from 'react';
import Breadcumb from '../partials/breadcumb';

export default class Profile extends Component
{
  render(){
    return(
      <React.Fragment>  

        <div className="content-wrapper">
          <Breadcumb title='Profile' link='Profile'/>
            
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  
                  <div className="col-md-3">
                    <div className="card card-primary card-outline">
                      <div className="card-body box-profile">
                        <div className="text-center">
                          <img src={'/admin/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User " />
                        </div>
                        <h3 className="profile-username text-center">Amanat Juwel</h3>
                        <p className="text-muted text-center">Software Engineer</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <div className="card">
                      <div className="card-header p-2">
                        <ul className="nav nav-pills">
                          <li className="nav-item"><a className="nav-link active" href="#info" data-toggle="tab">Info</a></li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <div className="tab-content">
                          <div className="tab-pane active" id="info">
                            <form className="form-horizontal">
                              <div className="form-group row">
                                <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputName" placeholder="Name" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="inputName2" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputName2" placeholder="Name" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <div className="offset-sm-2 col-sm-10">
                                  <button type="submit" className="btn btn-danger">Save Changes</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                       
                      </div>
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


