import React, { useState } from "react";

const CommentInput = props => {
  let [comment, changeComment] = useState(props.comment);
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={comment}
        placeholder="Add comment... "
        onChange={event => changeComment(event.target.value)}
      />
    </form>
  );
};

export default CommentInput;
