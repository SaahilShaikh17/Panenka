import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css'; // Import your CSS file for styling

const PostCard = ({ post }) => {
  return (

    <Link to={`/posts/${post._id}`} className="post-card-link">
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <p>Author: {post.author.username}</p>
      <p>Upvotes: {post.upvotes.length}</p>
      <p>Comments: {post.comments.length}</p>
      <p>Time: {new Date(post.time).toLocaleString()}</p>
    </div>
  </Link>
  );
};

export default PostCard;