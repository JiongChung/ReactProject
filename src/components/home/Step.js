import React from 'react';
import './step.css'

class Step extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="step-item">
                <h2>三步搞定，极速放款</h2>
                <ul>
                    <li>
                        <i className="icon"><img alt="" src={require('../../assets/images/zhuce_icon.svg')} /></i>
                        <span>注册借款账号</span>
                    </li>
                    <li>
                    <i className="icon"><img alt="" className="shenpi" src={require('../../assets/images/shenpi_icon.svg')} /></i>
                        <span>最快一分钟审批</span>
                    </li>
                    <li>
                    <i className="icon"><img alt="" src={require('../../assets/images/daozhang_icon.svg')} /></i>
                        <span>最快五分钟到账</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Step;