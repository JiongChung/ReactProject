import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/style.css';

import Home from './components/home/Home';
import ReturnCoin from './components/returncoin/ReturnCoin';
import User from './components/user/User';
import BorrowRecord from './components/returncoin/BorrowRecord';
import Apply from './components/apply/Apply';
import FooterMenu from './components/footer/FooterMenu';

class App extends Component {
    componentDidMount(){
        let islogin = window.localStorage.getItem('__login');
        if(islogin == null){
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <Router>
                <div>    
                    <Route exact path="/" component={Home} />
                    <Route path="/returncoin" component={ReturnCoin} />    
                    <Route path="/user" component={User} /> 
                    <Route path="/borrowrecord" component={BorrowRecord} />    
                    <Route path="/apply" component={Apply} /> 
                    <FooterMenu />      
                </div>
            </Router>
        );
    }
}

export default App;
