import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import { fetchtmv2All, checkcertNumber, clearStatus, saveTmv2Details} from '../../actions/actioncreators';
class Tmv2admin extends Component {
    constructor(props){
    	super(props);
        this.state = {
            showModal: false, 
            Licensee:'',
            Manufacturer:'',
            Approved_Mixing_Valve:'',
            Unique_ID:'',
            certnum:'',
            certdate:'',
            Certificate_Letters:'',
            HP_1111:'0',
            Comments:'',
            HPB:'0',
            HPB_comment:'',
            Extended_Comments:'',
            HPS:'0',
            HPS_comment:'',
            Pts_Comments:'',
            HPW:'0',
            HPW_comment:'',
            Primary_or_Secondary:'',
            HPT:'0',
            HPT_comment:'',
            First_Audit:'',
            Cold_isol_46_hp:'0',
            First_Completed:'',
            LP_1287:'0',
            Second_Audit:'',
            LPB:'0',
            LPB_comment:'',
            Second_Completed:'',
            LPS:'0',
            LPS_comment:'',
            Discontinued_Withdrawn:'0',
            LPW:'0',
            LPW_comment:'',
            Remove_from_Website:'0',
            LPT:'0',
            LPT_comment:'',
            New:'0',
            LPTx:'0',
            LPTx_comment:'',
            Expiry_Date:'',
            Cold_isol_46_lp:'0',
            type_app:'tmv2',
            setmethod:'insert'};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.handleSaveUpdated = this.handleSaveUpdated.bind(this);
      this.saveRecord = this.saveRecord.bind(this);
    }
    close() {
      this.setState({ showModal: false });
    }

