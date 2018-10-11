import React from 'react';
import CommonService from '../../service/CommonService'; 
import '../../assets/css/login.css';

class SavePassWord extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isSaveValid: true,
            password: {
                valid: false,
                value: '',
                error: ''
            },
            confirmPassword: {
                valid: false,
                value: '',
                error: ''
            },
            addloading: false
        };
    }

    handleValueChange(field, value) {
        setTimeout(() => {
            if(field === 'password'){
                if(!CommonService.zValidate.password(value)){
                    this.setState({
                        [field]: {valid: false,error: '请输入8-20位的数字与字母组合'}
                    });
                }else{
                    this.setState({
                        [field]: {valid: true,value: value,error:''}
                    });
                }
                if(this.state.password.valid && this.state.confirmPassword.valid && value === this.state.confirmPassword.value){
                    this.setState({
                        isSaveValid: false
                    });
                }else{
                    this.setState({
                        isSaveValid: true
                    });
                }
            }else if(field === 'confirmPassword'){
                if(!CommonService.zValidate.password(value)){
                    this.setState({
                        [field]: {valid: false,error: '请输入8-20位的数字与字母组合'}
                    });
                }else{
                    if(this.state.password.value !== value){
                        this.setState({
                            [field]: {valid: false,error: '两次密码输入不相同'}
                        });
                    }else{
                        this.setState({
                            [field]: {valid: true,value: value,error:''}
                        });
                    }
                }
                if(this.state.password.valid && this.state.confirmPassword.valid && this.state.password.value === value){
                    this.setState({
                        isSaveValid: false
                    });
                }else{
                    this.setState({
                        isSaveValid: true
                    });
                }
            }
        },0);
        
        
    }

    save = (e)=> {
        e.preventDefault();
        if(this.state.addloading)return;
        this.setState({
            addloading: true
        });
        console.log(this.state.password);
        console.log(this.state.confirmPassword);

        setTimeout(() => {
            this.setState({
                addloading: false
            });
        },2000);
        
    }

    render(){
        const {password,confirmPassword} = this.state;
        return(
            <div>
                <form onSubmit={this.save}>
                    <ul className="inputbox">
                        <li>
                            <input 
                                type="password"  
                                onKeyUp={(e) => this.handleValueChange('password', e.target.value)}
                                placeholder="请输入新密码，8-20位的数字与字母组合" 
                                name="password"  />
                                {!password.valid && <span className="validation-error">{password.error}</span>}
                        </li>
                        <li>
                            <input 
                                type="password" 
                                onKeyUp={(e) => this.handleValueChange('confirmPassword', e.target.value)}
                                placeholder="请再次输入新密码" 
                                name="confirmPassword" />
                            {!confirmPassword.valid && <span className="validation-error">{confirmPassword.error}</span>}
                        </li>
                        <li className="btn">
                            <input className={this.state.addloading ? 'btn-loading login' : 'login'}  disabled={this.state.isSaveValid} value="确定" type="submit" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default SavePassWord;