import React from 'react';
import CommonService from '../../service/CommonService'; 
import '../../assets/css/login.css';

class FindPassWord extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: {
                valid: false,
                value: '',
                error: ''
            },
            phonecode: {
                valid: false,
                value: '',
                error: ''
            },
            isFormValid: true,
            isSetPassword: true,
            sendPhonecode: true,
        }
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
            if(this.state.username.valid && value.length > 5){
                this.setState({
                    isFormValid: false,
                    [field]: {valid: true,value: value,error:''}
                });
            }else{
                this.setState({
                    isFormValid: true,
                    [field]: {valid: true,value: value,error:''}
                });
            }
        }
    }

    getCode = (e)=>{
        if(!CommonService.zValidate.phone(this.state.username.value)){
            this.setState({
                form: {
                    username: {valid: false,error: '手机格式不正确'}
                }
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

    render(){
        const {username} = this.state;
        return(
            <div>
                <form onSubmit={this.props.goToNext}>
                    <ul className="inputbox">
                        <li>
                            <input 
                                type="number" 
                                onKeyUp={(e) => this.handleValueChange('username', e.target.value)}
                                placeholder="请输入手机号码" 
                                name="username" />
                            {!username.valid && <span className="validation-error">{username.error}</span>}
                        </li>
                        <li>
                            <input 
                                type="number" 
                                onKeyUp={(e) => this.handleValueChange('phonecode', e.target.value)}
                                placeholder="请输入短信验证码" 
                                name="phonecode" />
                            <span className="code-btn" onClick={this.getCode}>获取验证码</span>
                        </li>
                        <li className="btn">
                            <input className={this.props.addloading ? 'btn-loading login' : 'login'} disabled={this.state.isFormValid} value="下一步" type="submit" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default FindPassWord;