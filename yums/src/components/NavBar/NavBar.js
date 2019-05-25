import React, {Component} from 'react'
import './NavBar.css';

class NavBar extends Component {
    render(){
        return(
            <div>
            <div className ="container">
                <div className="logo">
                    <h1>Yums to Go</h1>
                </div>

                <div className="nav-container">
                    <ul className="nav-links">
                        <li onClick={() => this.props.navClick('menu')}><h2>Menu</h2></li>
                        <li onClick={() => this.props.navClick('chkOut')}><h2>Check Out</h2></li>
                    </ul>
                </div>
            </div>
            <hr/>
        </div>
        )
    }
}
export default NavBar;