import axios from 'axios';
import {
  addErrors
} from './errorhandler';
import C from './constants';

let serviceUrl = 'php/';
//let serviceUrl = 'http://nsfaaws6.nsf.org/lab_control_v2/listings/php/';
export const fetchciasAll = () => (dispatch, getState) => {

  axios.get(serviceUrl+'ciasDetails.php?getciasfiles=get')
    .then((value) => {
      dispatch({
        type: C.FETCH_CIAS_ALL,
        payload: value.data
      })
    }).
  catch((err) => {
    dispatch(addErrors(err));
  });
}

export const fetchCiasDetails = (id) => (dispatch, getState) => {
  axios.get(serviceUrl +'ciasDetails.php?BUILD_APP_ID=' + id)
    .then((value) => {
      dispatch({
        type: C.FETCH_CIAS_DETAIL,
        payload: value.data
      })
    }).
  catch((err) => {
    dispatch(addErrors(err));
  });
}

export const saveCiasDetails = (send_data) => (dispatch, getState) => {
  let params = new FormData();
  params.append("Manufacturer", send_data.Manufacturer);
  params.append("description", send_data.description);
  params.append("sizes", send_data.sizes);
  params.append("Certificate_Letters", send_data.Certificate_Letters);
  params.append("certnum", send_data.certnumber);
  params.append("certdate", send_data.certdate);
  params.append("type_app", send_data.type_app);
  params.append("setmethod", send_data.setmethod);
  if (send_data.setmethod == 'update')
  { params.append("build_app_id", send_data.build_app_id);}

  axios.post(serviceUrl +'insertRecordClass.php', params)
    .then((value) => {
      dispatch({
        type: C.ADD_SAVE_STATUS,
        payload: value.data
      })
    })
    .then(()=>{
      dispatch(fetchciasAll());
    })
    .catch((err) => {
      dispatch(addErrors(err));
    })
};

export const checkcertNumber = (certnum) => (dispatch,getState)=>{
  axios.get(serviceUrl +'insertRecordClass.php?load_cert_num=get&cert_num='+certnum)
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



export const clearStatus = ()=>{
  return {
    type:C.CLEAR_STATUS
  }
}