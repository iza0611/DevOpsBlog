import { useState, useContext } from "react";
import Com from "../comment/Com";
import "./Comments.css";
import { Context } from "./../../context/Context";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useContext(Context);

  function addComment() {
    var com = { username: user.username, info: comment, like: 0, dislike: 0 };
    var array = comments;
    array.push(com);
    setComment(array);
    console.log(array);
  }
  const nothing = () => {
    console.log("nothing");
  };
  return (
    <div className="comments">
      <p className="commentHeading">Comments</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="commentInput"
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="commentButton"
          onClick={() => {
            user ? addComment() : nothing();
          }}
        >
          post comment
        </button>
        <div>
          {comments.map((c) => (
            <Com com={c} />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Comments;
