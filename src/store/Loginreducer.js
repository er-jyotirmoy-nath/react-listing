import C from '../actions/constants';

export const login = (state={
    checkingLogin:false,
    loggedChecked: (!window.sessionStorage.getItem('token'))?false:true,
    loginToken: (!window.sessionStorage.getItem('token')) ? false : true
},action)=>{
    switch (action.type) {
        case C.CHECKING_LOGIN:
            return {
                checkingLogin: true,
                loggedChecked: false,
                loginToken: false
            };
            break;
        case C.LOGIN_SUCCESS:
            return {
                checkingLogin: false,
                loggedChecked: true,
                loginToken: action.payload
            };
            break;
        case C.LOGIN_FAILURE:
            return {
                checkingLogin: false,
                loggedChecked: false,
                loginToken: false
            };
            break; 
        case C.LOGOUT_USER:
            return {
                checkingLogin: false,
                loggedChecked: false,
                loginToken: false
            };
            break;    
        default:
        return state;
            break;
    }
}