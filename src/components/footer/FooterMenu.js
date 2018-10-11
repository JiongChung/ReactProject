import React from 'react';
import {withRouter,Link} from 'react-router-dom';

class FooterMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className="foot-menu">
                <ul>
                    <li>
                        <Link to="/">借币</Link>
                    </li>
                    <li>
                        <Link to="/returncoin">还币</Link>
                    </li>
                    <li>
                        <Link to="/user">我的</Link>
                    </li>
                </ul>
            </div>          
        );
    }
}

export default withRouter(FooterMenu);