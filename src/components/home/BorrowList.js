import React from 'react';
import './borrowlist.css';
import ScrollService from '../../service/ScrollService'; 
import CommonService from '../../service/CommonService'; 

class BorrowList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
            ]
        };
    }
    componentDidMount(){
        ScrollService.init(document.getElementById('scrollBox'),document.getElementById('scrollBox').getElementsByTagName('li')[0].offsetHeight);
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