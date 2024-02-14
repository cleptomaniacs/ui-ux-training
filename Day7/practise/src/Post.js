import React from "react";
import PostFetch from "./PostFetch";

const Post = () => {
  const { data } = PostFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  return (
    <div>
      <h2 className="mb-2">Posts</h2>
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export default Post;
