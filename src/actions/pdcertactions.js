import axios from 'axios';
import C from './constants';
import {addErrors} from './errorhandler';

let serviceUrl = 'php/';
//let serviceUrl = 'http://nsfaaws6.nsf.org/lab_control_v2/listings/php/';
export const fetchCertAll = () => (dispatch,getState)=>{
  axios.get(serviceUrl +'/pdCertDetails.php?getpdcertfiles=get')
  .then((value) => {
    dispatch({
      type:C.FETCH_PDCERT_ALL,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
};

export const fetchCertDetails = (id)=>(dispatch,getState)=>{
  axios.get(serviceUrl +'/pdCertDetails.php?BUILD_APP_ID='+id)
  .then((value) => {
    dispatch({
      type:C.FETCH_PDCERT_DETAIL,
      payload:value.data
    })
  })
  .catch((err) => {
    dispatch(addErrors(err));
  })
}

export const savePdcertDetails = (send_data) => (dispatch, getState) => {
  let params = new FormData();
  params.append("Manufacturer", send_data.Manufacturer);
  params.append("specification", send_data.specification);
  params.append("description", send_data.description);
  params.append("Certificate_Letters", send_data.Certificate_Letters);
  params.append("certnum", send_data.certnum);
  params.append("certdate", send_data.certdate);
  params.append("Expiry_Date", send_data.Expiry_Date);
  params.append("build_app_id", send_data.build_app_id);
  params.append("type_app", send_data.type_app);
  params.append("setmethod", send_data.setmethod);
  axios.post(serviceUrl + '/insertRecordClass.php', params)
    .then((value) => {
      dispatch({
        type: C.ADD_SAVE_STATUS,
        payload: value.data
      })
    })
    .then(()=>{
      dispatch(fetchCertAll());
    })
    .catch((err) => {
      dispatch(addErrors(err));
    })
};

export const checkcertNumber = (certnum) => (dispatch,getState)=>{
  axios.get(serviceUrl +'/insertRecordClass.php?load_cert_num=get&cert_num='+certnum)
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

export const updateRecord = (appid,cellname,value)=>{
  let params = new FormData();
  params.append('appid',appid);
  params.append('cellname',cellname);
  params.append('value',value);
  axios.post('https://wrcnsf.com/listings/php/pdCertDetails.php',params)
  .then((value) => {
    console.log(value.data);
  })
  .catch((err) => {
    console.error(err);
  })
}
export const clearStatus = () => {
  return {
    type: C.CLEAR_STATUS
  }
}