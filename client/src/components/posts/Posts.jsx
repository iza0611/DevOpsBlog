import Post from "../post/Post";
import "./posts.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://ec2-52-23-253-217.compute-1.amazonaws.com:5000/api/posts"
      );
      setPosts(res.data);
    };
    fetchPosts();
    console.log(Array.isArray(posts));
  }, [posts]);

  return (
    <div className="posts">
      {Array.isArray(posts) ? posts.map((p) => <Post post={p} />) : <br />}
    </div>
  );
}
