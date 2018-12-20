import axios from 'axios';
import {
    addErrors
} from './errorhandler';
import C from './constants';

//let serviceUrl = 'php/';
let serviceUrl = 'http://nsfaaws6.nsf.org/lab_control_v2/listings/php/';


export const checkLogin = (send_data) => (dispatch,getState)=>{
    dispatch({
        type:C.CHECKING_LOGIN
    });
    let params = new FormData();
    params.append('username',send_data.userName);
    params.append('password',send_data.userPassword);
    axios.post(serviceUrl+'checkLogin.php',params)
        .then((res)=>{
            let responseObj = res.data;
            if(responseObj.message=='success' && responseObj.token!=''){
                window.sessionStorage.setItem('token',responseObj.token);
                dispatch({
                    type:C.LOGIN_SUCCESS,
                    payload:responseObj.token
                });
            }
            else{
                dispatch({
                    type: C.LOGIN_FAILURE                   
                });
            }
        })
        .catch((error)=>{
            dispatch(addErrors(error));
        })
}

export const logoutUser = ()=>{
    window.sessionStorage.removeItem('token');
    window.sessionStorage.clear();
    return {
        type:C.LOGOUT_USER
    }
}
