import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import { fetchDtcAll, saveDtcDetails, checkcertNumber,clearStatus} from '../../actions/dtcactions';
import axios from 'axios';
class DTCadmin extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false,
      Manufacturer:'',
      Approved_Mixing_Valve:'',
      description:'',
      Unique_ID:'',
      Certificate_Letters:'BC',
      certnumber:'',
      certdate:'',
      Expiry_Date:''};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    this.handleSaveUpdated = this.handleSaveUpdated.bind(this);
  }
  componentWillMount() {

    this.props.fetchDtcAll();

  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  saveRecord(){
    this.setState({
      Manufacturer: '',
      Approved_Mixing_Valve: '',
      description: '',
      Unique_ID: '',
      Certificate_Letters: 'BC',
      certnumber: '',
      certdate: '',
      Expiry_Date: '',
      type_app: 'dtc',
      setmethod: 'insert'
    },()=>{
      this.props.clearStatus();
      this.open();
    })
  }
  handleDetailUpdate(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSaveCias(e){
    e.preventDefault();
    this.props.saveDtcDetails(this.state);

  }
  handleSaveUpdated(data){
    this.setState({
      Manufacturer: data.MANUFACTURER,
      Approved_Mixing_Valve: data.APPROVED_MIXING_VALVE,
      description: data.DESCRIPTION_PRODCERT,
      Unique_ID: data.UNIQUE_ID,
      Certificate_Letters: 'BC',
      certnumber: data.CERTIFICATE_NUMBER,
      certdate: data.CERTIFICATE_DATE,
      build_app_id: data.BUILD_APP_ID,
      Expiry_Date: data.EXPIRY_DATE,
      type_app:'dtc',
      setmethod:'update'},()=>{
        this.props.clearStatus();
        this.open();
    });
  }
  checkCertificate(e){
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.value.trim()!='' && e.target.value.length>=4) {
      this.props.checkcertNumber(e.target.value);
    }
  }
    render() {
      let dtcfiles = (this.props.dtcfiles) ? this.props.dtcfiles:[];
      let self = this;
      function bdataFormater(cell,row){
        return <span>{cell}</span>;
      }
      function editData(cell,row){
        return <span><a href="" onClick={(e) => { e.preventDefault(); self.handleSaveUpdated(row); }}><span className="glyphicon glyphicon-edit"></span></a></span>
      }

        return (
          <div className="class-name">
          <button className="btn btn-primary"  onClick={this.saveRecord.bind(this)}><span className="glyphicon glyphicon-plus"></span> Add Approval</button>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
            <Modal.Header closeButton>
              <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{'width':'900px'}}>
            <div>
            {this.props.savestatus}<br/>
            <form id="cform"  >
                    <table className="table table-bordered">
                      <tbody>
                        <tr><td><b>Company</b></td>
                        <td><input name="Manufacturer" ref="Manufacturer"  value={this.state.Manufacturer}  type="text" className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)} /></td></tr>
                        <tr><td><b>Approved Valve</b></td>
                        <td><input name="Approved_Mixing_Valve" ref="Approved_Mixing_Valve"  value={this.state.Approved_Mixing_Valve} type="text" className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)}/></td></tr>
                        <tr><td><b>Description</b></td>
                        <td><input name="description" ref="description"  type="text"  value={this.state.description}className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)}/></td></tr>
                        <tr><td><b>Unique Id	</b></td>
                          <td><input name="Unique_ID" ref="Unique_ID" type="text" value={this.state.Unique_ID} className="textbox" maxLength="100" size="30" onChange={this.handleDetailUpdate.bind(this)} /></td></tr>
                        <tr><td><b>Certification ID </b>
                        </td><td>
                        <input name="Certificate_Letters" ref="Certificate_Letters"  value={this.state.Certificate_Letters} type="text" className="textbox"  size="2"  onChange={this.handleDetailUpdate.bind(this)} disabled={this.state.setmethod=='update'}/>
                        <input name="certnumber" ref="certnumber"  value={this.state.certnumber} placeholder="certificate number" type="number" className="textbox" size="10" onChange={this.checkCertificate.bind(this)} disabled={this.state.setmethod=='update'}/>
                        <input name="certdate" ref="certdate" value={this.state.certdate} placeholder="certificate date"  type="number" className="textbox" size="10" onChange={this.handleDetailUpdate.bind(this)} disabled={this.state.setmethod=='update'}/></td></tr>
                        <tr><td><b>Expiry</b></td>
                          <td><input name="Expiry_Date" ref="Expiry_Date" type="text" value={this.state.Expiry_Date} className="textbox" maxLength="100" size="30" onChange={this.handleDetailUpdate.bind(this)} /></td></tr>

                        <tr><td colSpan="2"></td></tr>
                      </tbody>
                    </table>
                    <input type="submit" className="btn btn-primary" value="Save Approval" onClick={this.handleSaveCias.bind(this)} disabled={this.props.savestatus!=''} />
                </form>
            </div>
              </Modal.Body>
           
          </Modal>
          <div>
              <BootstrapTable data={dtcfiles}  striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                              <TableHeaderColumn dataField="BUILD_APP_ID"  isKey={true}  dataSort={true} dataFormat={bdataFormater} >Id</TableHeaderColumn>
                              <TableHeaderColumn dataField="MANUFACTURER"    dataSort={true}>Company</TableHeaderColumn>
                             <TableHeaderColumn dataField="APPROVED_MIXING_VALVE"    dataSort={true}>Approved Valve</TableHeaderColumn>
                             <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"   dataSort={true} >Description</TableHeaderColumn>
                             <TableHeaderColumn dataField="UNIQUE_ID"   dataSort={true} >Type</TableHeaderColumn>
                             <TableHeaderColumn dataField="CERT_ID"  dataSort={true} >Certificate ID</TableHeaderColumn>
                             <TableHeaderColumn dataField="EXPIRY_DATE"  >Expiry</TableHeaderColumn>
                            <TableHeaderColumn dataField="BUILD_APP_ID" dataFormat={editData} >Edit</TableHeaderColumn>
           </BootstrapTable>
          </div>
          </div>
        );
    }
}

function mapStateToProps(state,props) {
  return{
    dtcfiles: state.dtcall.dtcfiles,
    savestatus:state.savestatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveDtcDetails(send_data){
      dispatch(
        saveDtcDetails(send_data)
      )
    },
    checkcertNumber(certnum){
      dispatch(
        checkcertNumber(certnum)
      )
    },
    fetchDtcAll(){
      dispatch(
        fetchDtcAll()
      )
    },
    clearStatus(){
      dispatch(clearStatus());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DTCadmin)
