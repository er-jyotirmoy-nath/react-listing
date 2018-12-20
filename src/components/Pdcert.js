import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Icon,Label} from 'semantic-ui-react';
import { fetchCertAll,fetchCertDetails} from '../actions/pdcertactions';
import { Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Viewdetails from './viewDetails';


class Pdcert extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.fetchCertAll();
  }
  render() {
    let pdcertFiles = (this.props.pdcertall)?this.props.pdcertall:[];
    function bdataFormater(cell,row){
      return <Viewdetails details={row} num={cell} type='pdcert' />;
    }
      return (
        <div className="container-fluid">
               <div className="row">
                 <div className="col-md-12">
                  <h3> BuildCert Listings – UKAS product certification 110 mark  </h3>
                       <hr/>
                       <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                           <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                               Check BuildCert Listings – UKAS product certification 110 mark Approvals
                           </div>
                           <div className="panel-body" style={{"minHeight":"170px"}}>
                                    <Label as='a' color='blue'>
                                        Total Records
                                        <Label.Detail>{pdcertFiles.length}</Label.Detail>
                                      </Label>
                             <BootstrapTable data={pdcertFiles} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                              <TableHeaderColumn dataField="MANUFACTURER"  isKey={true}  dataSort={true}>Company</TableHeaderColumn>
                                              <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"  dataSort={true} >Description</TableHeaderColumn>
                                              <TableHeaderColumn dataField="PERFORMANCE_STANDARD"  dataSort={true} >Performance Standard</TableHeaderColumn>
                                              <TableHeaderColumn dataField="EXPIRY_DATE"  dataSort={true} >Expiry Date</TableHeaderColumn>
                                              <TableHeaderColumn dataField="CERT_ID"  dataSort={true}  dataFormat={bdataFormater} >Certificate ID</TableHeaderColumn>
                            </BootstrapTable>

                           </div>

                       </div>

                   </div>
                 </div>
           </div>
      );
  }
}

function mapStateToProps(state,props) {
  return{
    pdcertall:state.pdcertall.pdcertall
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchCertAll(){
      dispatch(
        fetchCertAll()
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pdcert)
