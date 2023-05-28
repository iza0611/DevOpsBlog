import { useState } from "react";
import "./comment.css";

function Com({ com }) {
  const [like, setLike] = useState(com.like);
  const [dislike, setDislike] = useState(com.dislike);

  return (
    <div className="comment">
      <p className="commentUsername">{com.username}</p>
      <p className="commentText">{com.info}</p>
      <div className="btn">
        <span className="like">
          {like}{" "}
          <button className="likeButton" onClick={() => setLike(like + 1)}>
            <i className="likeicon fa fa-thumbs-up"></i>
          </button>
        </span>
        <span className="dislike">
          {dislike}{" "}
          <button
            className="likeButton"
            onClick={() => setDislike(dislike + 1)}
          >
            <i className="dislikeicon fa fa-thumbs-down"></i>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Com;
