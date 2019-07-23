import React from 'react';
import "./menu.css";

class Menu extends React.Component{
    constructor(props){
        super(props)
    }
   
    render(){
        return(
            <article>
                <img src={this.props.menu.image} />
                <div className="item_box">
                    <div className="item_tag">
                    <h2>{this.props.menu.name}</h2>
                    <h2>$ {this.props.menu.price}.00</h2>
                    </div>
                    <button onClick={() => this.props.addToCheck(this.props.menu)}>Purchase</button>
                </div>
            </article>
        )
    }
}
export default Menu;