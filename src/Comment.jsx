import React, { useState } from 'react'
import CommentForm from './CommentForm'


function Comment({}) {
    let [comments, setComments]= useState([{
        username: "shahab",
        rating: 5,
        remarks: 'good boy'
    }])

function addNewComment(comment){
  setComments((currComments) => [...currComments, comment])
}

  return (
    <div>
        <CommentForm addNewComment={addNewComment}/>
        <h1>All Comments!</h1>
        {
          comments.map((comment, idx)=>{
            return(
                <div className="comments" key={idx}>
                <h3>@{comment.username}</h3>
                <h4>Rating {comment.rating}</h4>
                <p>Remarks: {comment.remarks}</p>
                </div>
            )
          })
        }
        
    </div>
  )
}

export default Comment