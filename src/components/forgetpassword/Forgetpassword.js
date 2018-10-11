import React from "react";
import '../../assets/css/login.css';
import FindPassWord from './FindPassWord';
import SavePassWord from './SavePassWord';

class Forgetpassword extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isSetPassword: true,
            isSaveValid: true,
            addloading: false
        }
    }

    goToNext = (e)=> {
        e.preventDefault();
        if(this.state.addloading)return;
        this.setState({
            addloading: true
        });

        setTimeout(() => {
            this.setState({
                isSetPassword: false
            });
        },2000);
    }

    render(){
        return (
            <div className="login-body">
                <img className="logo" alt="" src={require('../../assets/images/logo_disabled.svg')} />
                <div className="login-item">
                    <h1>重置登录密码</h1>
                    {
                        this.state.isSetPassword ? <FindPassWord addloading={this.state.addloading} goToNext={this.goToNext} /> : <SavePassWord />                        
                    }
                </div>
                <div className="fixed-icon"></div>
            </div>
        );
    }
}

export default Forgetpassword;