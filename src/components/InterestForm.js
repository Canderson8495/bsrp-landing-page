import React from 'react';
import { header, div, h1, form, input } from 'react-bootstrap';
import '../assets/mdb.css'

export class InterestForm extends React.Component {

    render() {
      return (
          <div className="container">

            <div className="row wow fadeIn">

              <div className="col-md-6 mb-4 white-text text-center text-md-left">

                <h1 className="display-4 font-weight-bold">Blue Sky RP</h1>

                <hr className="hr-light"/>

                <p>
                  <strong>Best & free Grand Theft Auto 6 server.</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>The most comprehensive server for Grand Theft Auto 6. Loved by over 5000 users. Active Developers and Active Staff available. Create your own stunning story today.</strong>
                </p>

              </div>

              <div className="col-md-6 col-xl-5 mb-4">

                <div className="card">

                  <div className="card-body">

                    <form name="">
                      <h3 className="dark-grey-text text-center">
                        <strong>Write to us:</strong>
                      </h3>
                      <hr className="hr-dark"/> 

                      <div className="md-form">
                        <i className="fas icon-user prefix grey-text"/>
                        <input type="text" id="form3" placeholder="Enter Name: " className="md-text" style ={personStyle}/>
                      </div>
                      <div className="md-form">
                        <i className="fas icon-envelope prefix grey-text"/>
                        <input type="text" id="form2" placeholder="Enter Email: " className="md-text"/>
                      </div>

                      <div className="md-form">
                        <i className="fas icon-pencil prefix grey-text" style={pencilStyle}></i>
                        <textarea type="text" id="form8" placeholder="Enter Message: " className="md-textarea"></textarea>
                      </div>

                      <div className="text-center">
                        <button className="btn btn-indigo">Send</button>
                      </div>

                    </form>

                  </div>

                </div>

              </div>

            </div>

          </div>
      )
    }
}

const pencilStyle= {
    paddingTop: '15px'
}
const personStyle= {
    paddingBottom: '5px'
}
