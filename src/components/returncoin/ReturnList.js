import React from 'react';
import './list.css';

class ReturnList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    period: 4,
                    qty: 10100,
                    data: '2018-10-11',
                    status: true
                },
                {
                    period: 3,
                    qty: 3000,
                    data: '2018-9-9',
                    status: true
                },
                {
                    period: 2,
                    qty: 600,
                    data: '2018-8-1',
                    status: true
                },
                {
                    period: 1,
                    qty: 60000,
                    data: '2018-7-12',
                    status: false
                }
            ]
        };
    }

    componentDidMount(){
        if(window.localStorage.getItem('returnlist') === null){
            window.localStorage.setItem('returnlist',JSON.stringify(this.state.list));
        }
        this.setState({
            list: JSON.parse(window.localStorage.getItem('returnlist'))
        })
    }

    render(){
        return(
            <div className="returnlist-item">
                <ol className="clearfix">
                    <li>期数</li>
                    <li>还币数量</li>
                    <li>还款时间</li>
                    <li>状态</li>
                </ol>
                {
                    this.state.list.map(function(value, key){
                        return(
                            <ul className="clearfix" key={key}>
                                <li>{value.period}</li>
                                <li>{value.qty} USDT</li>
                                <li>{value.data}</li>
                                <li>{value.status ? '已还款' : '未还款'}</li>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

export default ReturnList;