import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import '../../assets/css/account.css';

import Step from './Step';
import BorrowList from './BorrowList';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <div className="account-item">
                <div className="banner"><img alt="" src={require('../../assets/images/banner.jpg')} /></div>
                <Step />
                <div className="borrow">
                    <button className="btn"><Link to="/apply">立即借USDT</Link></button>
                </div>
                <BorrowList />
                <div className="invite"><img alt="" src={require('../../assets/images/01.jpg')} /></div>
            </div>
        );
    }
}

export default withRouter(Home);