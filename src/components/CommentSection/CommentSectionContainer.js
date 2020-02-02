// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  let [comments, updateComments] = useState([]);
  return (
    <div>
      {comments.map((comment, idx) => {
        return <Comment key={idx} comment={comment} />;
      })}
      <CommentInput
        submitComment={commentText =>
          updateComments(
            comments.concat({ username: "David", text: commentText })
          )
        }
        comment=""
      />
    </div>
  );
};

export default CommentSection;
