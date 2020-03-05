import React /*, { useState }*/ from "react";

const CommentInput = props => {
  //let [comment, changeComment] = useState(props.comment);
  return (
    <form
      className="comment-form"
      onSubmit={event => {
        props.submitComment(event.target.firstChild.value);
        //changeComment("");
        event.target.reset();
        event.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Add comment... "
        //value={comment}
        //onChange={event => changeComment(event.target.value)}
      />
    </form>
  );
};

export default CommentInput;
