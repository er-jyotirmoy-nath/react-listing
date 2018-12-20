import React,{Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import { fetchciasAll, saveCiasDetails, checkcertNumber,clearStatus} from '../../actions/ciasactions';
import axios from 'axios';
class Ciasadmin extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false,
      Manufacturer:'',
      description:'',
      sizes:'',
      Certificate_Letters:'BC',
      certnumber:'',
      certdate:'',};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    this.handleSaveUpdated = this.handleSaveUpdated.bind(this);
  }
  componentWillMount() {

      this.props.fetchciasAll();

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
      description: '',
      sizes: '',
      Certificate_Letters: 'BC',
      certnumber: '',
      certdate: '',
      type_app: 'cias',
      setmethod: 'insert'
    },()=>{
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
    this.props.saveCiasDetails(this.state);

  }
  handleSaveUpdated(data){
    this.setState({
      Manufacturer: data.MANUFACTURER,
      description: data.DESCRIPTION_PRODCERT,
      sizes: data.SIZES_CIAS,
      Certificate_Letters: 'BC',
      certnumber: data.CERTIFICATE_NUMBER,
      certdate: data.CERTIFICATE_DATE,
      build_app_id: data.BUILD_APP_ID,
      type_app:'cias',
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
      let ciasFiles = (this.props.ciasfiles)?this.props.ciasfiles[0]:[];
      let self = this;
      function bdataFormater(cell,row){
        return <span>{cell}</span>;
      }
      function editData(cell,row){
        return <span><a href="" onClick={(e) => { e.preventDefault(); self.handleSaveUpdated(row);}}>{cell}</a></span>
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
                        <tr><td><b>Description</b></td>
                        <td><input name="description" ref="description"  value={this.state.description} type="text" className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)}/></td></tr>
                        <tr><td><b>Sizes</b></td>
                        <td><input name="sizes" ref="sizes"  type="text"  value={this.state.sizes}className="textbox" maxLength="100" size="30"  onChange={this.handleDetailUpdate.bind(this)}/></td></tr>
                        <tr><td><b>Certification ID </b>
                        </td><td>
                        <input name="Certificate_Letters" ref="Certificate_Letters"  value={this.state.Certificate_Letters} type="text" className="textbox"  size="2"  onChange={this.handleDetailUpdate.bind(this)} disabled={this.state.setmethod=='update'}/>
                        <input name="certnumber" ref="certnumber"  value={this.state.certnumber} placeholder="certificate number" type="number" className="textbox" size="10" onChange={this.checkCertificate.bind(this)} disabled={this.state.setmethod=='update'}/>
                        <input name="certdate" ref="certdate" value={this.state.certdate} placeholder="certificate date"  type="number" className="textbox" size="10" onChange={this.handleDetailUpdate.bind(this)} disabled={this.state.setmethod=='update'}/></td></tr>
                        <tr><td colSpan="2"></td></tr>
                      </tbody>
                    </table>
                    <input type="submit" className="btn btn-primary" value="Save Approval" onClick={this.handleSaveCias.bind(this)} disabled={this.props.savestatus!=''} />
                </form>
            </div>
              </Modal.Body>
            
          </Modal>
          <div>
            <BootstrapTable data={ciasFiles}  striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                              <TableHeaderColumn dataField="EDIT"  isKey={true}  dataSort={true} dataFormat={bdataFormater} >Id</TableHeaderColumn>
                             <TableHeaderColumn dataField="MANUFACTURER"    dataSort={true}>Company</TableHeaderColumn>
                             <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"   dataSort={true} >Description</TableHeaderColumn>
                             <TableHeaderColumn dataField="SIZES_CIAS"   dataSort={true} >Sizes</TableHeaderColumn>
                             <TableHeaderColumn dataField="CERTIFICATE_NUMBER"  dataSort={true} >Certificate Number</TableHeaderColumn>
                             <TableHeaderColumn dataField="EXPIRY_DATE"  dataSort={true} >Expiry Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="CERT_ID" dataFormat={editData} >Certificate Id</TableHeaderColumn>
           </BootstrapTable>
          </div>
          </div>
        );
    }
}

function mapStateToProps(state,props) {
  return{
    ciasfiles:state.ciasall.ciasfiles,
    savestatus:state.savestatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveCiasDetails(send_data){
      dispatch(
        saveCiasDetails(send_data)
      )
    },
    checkcertNumber(certnum){
      dispatch(
        checkcertNumber(certnum)
      )
    },
    fetchciasAll(){
      dispatch(
        fetchciasAll()
      )
    },
    clearStatus(){
      dispatch(clearStatus());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ciasadmin)
