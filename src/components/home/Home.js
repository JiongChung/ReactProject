import React from 'react';
import {withRouter} from 'react-router-dom';
import '../../assets/css/account.css';

import Step from './Step';
import BorrowList from './BorrowList';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
        let islogin = window.localStorage.getItem('__login');
        if(islogin == null){
            // this.props.history.push('/login');
        }
    }

    render(){
        return(
            <div>
                <div className="account-item">
                    <div className="banner"><img alt="" src={require('../../assets/images/banner.jpg')} /></div>
                    <Step />
                    <div className="borrow">
                        <button className="btn">立即借USDT</button>
                    </div>
                    <BorrowList />
                    <div className="invite"><img alt="" src={require('../../assets/images/01.jpg')} /></div>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);