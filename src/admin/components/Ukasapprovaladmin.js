import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import { fetchCertAll, savePdcertDetails, checkcertNumber,clearStatus} from '../../actions/pdcertactions';
import axios from 'axios';
class Ukasapprovaladmin extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false,
      Manufacturer: '',
      specification: '',
      description: '',
      Certificate_Letters: 'BC',
      certnum: '',
      certdate: '',
      Expiry_Date: '',};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    this.handleSaveUpdated = this.handleSaveUpdated.bind(this);
  }
  componentWillMount() {

    this.props.fetchCertAll();

  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  saveRecord(){
    this.setState({
      Manufacturer:'',
      specification:'',
      description:'',
      Certificate_Letters:'BC',
      certnum:'',
      certdate:'',
      Expiry_Date:'',
      build_app_id:'',
      type_app:'pdcert',
      setmethod:'insert',
    },()=>{
      this.open();
    })
  }
  handleDetailUpdate(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSavePdcert(e){
    e.preventDefault();
    this.props.savePdcertDetails(this.state);
    if (this.state.setmethod=='insert') {
      this.setState({
        Manufacturer: '',
        specification: '',
        description: '',
        Certificate_Letters: 'BC',
        certnum: '',
        certdate: '',
        Expiry_Date: '',
        build_app_id: '',
        type_app: 'pdcert',
        setmethod: 'insert',
      });
    }
  }
  handleSaveUpdated(data){
    this.setState({
      Manufacturer: data.MANUFACTURER,
      specification: data.PERFORMANCE_STANDARD,
      description: data.DESCRIPTION_PRODCERT,
      Certificate_Letters: 'BC',
      certnum: data.CERTIFICATE_NUMBER,
      certdate: data.CERTIFICATE_DATE,
      Expiry_Date: data.EXPIRY_DATE,
      build_app_id: data.BUILD_APP_ID,
      type_app:'pdcert',
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
      let pdcertall = (this.props.pdcertall) ? this.props.pdcertall:[];
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
                        <tr><td><b>Performance standard/specification</b></td>
                        <td><input name="specification" ref="description"  value={this.state.specification} type="text" className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)}/></td></tr>
                        <tr><td><b>Description</b></td>
                        <td><input name="description" ref="sizes"  type="text"  value={this.state.description}className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)}/></td></tr>
                        <tr><td><b>Certification ID </b>
                        </td><td>
                        <input name="Certificate_Letters" ref="Certificate_Letters"  value={this.state.Certificate_Letters} type="text" className="textbox"  size="2"  onChange={this.handleDetailUpdate.bind(this)} disabled={this.state.setmethod=='update'}/>
                        <input name="certnum" ref="certnumber"  value={this.state.certnum} placeholder="certificate number" type="number" className="textbox" size="10" onChange={this.checkCertificate.bind(this)} disabled={this.state.setmethod=='update'}/>
                        <input name="certdate" ref="certdate" value={this.state.certdate} placeholder="certificate date"  type="number" className="textbox" size="10" onChange={this.handleDetailUpdate.bind(this)} disabled={this.state.setmethod=='update'}/></td></tr>
                        <tr><td colSpan="2"></td></tr>
                        <tr><td><b>Expiry</b></td><td><input name="Expiry_Date" value={this.state.Expiry_Date} onChange={this.handleDetailUpdate.bind(this)}  type="text" className="textbox" size="30" maxLength="10" /></td></tr>
                      </tbody>
                    </table>
                    <input type="submit" className="btn btn-primary" value="Save Approval" onClick={this.handleSavePdcert.bind(this)} disabled={this.props.savestatus!=''} />
                </form>
            </div>
              </Modal.Body>            
          </Modal>
          <div>
              <BootstrapTable data={pdcertall}  striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                              <TableHeaderColumn dataField="BUILD_APP_ID"  isKey={true}  dataSort={true} dataFormat={bdataFormater} >Id</TableHeaderColumn>
                             <TableHeaderColumn dataField="MANUFACTURER"    dataSort={true}>Company</TableHeaderColumn>
                             <TableHeaderColumn dataField="PERFORMANCE_STANDARD"   dataSort={true} >Performance standard/specification/</TableHeaderColumn>
                             <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"   dataSort={true} >Description</TableHeaderColumn>
                             <TableHeaderColumn dataField="CERTIFICATE_NUMBER"  dataSort={true} >Certificate Number</TableHeaderColumn>
                            <TableHeaderColumn dataField="EXPIRY_DATE" dataSort={true} >Expiry</TableHeaderColumn> 
                            <TableHeaderColumn dataField="BUILD_APP_ID" dataFormat={editData} >Edit</TableHeaderColumn>
           </BootstrapTable>
          </div>
          </div>
        );
    }
}

function mapStateToProps(state,props) {
  return{
    pdcertall: state.pdcertall.pdcertall,
    savestatus:state.savestatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    savePdcertDetails(send_data){
      dispatch(
        savePdcertDetails(send_data)
      )
    },
    checkcertNumber(certnum){
      dispatch(
        checkcertNumber(certnum)
      )
    },
    fetchCertAll(){
      dispatch(
        fetchCertAll()
      )
    },
    clearStatus(){
      dispatch(clearStatus());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ukasapprovaladmin)
