import React from 'react';
import './borrowlist.css';
import ScrollService from '../../service/ScrollService'; 
import CommonService from '../../service/CommonService'; 

class BorrowList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            borrowlist: [],
            data: [
                {
                    phone: 13412345678,
                    date: '2018-10-9 19:42:12',
                    number: 3000
                },{
                    phone: 13436925814,
                    date: '2018-10-8 12:12:12',
                    number: 23
                },{
                    phone: 13414725836,
                    date: '2018-10-7 12:12:12',
                    number: 652
                },{
                    phone: 13425814736,
                    date: '2018-10-9 12:12:12',
                    number: 1000
                },{
                    phone: 13496385274,
                    date: '2018-10-9 12:12:12',
                    number: 1300
                },{
                    phone: 13485274196,
                    date: '2018-10-9 12:12:12',
                    number: 1500
                }
            ],
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
        if(window.localStorage.getItem('borrowlist') === null){
            window.localStorage.setItem('borrowlist',JSON.stringify(this.state.data));
        }
        if(window.localStorage.getItem('returnlist') === null){
            window.localStorage.setItem('returnlist',JSON.stringify(this.state.list));
        }
        this.setState({
            list: JSON.parse(window.localStorage.getItem('returnlist'))
        })
        this.setState({
            data: JSON.parse(window.localStorage.getItem('borrowlist'))
        })
        
        setTimeout(() => {
            ScrollService.init(document.getElementById('scrollBox'),document.getElementById('scrollBox').getElementsByTagName('li')[0].offsetHeight);
        },100);
        
    }

    render(){
        return(
            <div className="borrowlist-item">
                <h4>362510人已成功申请，已经借出63215个USDT</h4>
                <div className="borrowlist" id="scrollBox">
                    <ul>
                        {
                            this.state.data.map((value, key) => {
                                return (
                                    <li key={key}>
                                        <span>{CommonService.formatPhone(value.phone)}</span>
                                        <span>{CommonService.getDateDiff(value.date)}</span>
                                        <span>成功出借{value.number}USDT</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default BorrowList;