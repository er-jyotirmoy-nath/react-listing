import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {Icon,Label} from 'semantic-ui-react';
import Viewdetails from './viewDetails';
import {fetchciasAll,fetchCiasDetails} from '../actions/ciasactions';

class Cias extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    componentWillMount() {
      this.props.fetchciasAll();
    }
    render() {
      let ciasFiles = (this.props.ciasfiles.length>0)?this.props.ciasfiles[0]:[];
      function bdataFormater(cell,row){
        return <Viewdetails details={row} num={cell} type='cias' />;
      }
        return (
          <div className="container-fluid">
                 <div className="row">
                   <div className="col-md-12">
                    <h3> NSF CIAS  </h3>
                         <hr/>
                         <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                                 Check NSF CIAS Approvals
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>
                            <Label as='a' color='blue'>
                                        Total Records
                                        <Label.Detail>{ciasFiles.length}</Label.Detail>
                                      </Label>
                               <BootstrapTable data={ciasFiles} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="MANUFACTURER"  isKey={true}  dataSort={true}>Company</TableHeaderColumn>
                                                <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"  dataSort={true} >Description</TableHeaderColumn>
                                                <TableHeaderColumn dataField="SIZES_CIAS"  dataSort={true} >Sizes</TableHeaderColumn>
                                                 <TableHeaderColumn dataField="CERTIFICATE_NUMBER" dataSort={true} dataFormat={bdataFormater} >Certificate Number</TableHeaderColumn>
                                                
                              </BootstrapTable>

                             </div>

                         </div>

                     </div>
                   </div>
             </div>
        );
    }
}
function mapStateToProps(state) {
  return{
    ciasfiles:state.ciasall.ciasfiles
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchciasAll(){
      dispatch(
        fetchciasAll()
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cias);
