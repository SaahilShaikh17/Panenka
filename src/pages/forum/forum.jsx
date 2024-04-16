// Forum.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PostCard from './PostCard'; // Import the PostCard component
import './forum.css'; // Import your CSS file for styling

export const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Remove the access token from local storage
    // Redirect the user to the login page or any other desired page
    window.location.href = '/login'; // Redirect to the login page
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:1337/posts', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className="newsTitle">
        <h1>Forum</h1>
      </div>
      <Link to="/create-post">
        <button>Create Post</button>
      </Link>
      <button onClick={handleLogout}>Logout</button>
      <div className="post-cards-container">
        {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
