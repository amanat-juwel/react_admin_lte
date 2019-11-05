import React , {Component} from 'react';
import Breadcumb from '../partials/breadcumb';
import axios from 'axios';

export default class User extends Component
{

  state = {
    users: [],
    apiToken: 'abc'
  }

  componentDidMount() {
    axios.get(`http://localhost/lumen_api/user?api_token=`+this.state.apiToken)
      .then(res => {
        //console.log(res.data.message)
        const users = res.data.message;
        this.setState({ users });
      })
  }

  newModal = () => {
      alert()
  }

  render(){
    return(
      <React.Fragment>  
        
        <div className="content-wrapper">
          <Breadcumb title='Users' link='Users'/>
            
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h3 className="card-title">Users <button className="btn btn-success" onClick={this.newModal}>Add New <i className="fas fa-user-plus fa-fw"></i></button></h3>
                        
                        <div className="card-tools">
                          <div className="input-group input-group-sm">
                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />

                            <div className="input-group-append">
                              <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
           
                      <div className="card-body table-responsive p-0">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>User</th>
                              <th>Email</th>
                              <th>Role</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>

                            { this.state.users.map(user => 
                              <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>Admin</td>
                                <td>Edit Delete</td>
                              </tr>
                            )}
                        
                          </tbody>
                        </table>
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


