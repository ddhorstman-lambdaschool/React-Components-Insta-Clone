import React from "react";

const LikeSection = props => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i
            className="far fa-heart"
            onClick={() => props.setLikes(props.likeNumber + 1)}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{`${props.likeNumber} like${
        props.likeNumber !== 1 ? "s" : ""
      }`}</p>
    </div>
  );
};

export default LikeSection;
