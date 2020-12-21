import React, { useState } from "react";
import "./comment.css"
const Comment=()=>{
    const [data,setData]=useState({
        comments:"",
    })
    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })

    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your comment "${data.comments}" has been submitted `);

    };
    return(
        <div>
        <form onSubmit={formSubmit}>
       <div className="comment-wrapper">
        <input
          type="text"
          className="comment_box"
          onChange={inputEvent}
          name="comments"
          value={data.comments}
          placeholder="Add a comment..."
        />
      </div>
      </form>
</div>
    )
}
export default Comment;