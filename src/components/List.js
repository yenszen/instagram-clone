import React from "react";
import { users } from "../data";
import Card from "./Card";

class List extends React.Component {
  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        {users.map(
          ({ username, imageUrl, caption, likes, timestamp, comments }) => {
            return (
              <Card
                username={username}
                post={imageUrl}
                caption={caption}
                likes={likes}
                timestamp={timestamp}
                comments={comments}
              />
            );
          }
        )}
      </div>
    );
  }
}

export default List;
