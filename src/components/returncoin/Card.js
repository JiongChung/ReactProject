import React from 'react';
import './returncoin.css';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="coin-card">
                <h4 className="card-unit">单位：USDT</h4>
                <div className={this.props.color ? 'card-item color': 'card-item'}>
                    <ul className="clearfix">
                        <li>
                            <span className="title">借币凭证</span>
                            <span className="info">JB321512658458</span>
                        </li>
                        <li>
                            <span className="title">质押币种</span>
                            <span className="info">ETH</span>
                        </li>
                        <li>
                            <button className={this.props.color ? 'return-btn' : 'return-btn hide'}>马上还币</button>
                        </li>
                    </ul>
                    <ul className="clearfix">
                        <li>
                            <span className="title">还款总额</span>
                            <span className="info">5000</span>
                        </li>
                        <li>
                            <span className="title">本金</span>
                            <span className="info">50000</span>
                        </li>
                        <li>
                            <span className="title">利息</span>
                            <span className="info">50000</span>
                        </li>
                    </ul>
                    <ul className="clearfix">
                        <li>
                            <span className="title">借币周期</span>
                            <span className="info">3<i>个月</i></span>
                        </li>
                        <li>
                            <span className="title">质押数量</span>
                            <span className="info">300<i>ETH</i></span>
                        </li>
                        <li>
                            <span className="title">还款方式</span>
                            <span className="info">等额本息</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Card;