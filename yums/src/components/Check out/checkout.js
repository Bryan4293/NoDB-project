import React from 'react';

function CheckOut(props){
    let checkDisplay = props.chkOut.map((element, index) => {
        // console.log(element.id)
        return(
            <div id="input" key={index}>
            <article >
            <img src={element.image} />
            <div className="item_box">
                <div className="item_tag">
                  <h2>{element.name}</h2>
                  <h2>$ {element.price}.00</h2>
                  <button onClick={() => {
                      props.editComment(element.id)
                      document.getElementById('inputField').value = '';
                      }}>edit</button>
                  <button onClick={() => props.deleteComment(element.id)}>delete</button>
                </div>
            <h3>comment: {props.comment}</h3>
                <button onClick={() => props.removeItem(index)}>Cancel</button>
            </div>
            </article>
            <div>
            <input id='inputField' onChange={(e)=>props.handleComment(e.target.value)}/>
            <button onClick={()=> {
                props.addComment(element.id)
                document.getElementById('inputField').value = '';
            }}>Add Comment</button>
            </div>
            </div>

        )
    })
    return(
        <section id="display">
            {checkDisplay}
        </section>
    )
}
export default CheckOut;