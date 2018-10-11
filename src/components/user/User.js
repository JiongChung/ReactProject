import React from 'react';
import {withRouter} from 'react-router-dom';
import FooterMenu from '../footer/FooterMenu';
import Header from '../header/Header';
import './user.css';
import CommonService from '../../service/CommonService'; 

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '我的',
            showBack: false,
            phone: '13430386194'
        };
    }

    render(){
        return(
            <div>
                <span></span>
                <div className="user-item">
                    
                    <Header title={this.state.title} showBack={this.state.showBack} />
                    <div className="userinfo-item">
                        <span className="img">
                            <img src={require('../../assets/images/my.png')} alt="" />
                        </span>
                        <span className="name">Hi,{CommonService.formatPhone(this.state.phone)}</span>
                    </div>
                    <div className="menu-item">
                        <ul>
                            <li>我的资产</li>
                            <li>语言</li>
                            <li>个人设置</li>
                            <li>关于我们</li>
                            <li>客服中心</li>
                            <li>最新版本</li>
                            <li>FAQ问题</li>
                            <li>邀请好友</li>
                        </ul>
                    </div>
                    <div className="logout">
                        退出登录
                    </div>
                    <FooterMenu />
                </div>
            </div>
        );
    }
}

export default withRouter(User);