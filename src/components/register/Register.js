import React from 'react';
import CommonService from '../../service/CommonService'; 
import '../../assets/css/login.css';
import {withRouter} from "react-router-dom";

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: {
                valid: false,
                value: '',
                error: ''
            },
            password: {
                valid: false,
                value: '',
                error: ''
            },
            phonecode: {
                valid: false,
                value: '',
                error: ''
            },
            isSaveValid: true,
            sendPhonecode: true,
            addloading: false
        }
    }

    getCode = (e)=> {
        if(!CommonService.zValidate.phone(this.state.username.value)){
            this.setState({
                username: {valid: false,error: '手机格式不正确'}
            });
        }else{
            if(this.state.sendPhonecode){
                this.sendPhoneCode(e.target);
            }else{
                var name = e.target.className.split(' ');
                if(name.indexOf('loading') === -1){
                    this.setState({
                        sendPhonecode: true
                    });
                    this.sendPhoneCode(e.target);
                }
            }
        }
    }

    sendPhoneCode(obj){
        var status = CommonService.getPhoneCodeNow(obj, 60 ,true,'获取验证码','重新发送');
        this.setState({
            sendPhonecode: status
        });
    }

    handleValueChange(field, value) {
        if(field === 'username'){
            if(!CommonService.zValidate.phone(value)){
                this.setState({
                    [field]: {valid: false,error: '手机格式不正确'}
                });
            }else{
                this.setState({
                    [field]: {valid: true,value: value,error:''}
                });
            }
        }else if(field === 'phonecode'){
            if(value.length > 5){
                this.setState({
                    [field]: {valid: true,value: value,error:''}
                });
            }else{
                this.setState({
                    [field]: {valid: false,value: value,error:''}
                });
            }
        }else if(field === 'password'){
            if(!CommonService.zValidate.password(value)){
                this.setState({
                    [field]: {valid: false,error: '请输入8-20位的数字与字母组合'}
                });
            }else{
                this.setState({
                    [field]: {valid: true,value: value,error:''}
                });
            }
        }
        setTimeout(() => {
            this.checkForm();
        },0);
    }

    checkForm = ()=> {
        if(this.state.username.valid && this.state.password.valid && this.state.phonecode.valid){
            this.setState({
                isSaveValid: false
            });
        }else{
            this.setState({
                isSaveValid: true
            });
        }
    }

    login = ()=> {
        this.props.history.push('/login');
    }

    save = (e)=> {
        e.preventDefault();
        if(this.state.addloading)return;
        this.setState({
            addloading: true
        });

        setTimeout(() => {
            this.setState({
                addloading: false
            });
        },2000);
    }

    render(){
        const {username,password} = this.state;
        return (
            <div className="login-body">
                <img className="logo" alt="" src={require('../../assets/images/logo_disabled.svg')} />
                <div className="login-item">
                    <h1>欢迎注册借币宝</h1>
                    <form onSubmit={this.save}>
                        <ul className="inputbox">
                            <li>
                                <input 
                                    type="number" 
                                    placeholder="请输入手机号码" 
                                    name="username" 
                                    onKeyUp={(e) => this.handleValueChange('username', e.target.value)} />
                                {!username.valid && <span className="validation-error">{username.error}</span>}
                            </li>
                            <li>
                                <input 
                                    type="password" 
                                    placeholder="请输入8-20位的数字与字母组合密码" 
                                    name="password" 
                                    onKeyUp={(e) => this.handleValueChange('password', e.target.value)} />
                                {!password.valid && <span className="validation-error">{password.error}</span>}
                            </li>
                            <li>
                                <input 
                                    type="number" 
                                    placeholder="请输入短信验证码" 
                                    name="phonecode" 
                                    onKeyUp={(e) => this.handleValueChange('phonecode', e.target.value)} />
                                <span className="code-btn" onClick={this.getCode}>获取验证码</span>
                            </li>
                            <li className="btn">
                                <input className={this.state.addloading ? 'btn-loading login' : 'login'}  disabled={this.state.isSaveValid} value="注册即领500USDT" type="submit" />                                
                            </li>
                            <li className="btn">
                                <span className="register" onClick={this.login}>登录</span>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="fixed-icon"></div>
            </div>
        );
    }
}

export default withRouter(Register);