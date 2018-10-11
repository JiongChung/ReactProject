import React from 'react';
import {withRouter} from 'react-router-dom';
import './header.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    openUrl = ()=> {
        this.props.history.push('/'+this.props.nextUrl);
    }

    back = ()=> {
        this.props.history.push('/'+this.props.backUrl);
    }

    render(){
        return(
            <h4 className="header">
                <span className={this.props.showBack ? 'back' : 'back hide'} onClick={this.back}></span>
                <span>{this.props.title}</span>
                <span className="header-bar" onClick={this.openUrl}>{this.props.bar}</span>
            </h4>
        );
    }
}

export default withRouter(Header);

Header.defaultProps={

    showBack: true
}