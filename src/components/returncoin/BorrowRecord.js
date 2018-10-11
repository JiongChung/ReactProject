import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../header/Header';
import ReturnList from './ReturnList';

class BorrowRecord extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '历史借币记录',
            bar: '',
            backUrl: 'returncoin'
        };
    }

    render(){
        return(
            <div className="returncoin-item">
                <Header title={this.state.title} backUrl={this.state.backUrl} />
                <ReturnList />
            </div>
        );
    }
}

export default withRouter(BorrowRecord);