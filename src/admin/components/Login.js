import React, { Component } from 'react'
import {connect} from 'react-redux';
import { checkLogin, logoutUser} from '../../actions/loginactions';
class Login extends Component {
    constructor (props) {
        super(props)
        this.state={
            userName:'',
            userPassword:''
        }
    }
    loginUser(){
        if(this.state.userName.trim() != '' && this.state.userPassword.trim() != ''){
            this.props.checkLogin(this.state);
        }
    }
    updateDetails(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render () {
        let btnText = 'Login';
        if (this.props.login.checkingLogin) {
            btnText = 'Checking';
        }
        else{
            btnText = 'Login';
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please Sign In</h3>
                            </div>
                            <div className="panel-body">
                                <form >
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="E-mail" name="userName" onChange={this.updateDetails.bind(this)} />
                                        </div>
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Password" name="userPassword" type="password" onChange={this.updateDetails.bind(this)} />
                                        </div>                                               
                                                <button type="button" className="btn btn-lg btn-primary btn-block" id="login" onClick={this.loginUser.bind(this)}>
                                                        <span id="button"><i className="fa fa-hand-pointer-o" aria-hidden="true"></i> {btnText}</span>
                                                </button>

                                    </fieldset>
                                </form>
                                        </div>
                                        </div>
                                    </div>
                            </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    login: state.login
});

function mapDispatchToProps(dispatch){
    return {
        checkLogin(send_data){
            dispatch(checkLogin(send_data));
        },
        logoutUser(){
            dispatch(logoutUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
