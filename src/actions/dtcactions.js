import C from './constants';
import axios from 'axios';
import {addErrors} from './errorhandler';
let serviceUrl = 'php/';
//let serviceUrl = 'http://nsfaaws6.nsf.org/lab_control_v2/listings/php/';
export const fetchDtcAll = ()=>(dispatch,getState)=>{
  axios.get(serviceUrl+'dtcDetails.php?getdtcfiles=get')
  .then((value) => {
    dispatch({
      type:C.FETCH_DTC_ALL,
      payload:value.data
    });
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}

export const fetchDtcDetails = (id)=>(dispatch,getState)=>{
  axios.get(serviceUrl +'dtcDetails.php?BUILD_APP_ID='+id)
  .then((value) => {
    dispatch({
      type:C.FETCH_DTC_DETAIL,
      payload:value.data
    });
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}

export const saveDtcDetails = (send_data) => (dispatch, getState) => {
  let params = new FormData();
  params.append("Manufacturer", send_data.Manufacturer);
  params.append("Approved_Mixing_Valve", send_data.Approved_Mixing_Valve);
  params.append("description", send_data.description);
  params.append("Unique_ID", send_data.Unique_ID);
  params.append("Certificate_Letters", send_data.Certificate_Letters);
  params.append("certnum", send_data.certnumber);
  params.append("certdate", send_data.certdate);
  params.append("Expiry_Date", send_data.Expiry_Date);
  params.append("type_app", send_data.type_app);
  params.append("setmethod", send_data.setmethod);
  if (send_data.setmethod == 'update') { params.append("build_app_id", send_data.build_app_id); }

  axios.post(serviceUrl + 'insertRecordClass.php', params)
    .then((value) => {
      dispatch({
        type: C.ADD_SAVE_STATUS,
        payload: value.data
      })
    })
    .then(() => {
      dispatch(fetchDtcAll());
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
