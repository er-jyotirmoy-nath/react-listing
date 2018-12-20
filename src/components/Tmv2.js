import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchtmv2All,fetchtmv2Details} from '../actions/actioncreators';
import Viewdetails from './viewDetails';
import { Dropdown } from 'semantic-ui-react';
import { tmv2Options, tmv3Options} from './Searchoptions';
import { Checkbox, Label, Button, Form, Icon } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react'
class Tmv2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tmv2Filtered:[],
      filterOptions:[],
      filtered:false
    };
    this.addFilterOptions_2 = this.addFilterOptions_2.bind(this);
  }
  addFilterOptions_2(e,d){
    let filterOptions = this.state.filterOptions;
    if (filterOptions.indexOf(d.value) == -1) {
      filterOptions = d.value;
    }    
    this.setState({filterOptions:filterOptions},()=>{
       console.log(this.state.filterOptions);
    });
  }    
    applyfilter(){
      let tmv2Filtered = this.props.tmv2; let newFilter =[];
      if(this.state.filterOptions.length>0){
        for (let i = 0; i < this.state.filterOptions.length; i++) {
            let filtername = this.state.filterOptions[i];
            if (newFilter.length>0){
                newFilter = newFilter.filter(item => item[filtername] == '1');      
              }
            else{
              newFilter = tmv2Filtered.filter(item => item[filtername] == '1');      
            }                  
          }        
      }else{
        newFilter = [];
      }
      this.setState({ tmv2Filtered: newFilter });
    }
  componentDidMount() {
      this.props.fetchTMV2();
    }

    render() {
      let tmv2listings = [];
      if(this.state.tmv2Filtered.length>0 ){
        tmv2listings = this.state.tmv2Filtered;
        if (this.state.filterOptions.indexOf('DISCONTINUED_WITHDRAWN') == -1) {
          tmv2listings = tmv2listings.filter(item => item['DISCONTINUED_WITHDRAWN'] != '1');
        }
      }
      else{
        tmv2listings = (this.props.tmv2.length > 0) ? this.props.tmv2 :[];
        tmv2listings = tmv2listings.filter(item => item['DISCONTINUED_WITHDRAWN']!='1');
      }
      function bdataFormater(cell, row){
        return <Viewdetails details={row} num={cell} type='tmv2' />;
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> NSF TMV2  </h3>
                         <hr/>
                <Segment raised>
                  <div className="row">

                    <div className="col-md-6">
                      <Form.Field>
                        <Label pointing='below'>High Pressure 0.5 - 5 bar dynamic (HP) BS EN 1111:1999 and Low Pressure 0.1 - 1.0 bar dynamic (LP) BS EN 1287:1999 options</Label>
                        <Dropdown placeholder='High Pressure 0.5 - 5 bar dynamic (HP) BS EN 1111:1999 and Low Pressure 0.1 - 1.0 bar dynamic (LP) BS EN 1287:1999'
                          fluid multiple selection options={tmv2Options} onChange={this.addFilterOptions_2} />
                      </Form.Field>
                    </div>
                    <div className="col-md-4">
                      <Form.Field>
                        <br />
                        
                        <Button content='Filter' icon="filter" primary type="button" onClick={this.applyfilter.bind(this)} style={{ 'marginTop': '19px' }} />
                      </Form.Field>
                    </div>
                  </div>
                </Segment>
                             
                 </div>
                 <div className="row"><div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                                 Check TMV2 Approval
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>                            
                                <Label as='a' color='blue'>
                                  Total Records
                                  <Label.Detail>{tmv2listings.length}</Label.Detail>
                                </Label>
                               <BootstrapTable data={tmv2listings} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="MANUFACTURER"  isKey={true}  dataSort={true}>Approval Holder</TableHeaderColumn>
                                                <TableHeaderColumn dataField="NEW_COMM"  dataSort={true}>Mixing Valve</TableHeaderColumn>
                                                <TableHeaderColumn dataField="UNIQUE_ID"  dataSort={true} >Unique ID</TableHeaderColumn>                                                
                                                <TableHeaderColumn dataField="CERT_ID" dataSort={true} dataFormat={bdataFormater} >Certificate</TableHeaderColumn>
                                                
                              </BootstrapTable>

                             </div>

                         </div>

                     </div></div>
             </div>
         </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    tmv2:state.tmv2all.tmv2
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTMV2(){
      dispatch(
        fetchtmv2All()
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Tmv2);
