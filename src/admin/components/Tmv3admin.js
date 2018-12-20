import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import { fetchtmv3All, checkcertNumber, clearStatus, saveTmv3Details} from '../../actions/tmv3actions';
class Tmv3admin extends Component {
    constructor(props){
    	super(props);
        this.state = {
            showModal: false, 
            Factor:'',
            Manufacturer:'',
            Approved_Mixing_Valve:'',
            Unique_ID:'',
            certnum:'',
            certdate:'',
            Certificate_Letters:'',
            HPB:'',
            HPB_comment:'',
            Pts_Comments:'',
            HPS:'',
            HPS_comment:'',
            Primary_or_Secondary:'',
            HPW:'',
            HPW_comment:'',
            First_Audit:'',
            HPT44:'',
            HPT44_comment:'',
            Comments:'',
            HPT46:'',
            HPT46_comment:'',
            Extended_Comments:'',
            HPD44:'',
            HPD44_comment:'',
            First_Completed:'',
            HPD46:'',
            HPD46_comment:'',
            Second_Audit:'',
            LPB:'',
            LPB_comment:'',
            Second_Completed:'',
            LPS:'',
            LPS_comment:'',
            Remove_from_Website:'',
            LPT44:'',
            LPT44_comment:'',
            Discontinued_Withdrawn:'',
            LPD44:'',
            LPD44_comment:'',
            New:'',
            LPW:'',
            LPW_comment:'',
            Expiry_Date:'',
            LPT46:'',
            LPT46_comment:'',
            LPD46:'',
            LPD46_comment:'',
            type_app:'tmv3',
            setmethod:'insert'};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.handleSaveUpdated = this.handleSaveUpdated.bind(this);
      this.saveRecord = this.saveRecord.bind(this);
        this.submitTmv3 = this.submitTmv3.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }
    submitTmv3(e){
      e.preventDefault();
        this.props.saveTmv3Details(this.state);
    }
    checkCertificate(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        if (e.target.value.trim() !== '' && e.target.value.length >= 4) {
            this.props.checkcertNumber(e.target.value);
        }
    }
    saveRecord(){
        this.setState({
            Factor: '',
            Manufacturer: '',
            Approved_Mixing_Valve: '',
            Unique_ID: '',
            certnum: '',
            certdate: '',
            Certificate_Letters: '',
            HPB: '0',
            HPB_comment: '',
            Pts_Comments: '',
            HPS: '0',
            HPS_comment: '',
            Primary_or_Secondary: '',
            HPW: '0',
            HPW_comment: '',
            First_Audit: '',
            HPT44: '0',
            HPT44_comment: '',
            Comments: '',
            HPT46: '0',
            HPT46_comment: '',
            Extended_Comments: '',
            HPD44: '0',
            HPD44_comment: '',
            First_Completed: '',
            HPD46: '0',
            HPD46_comment: '',
            Second_Audit: '',
            LPB: '0',
            LPB_comment: '',
            Second_Completed: '',
            LPS: '0',
            LPS_comment: '',
            Remove_from_Website: '0',
            LPT44: '0',
            LPT44_comment: '',
            Discontinued_Withdrawn: '0',
            LPD44: '0',
            LPD44_comment: '',
            New: '0',
            LPW: '0',
            LPW_comment: '',
            Expiry_Date: '',
            LPT46: '0',
            LPT46_comment: '',
            LPD46: '0',
            LPD46_comment: '',
            type_app: 'tmv3',
            setmethod: 'insert'
        },()=>{
            this.props.clearStatus();
            this.open();
        });
    }
    handleDetailUpdate(e) {
        if(e.target.type=='checkbox'){
            this.setState({
                [e.target.name]: (e.target.checked)?'1':'0'
            });
        }
        else{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        
    }
    handleSaveUpdated(data){
        this.setState({
            Factor: data.FACTOR,
            Manufacturer: data.MANUFACTURER,
            Approved_Mixing_Valve: data.APPROVED_MIXING_VALVE,
            Unique_ID: data.UNIQUE_ID,
            certnum: data.CERTIFICATE_NUMBER,
            certdate: data.CERTIFICATE_DATE,
            Certificate_Letters: data.CERTIFICATE_LETTERS,
            HPB: data.HPB=='1'?'1':'0',
            HPB_comment: data.HPB_COMMENT,
            Pts_Comments: data.PTS_COMMENTS,
            HPS: data.HPS=='1'?'1':'0',
            HPS_comment: data.HPS_COMMENT,
            Primary_or_Secondary: data.PRIMARY_OR_SECONDARY,
            HPW: data.HPW=='1'?'1':'0',
            HPW_comment: data.HPW_COMMENT,
            First_Audit: data.FIRST_AUDIT   ,
            HPT44: data.HPT44=='1'?'1':'0',
            HPT44_comment: data.HPT44_COMMENT,
            Comments: data.COMMENTS,
            HPT46: data.HPT46=='1'?'1':'0',
            HPT46_comment: data.HPT46_COMMENT,
            Extended_Comments: data.EXTENDED_COMMENTS,
            HPD44: data.HPD44=='1'?'1':'0',
            HPD44_comment: data.HPD44_COMMENT,
            First_Completed: data.FIRST_COMPLETED,
            HPD46: data.HPD46=='1'?'1':'0',
            HPD46_comment: data.HPD46_COMMENT,
            Second_Audit: data.SECOND_AUDIT,
            LPB: data.LPB=='1'?'1':'0',
            LPB_comment: data.LPB_COMMENT,
            Second_Completed: data.SECOND_COMPLETED,
            LPS: data.LPS=='1'?'1':'0',
            LPS_comment: data.LPS_COMMENT,
            Remove_from_Website: data.REMOVE_FROM_WEBSITE=='1'?'1':'0',
            LPT44: data.LPT44=='1'?'1':'0',
            LPT44_comment: data.LPT44_COMMENT,
            Discontinued_Withdrawn: data.DISCONTINUED_WITHDRAWN=='1'?'1':'0',
            LPD44: data.LPD44=='1'?'1':'0',
            LPD44_comment: data.LPD44_COMMENT,
            New: data.NEW=='1'?'1':'0',
            LPW: data.LPW=='1'?'1':'0',
            LPW_comment: data.LPW_COMMENT,
            Expiry_Date: data.EXPIRY_DATE,
            LPT46: data.LPT46=='1'?'1':'0',
            LPT46_comment: data.LPT46_COMMENT,
            LPD46: data.LPD46=='1'?'1':'0',
            LPD46_comment: data.LPD46_COMMENT,
            build_app_id: data.BUILD_APP_ID,
            type_app: 'tmv3',
            setmethod: 'update'
        },()=>{
            this.props.clearStatus();
            this.open();
        })
    }
    componentWillMount() {
        this.props.fetchtmv3All();
    }
    render() {
        let tmv3all = (this.props.tmv3all)? this.props.tmv3all.tmv3files:[];let self = this;
        function editData(cell, row) {
            return <span><a href="" onClick={(e) => { e.preventDefault(); self.handleSaveUpdated(row);}}><span className="glyphicon glyphicon-edit"></span></a></span>
        }
        return (
            <div className="class-name">
            <SplitButton
             bsStyle='success'
             title='TMV 3 Manage'
            >
             <MenuItem eventKey="1" onClick={this.saveRecord.bind(this)}>Add Approval</MenuItem>
            </SplitButton>
            <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
              <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{'width':'900px'}}>
              <div>
                            {this.props.savestatus!=''?
                                <div class="alert alert-info">
                                    <strong>{this.props.savestatus}!</strong>
                                </div>:''}
                            <br />
                 <form id="tmv3_frm" >
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td><b>Factor</b></td><td><input name="Factor" value={this.state.Factor} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                <td><b>Manufacturer</b></td><td><input name="Manufacturer" value={this.state.Manufacturer} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                            </tr>
                            <tr>
                                <td><b>Mixing Valve</b></td><td><input name="Approved_Mixing_Valve" value={this.state.Approved_Mixing_Valve} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                <td><b>Unique ID</b></td><td><input name="Unique_ID" value={this.state.Unique_ID} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                            </tr>
                            <tr>
                                    <td><b>Certificate Numbers</b></td><td><input name="certnum" disabled={this.state.setmethod=='update'} value={this.state.certnum} onChange={this.checkCertificate.bind(this)} placeholder="certificate number" type="number" class="textbox"  size="5"/>
                                    /<input name="certdate" disabled={this.state.setmethod=='update'} value={this.state.certdate} onChange={this.handleDetailUpdate.bind(this)} placeholder="certificate date" type="number" class="textbox"  size="5"/>
                                   /<input name="Certificate_Letters" disabled={this.state.setmethod=='update'} value={this.state.Certificate_Letters} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox" placeholder="certificate letter" size="4"/>
                                </td>
                                <td><b>HPB</b><input name="HPB" onChange={this.handleDetailUpdate.bind(this)}  checked={this.state.HPB=='0'?false:true}  type="checkbox" /></td>
                                <td> <b>Economy</b> <input name="HPB_comment" value={this.state.HPB_comment} onChange={this.handleDetailUpdate.bind(this)} id="TMV3_HPB_comment" type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Pts Comments</b></td><td><input name="Pts_Comments" value={this.state.Pts_Comments} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                <td><b>HPS</b> <input name="HPS" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.HPS=='0'?false:true} id="TMV3_HPS" type="checkbox" /></td>
                                <td> <b>Economy</b> <input name="HPS_comment" value={this.state.HPS_comment} onChange={this.handleDetailUpdate.bind(this)} id="TMV3_HPS_comment" type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Primary_or_Secondary</b></td><td>
                                        <select name="Primary_or_Secondary" value={this.state.Primary_or_Secondary} onChange={this.handleDetailUpdate.bind(this)} >
                                            <option value="Primary">Primary</option>
                                            <option value="Secondary">Secondary</option>
                                        </select>
                                </td>
                                <td><b>HPW</b> <input name="HPW" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.HPW=='0'?false:true} type="checkbox" /></td>
                                <td> <b>Economy</b><input name="HPW_comment" value={this.state.HPW_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>First_Audit</b></td><td><input name="First_Audit" value={this.state.First_Audit} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                 <td><b>HPT44</b> <input name="HPT44" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.HPT44=='0'?false:true} type="checkbox" /> </td>
                                 <td><b>Economy</b> <input name="HPT44_comment" value={this.state.HPT44_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Comments</b></td><td><input name="Comments" value={this.state.Comments} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="30"/></td>
                                 <td><b>HPT46</b> <input name="HPT46" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.HPT46=='0'?false:true} type="checkbox" /></td>
                                 <td> <b>Economy</b> <input name="HPT46_comment" value={this.state.HPT46_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Extended Comments</b></td><td><input name="Extended_Comments" value={this.state.Extended_Comments} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                <td><b>HPD44</b> <input name="HPD44" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.HPD44=='0'?false:true} type="checkbox" /></td>
                                <td><b>Economy</b> <input name="HPD44_comment" value={this.state.HPD44_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>First_Completed</b></td><td><input name="First_Completed" value={this.state.First_Completed} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                <td><b>HPD46</b> <input name="HPD46" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.HPD46=='0'?false:true}  type="checkbox" /></td>
                                <td><b>Economy</b> <input name="HPD46_comment" value={this.state.HPD46_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Second_Audit</b></td><td><input name="Second_Audit" value={this.state.Second_Audit} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="30"/></td>
                                 <td><b>LPB</b> <input name="LPB" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPB=='0'?false:true} type="checkbox" /></td>
                                 <td><b>Economy</b> <input name="LPB_comment" value={this.state.LPB_comment} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Second_Completed</b></td><td><input name="Second_Completed" value={this.state.Second_Completed} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="30"/></td>
                                <td><b>LPS</b> <input name="LPS" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPS=='0'?false:true} type="checkbox" /></td>
                                <td><b>Economy</b> <input name="LPS_comment" value={this.state.LPS_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>

                            <tr>
                                <td><b>Remove_from_Website</b></td><td><input name="Remove_from_Website" value={this.state.Remove_from_Website} onChange={this.handleDetailUpdate.bind(this)} checked={this.state.Remove_from_Website=='0'?false:true} type="checkbox" /></td>
                                <td><b>LPT44</b> <input name="LPT44" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPT44=='0'?false:true} type="checkbox" /></td>
                                <td> <b>Economy</b> <input name="LPT44_comment" value={this.state.LPT44_comment} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Discontinued_Withdrawn</b></td><td><input name="Discontinued_Withdrawn" value={this.state.Discontinued_Withdrawn} onChange={this.handleDetailUpdate.bind(this)} checked={this.state.Discontinued_Withdrawn=='0'?false:true} type="checkbox" /></td>
                                <td><b>LPD44</b> <input name="LPD44" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPD44=='0'?false:true} type="checkbox"  /></td>
                                <td> <b>Economy</b> <input name="LPD44_comment" value={this.state.LPD44_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>New</b></td><td><input name="New"  onChange={this.handleDetailUpdate.bind(this)}checked={this.state.New=='0'?false:true}  type="checkbox" /></td>
                                <td><b>LPW</b> <input name="LPW" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPW=='0'?false:true} type="checkbox" /></td>
                                <td><b>Economy</b> <input name="LPW_comment" value={this.state.LPW_comment} onChange={this.handleDetailUpdate.bind(this)}  type="text" class="textbox"  size="1"/></td>
                            </tr>
                            <tr>
                                <td><b>Expiry_Date</b></td><td>
                                {this.state.setmethod=='update'?
                                <input class="textbox" name="Expiry_Date" value={this.state.Expiry_Date} onChange={this.handleDetailUpdate.bind(this)} type="text" max="2200-12-31"/>
                                :
                                <input class="textbox" name="Expiry_Date" value={this.state.Expiry_Date} onChange={this.handleDetailUpdate.bind(this)} type="date" max="2200-12-31"/>}
                                </td>
                                <td><b>LPT46</b> <input name="LPT46" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPT46=='0'?false:true} type="checkbox" /></td>
                                <td><b>Economy</b> <input name="LPT46_comment" value={this.state.LPT46_comment} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="1"/></td>
                            </tr>

                            <tr>
                                <td></td><td></td><td><b>LPD46</b> <input name="LPD46" onChange={this.handleDetailUpdate.bind(this)} checked={this.state.LPD46=='0'?false:true} type="checkbox" /></td>
                                <td><b>Economy</b> <input name="LPD46_comment" value={this.state.LPD46_comment} onChange={this.handleDetailUpdate.bind(this)} type="text" class="textbox"  size="1"/></td>
                            </tr>                            

                        </tbody></table>
                                <input type="button" onClick={this.submitTmv3.bind(this)} class="btn btn-primary" id="add_tmv3" value="Save Approval"/>
                </form>
              </div>
                </Modal.Body>             
            </Modal>
                <div>
                    <BootstrapTable data={tmv3all} striped={true} hover={true} pagination={true} search={true} exportCSV={true} bodyStyle={{ 'zIndex': '-1 !important', 'overflow': 'visible' }}>
                        <TableHeaderColumn dataField="FACTOR" isKey={true} dataSort={true}>Factor</TableHeaderColumn>
                        <TableHeaderColumn dataField="APPROVED_MIXING_VALVE" dataSort={true}>Mixing Valve</TableHeaderColumn>
                        <TableHeaderColumn dataField="UNIQUE_ID" dataSort={true} >Unique ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="CERT_ID" dataSort={true}  >Certificate</TableHeaderColumn>
                        <TableHeaderColumn dataField="EXPIRY_DATE" dataSort={true}  >Expiry Date</TableHeaderColumn>
                        <TableHeaderColumn dataFormat={editData}>Edit</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    tmv3all: state.tmv3all.tmv3,
    savestatus: state.savestatus
});

function mapDispatchToProps(dispatch){
    return {
        fetchtmv3All(){
            dispatch(fetchtmv3All())
        },
        checkcertNumber(certnum){
            dispatch(checkcertNumber(certnum));
        },
        clearStatus(){
            dispatch(clearStatus());
        },
        saveTmv3Details(send_data){
            dispatch(saveTmv3Details(send_data));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tmv3admin)