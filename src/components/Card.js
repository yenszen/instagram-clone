import React from "react";

const Card = ({ username, post, caption, likes, timestamp, comments }) => {
  return (
    <div>
      <h2>{username}</h2>
      <img style={{ width: "50%" }} src={post} alt="post info" />
      <h3>
        {username}: {caption}
      </h3>
      <p>Likes: {likes}</p>
      <p>{timestamp}</p>
      {comments.map(comment => {
        return (
          <React.Fragment>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Card;
