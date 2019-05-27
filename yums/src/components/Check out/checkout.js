import React from 'react';

function CheckOut(props){
    return(
        <article key={props.index}>
        <img src={props.chkOut.image} />
        <div className="item_box">
            <div className="item_tag">
              <h2>{props.chkOut.name}</h2>
              <h2>$ {props.chkOut.price}.00</h2>
            </div>
            <button onClick={() => props.removeItem(props.index)}>Cancel</button>
        </div>
        </article>
    )
}
export default CheckOut;