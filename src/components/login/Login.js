import React from 'react';
import CommonService from '../../service/CommonService'; 
import {withRouter} from "react-router-dom";
import '../../assets/css/login.css';

class Login extends React.Component {
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
            addloading: false,
            isSaveValid: true,
        };
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
        if(this.state.username.valid && this.state.password.valid){
            this.setState({
                isSaveValid: false
            });
        }else{
            this.setState({
                isSaveValid: true
            });
        }
    }

    register = ()=> {
        this.props.history.push('/register');
    }

    forget = ()=> {
        this.props.history.push('/forget');
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
            if(window.localStorage.getItem('__ReactUser') !== null){
                let useritem = JSON.parse(window.localStorage.getItem('__ReactUser'));
                if(this.state.username.value === useritem.username && this.state.password.value === useritem.password){
                    window.localStorage.setItem('__login','yes');
                    alert('登录成功');
                    this.props.history.push('/');
                }else{
                    alert('帐号与密码不正确');
                }
            }else{
                alert('该用户不存在，请注册一个帐号');
            }
        },2000);
    }

    render(){
        const {username,password} = this.state;
        return (
            <div className="login-body">
                <img className="logo" alt="" src={require('../../assets/images/logo_disabled.svg')} />
                <div className="login-item">
                    <h1>欢迎登录借币宝</h1>
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
                            <li className="forget">
                                <span onClick={this.forget}>忘记密码</span>
                            </li>
                            <li className="btn">
                                <input className={this.state.addloading ? 'btn-loading login' : 'login'}  disabled={this.state.isSaveValid} value="登录" type="submit" />   
                            </li>
                            <li className="btn">
                                <span className="register" onClick={this.register}>注册</span>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="fixed-icon"></div>
            </div>
        );
    }
}

export default withRouter(Login);