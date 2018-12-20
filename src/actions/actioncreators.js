import axios from 'axios';
import C from './constants';
import {addErrors} from './errorhandler';
//Thunk is Higher order Function
let serviceUrl = 'php/';
//let serviceUrl = 'http://nsfaaws6.nsf.org/lab_control_v2/listings/php/';
export const fetchtmv2All = ()=> (dispatch,getState)=>{
  let params = new FormData();
  params.append('filter','yes');
  axios.post(serviceUrl+'tmv2_app.php',params)
  .then((value) => {
        dispatch({
          type:'FETCH_TMV2_ALL',
          payload:value.data
        })
      }).catch((err) => {
        console.log(err);
      });
}
export const fetchtmv2Details = (id)=>(dispatch,getState)=>{
  axios.get(serviceUrl+'tmv2Details.php?BUILD_APP_ID='+id)
      .then((value) => {
        dispatch({
          type:"FETCH_TMV2_DETAIL",
          payload:value.data
        });
      }).catch((err) => {console.error(err);});
}



export const saveTmv2Details = (send_data) => (dispatch, getState) => {
  let params = new FormData();
  params.append("Licensee",send_data.Licensee);
  params.append("Manufacturer",send_data.Manufacturer);
  params.append("Approved_Mixing_Valve",send_data.Approved_Mixing_Valve);
  params.append("Unique_ID",send_data.Unique_ID);
  params.append("certnum",send_data.certnum);
  params.append("certdate",send_data.certdate);
  params.append("Certificate_Letters",send_data.Certificate_Letters);
  params.append("HP_1111",send_data.HP_1111);
  params.append("Comments",send_data.Comments);
  params.append("HPB",send_data.HPB);
  params.append("HPB_comment",send_data.HPB_comment);
  params.append("Extended_Comments",send_data.Extended_Comments);
  params.append("HPS",send_data.HPS);
  params.append("HPS_comment",send_data.HPS_comment);
  params.append("Pts_Comments",send_data.Pts_Comments);
  params.append("HPW",send_data.HPW);
  params.append("HPW_comment",send_data.HPW_comment);
  params.append("Primary_or_Secondary",send_data.Primary_or_Secondary);
  params.append("HPT",send_data.HPT);
  params.append("HPT_comment",send_data.HPT_comment);
  params.append("First_Audit",send_data.First_Audit);
  params.append("Cold_isol_46_hp",send_data.Cold_isol_46_hp);
  params.append("First_Completed",send_data.First_Completed);
  params.append("LP_1287",send_data.LP_1287);
  params.append("Second_Audit",send_data.Second_Audit);
  params.append("LPB",send_data.LPB);
  params.append("LPB_comment",send_data.LPB_comment);
  params.append("Second_Completed",send_data.Second_Completed);
  params.append("LPS",send_data.LPS);
  params.append("LPS_comment",send_data.LPS_comment);
  params.append("Discontinued_Withdrawn",send_data.Discontinued_Withdrawn);
  params.append("LPW",send_data.LPW);
  params.append("LPW_comment",send_data.LPW_comment);
  params.append("Remove_from_Website",send_data.Remove_from_Website);
  params.append("LPT",send_data.LPT);
  params.append("LPT_comment",send_data.LPT_comment);
  params.append("New",send_data.New);
  params.append("LPTx",send_data.LPTx);
  params.append("LPTx_comment",send_data.LPTx_comment);
  params.append("Expiry_Date",send_data.Expiry_Date);
  params.append("Cold_isol_46_lp",send_data.Cold_isol_46_lp);
  params.append("type_app",send_data.type_app);
  params.append("setmethod",send_data.setmethod);
  if (send_data.setmethod == 'update') { params.append("build_app_id", send_data.build_app_id); }

  axios.post(serviceUrl + 'insertRecordClass.php', params)
    .then((value) => {
      dispatch({
        type: C.ADD_SAVE_STATUS,
        payload: value.data
      })
    })
    .then(() => {
      dispatch(fetchtmv2All());
    })
    .catch((err) => {
      dispatch(addErrors(err));
    })
};


/* export const checkcertNumber = (certnum) => (dispatch, getState) => {
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
} */

export const clearStatus = () => {
  return {
    type: C.CLEAR_STATUS
  }
}

export const checkcertNumber = () => {
  return {
    type:C.ADD_SAVE_STATUS,
    payload:'Certificate Number Exists!'
  }
}