    open() {
      this.setState({ showModal: true });
    }
    submitTmv2(e){
      e.preventDefault();
        this.props.saveTmv2Details(this.state);
    }
    checkCertificate(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        if (e.target.value.trim() !== '' && e.target.value.length >= 4) {
            //this.props.checkcertNumber(e.target.value);
            let value = e.target.value;
            let condition = this.props.tmv2All.filter((item) => item.CERTIFICATE_NUMBER == value);
            if (condition.length > 0) {
                this.props.checkcertNumber();
            }
        }
        else{
            this.props.clearStatus();
        }
    }
    saveRecord(){
        this.setState({
            Licensee: '',
            Manufacturer: '',
            Approved_Mixing_Valve: '',
            Unique_ID: '',
            certnum: '',
            certdate: '',
            Certificate_Letters: '',
            HP_1111: '0',
            Comments: '',
            HPB: '0',
            HPB_comment: '',
            Extended_Comments: '',
            HPS: '0',
            HPS_comment: '',
            Pts_Comments: '',
            HPW: '0',
            HPW_comment: '',
            Primary_or_Secondary: '',
            HPT: '0',
            HPT_comment: '',
            First_Audit: '',
            Cold_isol_46_hp: '0',
            First_Completed: '',
            LP_1287: '0',
            Second_Audit: '',
            LPB: '0',
            LPB_comment: '',
            Second_Completed: '',
            LPS: '0',
            LPS_comment: '',
            Discontinued_Withdrawn: '0',
            LPW: '0',
            LPW_comment: '',
            Remove_from_Website: '0',
            LPT: '0',
            LPT_comment: '',
            New: '0',
            LPTx: '0',
            LPTx_comment: '',
            Expiry_Date: '',
            Cold_isol_46_lp: '0',
            type_app: 'tmv2',
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
            Licensee: data.LICENSEE,
            Manufacturer: data.MANUFACTURER,
            Approved_Mixing_Valve: data.NEW_COMM,
            Unique_ID: data.UNIQUE_ID,
            certnum: data.CERTIFICATE_NUMBER,
            certdate: data.CERTIFICATE_DATE,
            Certificate_Letters: 'BC',
            HP_1111: data.HP_1111=='1'?'1':'0',
            Comments: data.COMMENTS,
            HPB: data.HPB=='1'?'1':'0',
            HPB_comment: data.HPB_COMMENT,
            Extended_Comments: data.EXTENDED_COMMENTS,
            HPS: data.HPS=='1'?'1':'0',
            HPS_comment: data.HPS_COMMENT,
            Pts_Comments: data.PTS_COMMENTS,
            HPW: data.HPW=='1'?'1':'0',
            HPW_comment: data.HPW_COMMENT,
            Primary_or_Secondary: data.PRIMARY_OR_SECONDARY,
            HPT: data.HPT=='1'?'1':'0',
            HPT_comment: data.HPT_COMMENT,
            First_Audit: data.FIRST_AUDIT,
            Cold_isol_46_hp: data.COLD_ISOL_46_HP=='1'?'1':'0',
            First_Completed: data.FIRST_COMPLETED,
            LP_1287: data.LP_1287=='1'?'1':'0',
            Second_Audit: data.SECOND_AUDIT,
            LPB: data.LPB=='1'?'1':'0',
            LPB_comment: data.LPB_COMMENT,
            Second_Completed: data.SECOND_COMPLETED,
            LPS: data.LPS=='1'?'1':'0',
            LPS_comment: data.LPS_COMMENT,
            Discontinued_Withdrawn: data.DISCONTINUED_WITHDRAWN=='1'?'1':'0',
            LPW: data.LPW=='1'?'1':'0',
            LPW_comment: data.LPW_COMMENT,
            Remove_from_Website: data.REMOVE_FROM_WEBSITE=='1'?'1':'0',
            LPT: data.LPT=='1'?'1':'0',
            LPT_comment: data.LPT_COMMENT,
            New: data.NEW=='1'?'1':'0',
            LPTx: data.LPTX=='1'?'1':'0',
            LPTx_comment: data.LPTX_COMMENT,
            Expiry_Date: data.EXPIRY_DATE,
            Cold_isol_46_lp: data.COLD_ISOL_46_LP=='1'?'1':'0',
            build_app_id: data.BUILD_APP_ID,
            type_app: 'tmv2',
            setmethod: 'update'
        },()=>{
            this.props.clearStatus();
            this.open();
        })
    }
    componentWillMount() {
        this.props.fetchtmv2All();
    }
    render() {
        let tmv2All = this.props.tmv2All.length>0 ? this.props.tmv2All:[];let self = this;
        function editData(cell, row) {
            return <span><a href="" onClick={(e) => { e.preventDefault(); self.handleSaveUpdated(row);}}><span className="glyphicon glyphicon-edit"></span></a></span>
        }
        return (
            <div className="class-name">
            <SplitButton
             bsStyle='success'
             title='TMV 2 Manage'
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
                                <div className="alert alert-info">
                                    <strong>{this.props.savestatus}!</strong>
                                </div>:''}
                            <br />
                 <form id="tmv2_frm" >
                 <table className="table table-bordered">
                    <tbody>
                       <tr>
                            <td><b>Licensee</b></td><td> <input name="Licensee" value={this.state.Licensee} onChange={this.handleDetailUpdate.bind(this)} id="licensee" type="text" className="textbox"  size="30" /></td>
                            <td><b>Manufacturer</b> </td><td><input name="Manufacturer" value={this.state.Manufacturer} onChange={this.handleDetailUpdate.bind(this)} id="Manufacturer" type="text" className="textbox"  size="30"/></td>
                        </tr>
                        <tr>
                            <td><b>Mixing Valve</b></td><td><input name="Approved_Mixing_Valve" value={this.state.Approved_Mixing_Valve} onChange={this.handleDetailUpdate.bind(this)} id="Approved_Mixing_Valve" type="text" className="textbox"  size="30"/></td>
                            <td><b>Unique Valve ID</b></td><td> <input name="Unique_ID" value={this.state.Unique_ID} onChange={this.handleDetailUpdate.bind(this)} id="Unique_ID" type="text" className="textbox"  size="30" /></td>
                        </tr>
                        <tr>
                            <td><b>Certificate Numbers</b></td><td><input name="certnum" disabled={this.state.setmethod=='update'} value={this.state.certnum} onChange={this.checkCertificate.bind(this)} id="certnum" type="number" className="textbox" placeholder="certificate number" size="10" /><br/></td>
                            <td>/<input name="Certificate_Letters" disabled={this.state.setmethod=='update'} value={this.state.Certificate_Letters} onChange={this.handleDetailUpdate.bind(this)} id="Certificate_Letters" type="text" className="textbox" placeholder="certificate letter" size="4" /></td>
                            <td><input name="certdate" disabled={this.state.setmethod=='update'} value={this.state.certdate} onChange={this.handleDetailUpdate.bind(this)} id="certdate" type="number" className="textbox" placeholder="certificate date" size="10"/> </td>
                        </tr>
                        <tr>
                            <td><b>Cold Isol 46</b> <input name="Cold_isol_46_lp" checked={this.state.Cold_isol_46_lp == '0' ? false : true} onChange={this.handleDetailUpdate.bind(this)} id="Cold_isol_46_lp" type="checkbox" /></td>
                            <td></td><td><b>HP_1111</b><input name="HP_1111" checked={this.state.HP_1111=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="HP_1111" type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td><b>Comments</b></td><td><input name="Comments" value={this.state.Comments} onChange={this.handleDetailUpdate.bind(this)} id="Comments" type="text" className="textbox"  size="30"/></td>
                            <td><b>B</b> <input name="HPB" checked={this.state.HPB=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="HPB" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="HPB_comment" value={this.state.HPB_comment} onChange={this.handleDetailUpdate.bind(this)} id="HPB_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Extended Comments</b></td><td><input name="Extended_Comments" value={this.state.Extended_Comments} onChange={this.handleDetailUpdate.bind(this)} id="Extended_Comments" type="text" className="textbox"  size="30"/></td>
                            <td><b>S</b> <input name="HPS" checked={this.state.HPS=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="HPS" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="HPS_comment" value={this.state.HPS_comment} onChange={this.handleDetailUpdate.bind(this)} id="HPS_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Pts Comments</b></td><td><input name="Pts_Comments" value={this.state.Pts_Comments} onChange={this.handleDetailUpdate.bind(this)} id="Pts_Comments" type="text" className="textbox"  size="30"/></td>
                            <td><b>W</b> <input name="HPW" checked={this.state.HPW=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="HPW" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="HPW_comment" value={this.state.HPW_comment} onChange={this.handleDetailUpdate.bind(this)} id="HPW_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Primary_or_Secondary</b></td><td><input name="Primary_or_Secondary" value={this.state.Primary_or_Secondary} onChange={this.handleDetailUpdate.bind(this)} id="Primary_or_Secondary" type="text" className="textbox"  size="30"/></td>
                            <td><b>T</b> <input name="HPT" checked={this.state.HPT=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="HPT" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="HPT_comment" value={this.state.HPT_comment} onChange={this.handleDetailUpdate.bind(this)} id="HPT_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>First_Audit</b></td><td><input name="First_Audit" value={this.state.First_Audit} onChange={this.handleDetailUpdate.bind(this)} id="First_Audit" type="text" className="textbox"  size="30"/></td>
                            <td><b>Cold Isol 46</b> <input name="Cold_isol_46_hp" checked={this.state.Cold_isol_46_hp=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="Cold_isol_46_hp" type="checkbox" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>First_Completed</b></td><td><input name="First_Completed" value={this.state.First_Completed} onChange={this.handleDetailUpdate.bind(this)} id="First_Completed" type="text" className="textbox"  size="30"/></td>
                            <td><b>LP_1287</b> <input name="LP_1287" checked={this.state.LP_1287=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="LP_1287" type="checkbox" /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Second_Audit</b></td><td><input name="Second_Audit" value={this.state.Second_Audit} onChange={this.handleDetailUpdate.bind(this)} id="Second_Audit" type="text" className="textbox"  size="30" /></td>
                            <td><b>B</b> <input name="LPB" checked={this.state.LPB=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="LPB" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="LPB_comment" value={this.state.LPB_comment} onChange={this.handleDetailUpdate.bind(this)} id="LPB_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Second_Completed</b></td><td><input name="Second_Completed" value={this.state.Second_Completed} onChange={this.handleDetailUpdate.bind(this)} id="Second_Completed" type="text" className="textbox"  size="30"/></td>
                            <td><b>S</b> <input name="LPS" checked={this.state.LPS=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="LPS" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="LPS_comment" value={this.state.LPS_comment}  onChange={this.handleDetailUpdate.bind(this)}id="LPS_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Discontinued_Withdrawn</b></td><td><input name="Discontinued_Withdrawn" checked={this.state.Discontinued_Withdrawn == '0' ? false : true} value={this.state.Discontinued_Withdrawn} onChange={this.handleDetailUpdate.bind(this)} id="Discontinued_Withdrawn" type="checkbox" /></td>
                            <td><b>W</b> <input name="LPW" checked={this.state.LPW=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="LPW" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="LPW_comment" value={this.state.LPW_comment} onChange={this.handleDetailUpdate.bind(this)} id="LPW_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Remove_from_Website</b></td><td><input name="Remove_from_Website" value={this.state.Remove_from_Website} onChange={this.handleDetailUpdate.bind(this)} id="Remove_from_Website" type="checkbox"  /></td>
                            <td><b>T</b> <input name="LPT" checked={this.state.LPT=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="LPT" type="checkbox" /></td>
                            <td><b>Economy</b> <input name="LPT_comment" value={this.state.LPT_comment} onChange={this.handleDetailUpdate.bind(this)} id="LPT_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>New</b></td><td><input name="New" checked={this.state.New=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="New" type="checkbox" /></td>
                            <td><b>T 0.2</b> <input name="LPTx" checked={this.state.LPTx=='0'?false:true} onChange={this.handleDetailUpdate.bind(this)} id="LPTx" type="checkbox" /></td>
                            <td> <b>Economy</b> <input name="LPTx_comment" value={this.state.LPTx_comment} onChange={this.handleDetailUpdate.bind(this)} id="LPTx_comment" type="text" className="textbox"  size="1"/></td>
                        </tr>
                        <tr>
                            <td><b>Expiry_Date</b></td><td>
                            {this.state.setmethod=='insert'?
                                    <input name="Expiry_Date"  onChange={this.handleDetailUpdate.bind(this)} id="Expiry_Date" type="date" className="textbox" size="30" />:
                                    <input name="Expiry_Date" value={this.state.Expiry_Date} onChange={this.handleDetailUpdate.bind(this)} id="Expiry_Date" type="text" className="textbox" size="30" /> }                              
                            </td>
                            <td></td>
                            <td></td>
                        </tr>                        
                        </tbody></table>
                                <input type="submit" disabled={this.props.savestatus != '' && this.props.savestatus =='Certificate Number Exists'}
                                 className="btn btn-primary" id="add_tmv2" value="Save Approval" onClick={this.submitTmv2.bind(this)} />
                </form>
              </div>
                </Modal.Body>             
            </Modal>
                <div>
                    <BootstrapTable data={tmv2All} striped={true} hover={true} pagination={true} search={true} exportCSV={true} bodyStyle={{ 'zIndex': '-1 !important', 'overflow': 'visible' }}>
                        <TableHeaderColumn dataField="MANUFACTURER" isKey={true} dataSort={true}>Approval Holder</TableHeaderColumn>
                        <TableHeaderColumn dataField="NEW_COMM" dataSort={true}>Mixing Valve</TableHeaderColumn>
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
    tmv2All: state.tmv2all.tmv2,
    savestatus: state.savestatus
});

function mapDispatchToProps(dispatch){
    return {
        fetchtmv2All(){
            dispatch(fetchtmv2All())
        },
        checkcertNumber(){
            dispatch(checkcertNumber());
        },
        clearStatus(){
            dispatch(clearStatus());
        },
        saveTmv2Details(send_data){
            dispatch(saveTmv2Details(send_data));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Tmv2admin)