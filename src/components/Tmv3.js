import React,{Component} from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Checkbox, Label, Button, Form, Icon } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

import {fetchtmv3All,addtoFilterTmv3,removetoFilterTmv3,applyFilterTmv3,clearFilterTmv3} from '../actions/tmv3actions';
import Viewdetails from './viewDetails';
import { tmv2Options, tmv3Options } from './Searchoptions';
import { Segment } from 'semantic-ui-react'

class Tmv3 extends Component {
    constructor(props){
    	super(props);
      this.state = {
        filterOptions:[],
        filteredList:[]
      };
      this.addFilterOptions_2 = this.addFilterOptions_2.bind(this);
      //this.applyFilter = this.applyFilter.bind(this);
    }
    componentDidMount() {
      this.props.gettmv3All();
      
    }
  addFilterOptions_2(e, d) {
    let filterOptions = this.state.filterOptions;
    if (filterOptions.indexOf(d.value) == -1) {
      filterOptions = d.value;
    }
    this.setState({ filterOptions: filterOptions }, () => {
      console.log(this.state.filterOptions);
    });
  }   
  applyFilter(nextProps){
    let filteredList = (nextProps.tmv3.tmv3files) ? nextProps.tmv3.tmv3files : [];
      let newFilter=[];
      if(this.state.filterOptions.length>0){
        for (let i = 0; i < this.state.filterOptions.length; i++) {
            let filterName  = this.state.filterOptions[i];
          if (newFilter.length>0) {
            newFilter = newFilter.filter(item => item[filterName]=='1')
          } else {
            newFilter = filteredList.filter(item => item[filterName] == '1');
          }
        }
        if(newFilter.length==0){alert('No Result Found');}
      }
      else{
        newFilter = filteredList;
        newFilter = newFilter.filter(item => item['DISCONTINUED_WITHDRAWN'] != '1');
      }
      this.setState({filteredList:newFilter});

    }
    componentWillReceiveProps = (nextProps) => {
      this.applyFilter(nextProps);
    }
    
    render() {
      let tmv3listings =[];
       if(this.state.filteredList.length>0){
         tmv3listings = this.state.filteredList;
       }
       
      //console.log(toJS(tmv3listings));

      function bdataFormater(cell, row){
        return <Viewdetails details={row} num={cell}  type='tmv3' />
      }
        return (
          <div className="container-fluid">
                <div className="row">
                     <div className="col-lg-12">
                         <h3> NSF TMV3  </h3>
                         <hr/>
                <Segment raised>
                  <div className="row">

                    <div className="col-md-6">
                      <Form.Field>
                        <Label pointing='below'>High Pressure 1.0 - 5.0 bar dynamic (HP) and Low Pressure 0.2 - 1.0 bar dynamic (LP) options</Label>
                        <Dropdown placeholder='High Pressure 1.0 - 5.0 bar dynamic (HP) and Low Pressure 0.2 - 1.0 bar dynamic (LP)'
                          fluid multiple selection options={tmv3Options} onChange={this.addFilterOptions_2} />
                      </Form.Field>
                    </div>
                    <div className="col-md-4">
                      <Form.Field>
                        <br />
                        <Button content='Filter' icon="filter" primary type="button" onClick={this.applyFilter.bind(this, this.props)} style={{ 'margin-top': '19px' }} />
                      </Form.Field>
                    </div>
                  </div>
                    </Segment>
                           
                           <div className="row"><div className="col-md-12">
                                   <br/>
                                   
                                   <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                                       <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                                           Check TMV3 Approval
                                       </div>
                                       <div className="panel-body" style={{"minHeight":"170px"}}>
                                     <Label as='a' color='blue'>
                                        Total Records
                                        <Label.Detail>{tmv3listings.length}</Label.Detail>
                                      </Label>
                                         <BootstrapTable data={tmv3listings} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                          <TableHeaderColumn dataField="FACTOR"  isKey={true}  dataSort={true}>Factor</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="APPROVED_MIXING_VALVE"  dataSort={true}>Mixing Valve</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="UNIQUE_ID"  dataSort={true} >Unique ID</TableHeaderColumn>                        
                                                          <TableHeaderColumn dataField="COMMENTS"  dataSort={true} >Comments</TableHeaderColumn>                                                          
                                                          <TableHeaderColumn dataField="CERT_ID" dataSort={true} dataFormat={bdataFormater} >Certificate</TableHeaderColumn>
                                        </BootstrapTable>
                                       </div>
                                   </div>
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
    tmv3:state.tmv3all.tmv3,
    tmv3Filter:state.tmv3all.tmv3Filter
  }
}
function mapDispatchToProps(dispatch) {
  return {
          addFilter(f){
            dispatch(
            addtoFilterTmv3(f)
            )
          },
          removeFilter(f){
            dispatch(
            removetoFilterTmv3(f)
            )
          },
          applyFilter(f){
            dispatch(
              applyFilterTmv3(f)
            )
          },
          clearfilter(){
            dispatch(
              clearFilterTmv3()
            )
          },
          gettmv3All(){
            dispatch(
              fetchtmv3All()
            )
          }
  }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Tmv3)
