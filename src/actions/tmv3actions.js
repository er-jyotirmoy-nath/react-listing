import axios from 'axios';
import C from './constants';
import { addErrors } from './errorhandler';
//let serviceUrl = 'php/';
let serviceUrl = 'http://nsfaaws6.nsf.org/lab_control_v2/listings/php/';
export const fetchtmv3All = ()=> (dispatch,getState)=>{
  axios.get(serviceUrl+'tmv3Details.php?getTmv3Files=get')
  .then((value) => {
        dispatch({
          type:'FETCH_TMV3_ALL',
          payload:value.data
        })
      }).catch((err) => {
        console.log(err);
      });
}
export const fetchtmv3Details = (id)=>(dispatch,getState)=>{
  axios.get(serviceUrl+'tmv3Details.php?BUILD_APP_ID='+id)
  .then((value) => {
        dispatch({
          type:'FETCH_TMV3_DETAIL',
          payload:value.data
        });
      }).catch((err) => {
        console.log(err);
      });
}



export const addtoFilterTmv3 = (f)=>{
  return {
    type:'ADD_FILTER_TMV3',
    payload:f
  }
}

export const removetoFilterTmv3 = (f)=>{
  return {
    type:"REMOVE_FILTER_TMV3",
    payload:f
  }
}

export const applyFilterTmv3 = (f)=>{

  return {
    type:"APPLY_TMV3_FILTER",
    payload:f
  }
}

export const clearFilterTmv3=()=>{
  return {
    type:"CLEAR_TMV3_FILTER"
  }
}


//Admn Actions

export const saveTmv3Details = (send_data) => (dispatch, getState) => {
  let params = new FormData();
  params.append('Factor',send_data.Factor);
  params.append('Manufacturer',send_data.Manufacturer);
  params.append('Approved_Mixing_Valve',send_data.Approved_Mixing_Valve);
  params.append('Unique_ID',send_data.Unique_ID);
  params.append('certnum',send_data.certnum);
  params.append('certdate',send_data.certdate);
  params.append('Certificate_Letters',send_data.Certificate_Letters);
  params.append('HPB',send_data.HPB);
  params.append('HPB_comment',send_data.HPB_comment);
  params.append('Pts_Comments',send_data.Pts_Comments);
  params.append('HPS',send_data.HPS);
  params.append('HPS_comment',send_data.HPS_comment);
  params.append('Primary_or_Secondary',send_data.Primary_or_Secondary);
  params.append('HPW',send_data.HPW);
  params.append('HPW_comment',send_data.HPW_comment);
  params.append('First_Audit',send_data.First_Audit);
  params.append('HPT44',send_data.HPT44);
  params.append('HPT44_comment',send_data.HPT44_comment);
  params.append('Comments',send_data.Comments);
  params.append('HPT46',send_data.HPT46);
  params.append('HPT46_comment',send_data.HPT46_comment);
  params.append('Extended_Comments',send_data.Extended_Comments);
  params.append('HPD44',send_data.HPD44);
  params.append('HPD44_comment',send_data.HPD44_comment);
  params.append('First_Completed',send_data.First_Completed);
  params.append('HPD46',send_data.HPD46);
  params.append('HPD46_comment',send_data.HPD46_comment);
  params.append('Second_Audit',send_data.Second_Audit);
  params.append('LPB',send_data.LPB);
  params.append('LPB_comment',send_data.LPB_comment);
  params.append('Second_Completed',send_data.Second_Completed);
  params.append('LPS',send_data.LPS);
  params.append('LPS_comment',send_data.LPS_comment);
  params.append('Remove_from_Website',send_data.Remove_from_Website);
  params.append('LPT44',send_data.LPT44);
  params.append('LPT44_comment',send_data.LPT44_comment);
  params.append('Discontinued_Withdrawn',send_data.Discontinued_Withdrawn);
  params.append('LPD44',send_data.LPD44);
  params.append('LPD44_comment',send_data.LPD44_comment);
  params.append('New',send_data.New);
  params.append('LPW',send_data.LPW);
  params.append('LPW_comment',send_data.LPW_comment);
  params.append('Expiry_Date',send_data.Expiry_Date);
  params.append('LPT46',send_data.LPT46);
  params.append('LPT46_comment',send_data.LPT46_comment);
  params.append('LPD46',send_data.LPD46);
  params.append('LPD46_comment',send_data.LPD46_comment);
  params.append('type_app',send_data.type_app);
  params.append('setmethod',send_data.setmethod);
  if (send_data.setmethod == 'update') { params.append("build_app_id", send_data.build_app_id); }

  axios.post(serviceUrl + 'insertRecordClass.php', params)
    .then((value) => {
      dispatch({
        type: C.ADD_SAVE_STATUS,
        payload: value.data
      })
    })
    .then(() => {
      dispatch(fetchtmv3All());
    })
    .catch((err) => {
      dispatch(addErrors(err));
    })
};


export const checkcertNumber = (certnum) => (dispatch, getState) => {
  axios.get(serviceUrl + 'insertRecordClass.php?load_cert_num=get&cert_num=' + certnum)
    .then((value) => {
      dispatch({
        type: C.ADD_SAVE_STATUS,
        payload: value.data
      })
    })
    .catch((err) => {
      dispatch(addErrors(err));
    })
}

export const clearStatus = () => {
  return {
    type: C.CLEAR_STATUS
  }
}