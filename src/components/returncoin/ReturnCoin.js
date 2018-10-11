import React from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../header/Header';
import './returncoin.css';
import ReturnList from './ReturnList';
import Card from './Card';
import FooterMenu from '../footer/FooterMenu';

class ReturnCoin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '当前借币',
            bar: '历史借币记录',
            color: true,
            nextUrl: 'borrowrecord',
            showBack: false
        };
    }

    render(){
        return(
            <div className="returncoin-item">
                <Header title={this.state.title} showBack={this.state.showBack} nextUrl={this.state.nextUrl} bar={this.state.bar} />
                <Card color={this.state.color} />
                <ReturnList />
                <FooterMenu /> 
            </div> 
        );
    }
}

export default withRouter(ReturnCoin);