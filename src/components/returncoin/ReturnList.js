import React from 'react';
import './list.css';

class ReturnList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    period: 1,
                    qty: 10100,
                    data: '2018-8-12',
                    status: true
                },
                {
                    period: 2,
                    qty: 3000,
                    data: '2018-12-12',
                    status: true
                },
                {
                    period: 3,
                    qty: 600,
                    data: '2018-7-12',
                    status: true
                },
                {
                    period: 4,
                    qty: 60000,
                    data: '2018-9-12',
                    status: false
                },
                {
                    period: 1,
                    qty: 10100,
                    data: '2018-8-12',
                    status: true
                },
                {
                    period: 2,
                    qty: 3000,
                    data: '2018-12-12',
                    status: true
                },
                {
                    period: 3,
                    qty: 600,
                    data: '2018-7-12',
                    status: true
                },
                {
                    period: 4,
                    qty: 60000,
                    data: '2018-9-12',
                    status: false
                },
                {
                    period: 1,
                    qty: 10100,
                    data: '2018-8-12',
                    status: true
                },
                {
                    period: 2,
                    qty: 3000,
                    data: '2018-12-12',
                    status: true
                },
                {
                    period: 3,
                    qty: 600,
                    data: '2018-7-12',
                    status: true
                },
                {
                    period: 4,
                    qty: 60000,
                    data: '2018-9-12',
                    status: false
                }
            ]
        };
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