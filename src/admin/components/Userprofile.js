import React,{Component} from 'react';
import {DropdownButton,MenuItem} from 'react-bootstrap';
import Tmv2admin from './Tmv2admin';
import Ciasadmin from './Ciasadmin';
import Ukasapprovaladmin from './Ukasapprovaladmin';
import DTCadmin from './DTCadmin';
import Tmv3admin from './Tmv3admin';
import Login from './Login';
import {  logoutUser} from '../../actions/loginactions';
import { connect} from 'react-redux';
class Userprofile extends Component {
    constructor(props){
    	super(props);
      this.state = { typeApprovalSection: '', selectionTitle:'Select Section'};
    }
    handleSectionSelect(eventKey){
      this.setState({typeApprovalSection:eventKey});
    }
    logoutUser(){
      this.props.logoutUser();
    }
    render() {
      let adminButton = ''; let selectionTitle = 'Select Section';
      switch (this.state.typeApprovalSection) {
        case '1':
          adminButton = <Tmv2admin />;
          selectionTitle = 'NSF TMV2';
          break;
        case '2':
          adminButton = <Tmv3admin/>;
          selectionTitle='NSF TMV3';
          break;
        case '3':
          adminButton = <Ciasadmin />;
          selectionTitle = 'NSF CIAS';
         break;
        case '4':
          adminButton = <DTCadmin />;
          selectionTitle = 'BS EN 15092';
          break;
       case '5':
          adminButton = <Ukasapprovaladmin />;
          selectionTitle = 'UKAS Product Certification';
         break;
        default:
          adminButton='';
      }
        return (
          <div className="container-fluid">
                 <div className="row">
                 <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                             Add/Edit Approvals
                             </div>
                             {
                    this.props.login.checkingLogin == false && this.props.login.loggedChecked == true && this.props.login.loginToken!=false?
                               <div className="panel-body" style={{"minHeight":"170px"}}>

                                  <div className='row'>
                                      <div className='col-lg-3'>
                                        <DropdownButton
                                          bsStyle="primary"
                                          title={selectionTitle}
                                          id={`dropdown-basic`} onClick={this.handleSectionSelect.bind(this)}
                                        >
                                          <MenuItem eventKey="1"  onSelect={this.handleSectionSelect.bind(this)} >NSF TMV2</MenuItem>
                                          <MenuItem eventKey="2"  onSelect={this.handleSectionSelect.bind(this)} >NSF TMV3</MenuItem>
                                          <MenuItem eventKey="3"  onSelect={this.handleSectionSelect.bind(this)} >NSF CIAS</MenuItem>
                                          <MenuItem eventKey="4"  onSelect={this.handleSectionSelect.bind(this)} >BS EN 15092</MenuItem>
                                          <MenuItem eventKey="5"  onSelect={this.handleSectionSelect.bind(this)} >UKAS Product Certification</MenuItem>
                                        </DropdownButton>
                                      </div>
                                      <div className='col-lg-3'>

                                      </div>
                                      <div className='col-lg-3'>

                                      </div>
                                      <div className='col-lg-3'>
                                          <span className="pull-right"><button className="btn btn-primary" onClick={this.logoutUser.bind(this)}>Log Out</button></span> 
                                      </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-12">
                                      {adminButton}
                                    </div>
                                  </div>
                             </div>:
                      <div className="panel-body" style={{ "minHeight": "170px" }}>
                        <Login/>
                      </div>
                             }
                         </div>

                     </div>

             </div>
         </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
  login:state.login
})

function mapDispatchToProps(dispatch){
  return {

        logoutUser(){
            dispatch(logoutUser());
        }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Userprofile);