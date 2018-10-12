import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route ,Switch } from 'react-router-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Register from './components/register/Register';
import Login from './components/login/Login';
import Forgetpassword from './components/forgetpassword/Forgetpassword';
import ReturnCoin from './components/returncoin/ReturnCoin';
import User from './components/user/User';
import BorrowRecord from './components/returncoin/BorrowRecord';
import Apply from './components/apply/Apply';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ App } exact />
                <Route path='/register' component={ Register } />
                <Route path='/login' component={ Login } />
                <Route path='/forget' component={ Forgetpassword } />
                <Route path='/returncoin' component={ ReturnCoin } />
                <Route path='/user' component={ User } />
                <Route path='/borrowrecord' component={ BorrowRecord } />
                <Route path='/apply' component={ Apply } />
            </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
