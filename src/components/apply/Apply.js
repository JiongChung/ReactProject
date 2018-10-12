import React from 'react';
import {withRouter} from 'react-router-dom';
import './apply.css';
import Header from '../header/Header';
import FooterMenu from '../footer/FooterMenu';
import CommonService from '../../service/CommonService';

class Apply extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '在线申请',
            backUrl: '',
            coinValue: '',
            coinList: [],
            periodValue: '',
            periodList: [],
            rateValue: '',
            rateList:[],
            repaymentList: [],
            repaymentValue: '',
            recruitmentList: [],
            recruitmentValue: '',
            coinNumberValue: '',
            borrowValue: '',
            borrow: {
                valid: false,
                error: ''
            },
            isSaveValid: true,
            coinTotal: 0,
            coinTotalState: {
                valid: false,
                error: ''
            },
            addloading: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                coinList: [{ id: '', name: '选择一个选项' },{ id: 1, name: 'BTC' }, { id: 2, name: 'ETH' }, { id: 3, name: 'VC' }, { id: 4, name: 'USDT' }, { id: 5, name: 'OTC' }],
                coinValue: '',
                periodList: [{id: '',name: '选择一个选项'},{ id: 1, name: '一个月'},{ id: 2, name: '三个月'},{ id: 3, name: '六个月'},{ id: 4, name: '九个月'},{ id: 5, name: '十二个月'}],
                periodValue: '',
                rateList: [{id: '',name: '选择一个选项'},{ id: 1, name: '1%'},{ id: 2, name: '2%'},{ id: 3, name: '3%'},{ id: 4, name: '4%'},{ id: 5, name: '5%'},{ id: 6, name: '6%'},{ id: 7, name: '7%'},{ id: 8, name: '8%'},{ id: 9, name: '9%'},{ id: 10, name: '10%'}],
                rateValue: '',
                repaymentList: [{ id: 1, name: '等额本息'}],
                repaymentValue: 1,
                recruitmentList: [{id: '',name: '选择一个选项'},{ id: 1, name: '30天'},{ id: 2, name: '60天'},{ id: 3, name: '90天'},{ id: 4, name: '120天'},{ id: 5, name: '180天'},{ id: 6, name: '365天'}],
                recruitmentValue: '',
                coinTotal: 2000
            })
        }, 0)
    }

    handleValueChange(field, value) {
        if(field === 'borrowValue'){
            if(!CommonService.integerMultiple(50,Number(value))){
                this.setState({
                    borrow: {valid: false,error: '输入的值不是50的倍数'}
                });
            }else{
                this.setState({
                    borrow: {valid: true,error:''}
                });
            }
        }else if(field === 'coinNumberValue'){
            if(Number(value) > this.state.coinTotal){
                this.setState({
                    coinTotalState: {valid: false,error: '你只有'+this.state.coinTotal+'个币'}
                });
            }else{
                this.setState({
                    coinTotalState: {valid: true,error:''}
                });
            }
        }
        
        this.setState({
            [field]: value
        });

        setTimeout(() => {
            this.checkForm();
        },0);

    }

    checkForm = ()=> {
        if(this.state.borrow.valid && 
            this.state.coinTotalState.valid &&
            this.state.coinValue &&
            this.state.periodValue &&
            this.state.rateValue &&
            this.state.repaymentValue &&
            this.state.recruitmentValue
        ){
            this.setState({
                isSaveValid: false
            });
        }else{
            this.setState({
                isSaveValid: true
            });
        }
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
            
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate(); 
            let hour = date.getHours(); 
            let minutes = date.getMinutes(); 
            let second = date.getSeconds();

            let time = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second;
            let data = JSON.parse(window.localStorage.getItem('borrowlist'));
            let newData = {
                phone: JSON.parse(window.localStorage.getItem('__ReactUser')).username,
                date: time,
                number: Number(this.state.borrowValue)
            }
            data.unshift(newData);
            window.localStorage.setItem('borrowlist',JSON.stringify(data));
            let returnData = JSON.parse(window.localStorage.getItem('returnlist'));
            let ruturntime = year + '-' + month + '-' + day;
            let ruturnlist = {
                period: returnData.length + 1,
                qty: Number(this.state.borrowValue),
                data: ruturntime,
                status: false
            }
            returnData.unshift(ruturnlist);
            window.localStorage.setItem('returnlist',JSON.stringify(returnData));
            alert('借币成功');
            this.props.history.push('/');
        },2000);
    }

    render(){
        const {coinList,periodList,rateList,repaymentList,recruitmentList,borrow,coinTotalState} = this.state;
        return(
            <div>
                <Header title={this.state.title} backUrl={this.state.backUrl} />
                <div className="apply-item">
                    <form onSubmit={this.save}>
                        <div className="apply-content">
                            <dl>
                                <dt>请选择质押币种</dt>
                                <dd>
                                    <select value={this.state.coinValue} onChange={(e) => this.handleValueChange('coinValue', e.target.value)}>
                                        {coinList.length > 0 && coinList.map((item, i) => {
                                            return <option key={i} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>请选择借币周期</dt>
                                <dd>
                                    <select value={this.state.periodValue} onChange={(e) => this.handleValueChange('periodValue', e.target.value)}>
                                        {periodList.length > 0 && periodList.map((item, i) => {
                                            return <option key={i} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>请选择可以接受的年化利率</dt>
                                <dd>
                                    <select value={this.state.rateValue} onChange={(e) => this.handleValueChange('rateValue', e.target.value)}>
                                        {rateList.length > 0 && rateList.map((item, i) => {
                                            return <option key={i} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>请选择还款方式</dt>
                                <dd>
                                    <select value={this.state.repaymentValue} onChange={(e) => this.handleValueChange('repaymentValue', e.target.value)}>
                                        {repaymentList.length > 0 && repaymentList.map((item, i) => {
                                            return <option key={i} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>可接受的最长募集期</dt>
                                <dd>
                                    <select value={this.state.recruitmentValue} onChange={(e) => this.handleValueChange('recruitmentValue', e.target.value)}>
                                        {recruitmentList.length > 0 && recruitmentList.map((item, i) => {
                                            return <option key={i} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>请输入可质押的数量</dt>
                                <dd className="noarrow">
                                    <input 
                                        className="inputchange"
                                        type="number" 
                                        onChange={(e) => this.handleValueChange('coinNumberValue', e.target.value)}
                                        placeholder="请输入可质押的数量" />
                                </dd>
                                {!coinTotalState.valid && <span className="validation-error">{coinTotalState.error}</span>}
                            </dl>
                            <dl>
                                <dt>请输入所借USDT的数量</dt>
                                <dd className="noarrow">
                                    <input 
                                        className="inputchange"
                                        type="number" 
                                        onChange={(e) => this.handleValueChange('borrowValue', e.target.value)}
                                        placeholder="最高可借3000USDT，必须为50的整数倍" />
                                </dd>
                                {!borrow.valid && <span className="validation-error">{borrow.error}</span>}
                            </dl>
                        </div>
                        <div className="apply-btn">
                            <input className={this.state.addloading ? 'btn-loading' : ''}  disabled={this.state.isSaveValid} value="确认无误，立即申请" type="submit" /> 
                        </div>
                    </form>
                </div>
                <FooterMenu /> 
            </div>
        );
    }
}

export default withRouter(Apply);
