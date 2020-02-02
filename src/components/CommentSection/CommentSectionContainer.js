// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  let [comments, updateComments] = useState([]);
  function submitFunction(event) {
    updateComments(
      //console.log(event.target)
      comments.concat({
        username: "David",
        text: `${event.target.firstChild.value}`
      })
    );
    event.preventDefault();
  }
  function changeFunction() {}
  return (
    <div>
      {comments.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
      <CommentInput
        submitComment={submitFunction}
        comment=""
        changeComment={changeFunction}
      />
    </div>
  );
};

export default CommentSection;
