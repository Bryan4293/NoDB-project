import React from 'react';
import "./menu.css";

function Menu(props){
   
    return(
        <article>
            <img src={props.menu.image} />
            <div className="item_box">
                <div className="item_tag">
                  <h2>{props.menu.name}</h2>
                  <h2>$ {props.menu.price}.00</h2>
                </div>
                <button onClick={() => props.addToCheck(props.menu.id)}>Purchase</button>
            </div>
            </article>
    )
}
export default Menu;