import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://ec2-52-23-253-217.compute-1.amazonaws.com:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="info">
        <Link to={`/post/${post._id}`} className="link">
          <span className="title">{post.title}</span>
        </Link>
        <hr />
        <span className="postedTime">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="desc">{post.desc}</p>
    </div>
  );
}
