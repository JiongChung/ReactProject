import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/style.css';

import Home from './components/home/Home';
import ReturnCoin from './components/returncoin/ReturnCoin';
import User from './components/user/User';
import BorrowRecord from './components/returncoin/BorrowRecord';
import FooterMenu from './components/footer/FooterMenu';

class App extends Component {
    render() {
        return (
            <Router>
                <div>    
                    <Route exact path="/" component={Home} />
                    <Route path="/returncoin" component={ReturnCoin} />    
                    <Route path="/user" component={User} /> 
                    <Route path="/borrowrecord" component={BorrowRecord} />    
                    <FooterMenu />      
                </div>
            </Router>
        );
    }
}

export default App;
