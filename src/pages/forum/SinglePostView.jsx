import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SinglePostView.css'; 

const SinglePostView = () => {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        // Retrieve accessToken and userId from localStorage
        const accessToken = localStorage.getItem('accessToken');
        const userId = localStorage.getItem('userId');
        
        // Fetch the post details
        const postResponse = await axios.get(`https://paneka-backend.onrender.com/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setPost(postResponse.data.post);

        // Fetch the comments for the post
        const commentsResponse = await axios.get(`https://paneka-backend.onrender.com/comments/post/${postId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
    
        // Update the comments state with the newly fetched comments
        setComments(commentsResponse.data.comments);
    
        // Clear the comment input field
        setNewComment('');
      } catch (error) {
        console.error('Error fetching post and comments:', error);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    try {
      // Retrieve accessToken from localStorage
      const accessToken = localStorage.getItem('accessToken');

      // Send a request to add the new comment to the post
      await axios.post(`https://paneka-backend.onrender.com/comments/post/${postId}`, {
        commentText: newComment
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Refetch the comments to update the UI
      const commentsResponse = await axios.get(`https://paneka-backend.onrender.com/comments/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setComments(commentsResponse.data.comments);

      // Clear the comment input field
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div className="single-post-view">
      {post && (
        <div className="post-details">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {post.author && <p>Author: {post.author.username}</p>}
          {/* Display other post details here */}
        </div>
      )}

      <h3>Comments</h3>
      <div className="comments-list">
        {Array.isArray(comments) && comments.map(comment => (
          <div key={comment._id} className="comment">
            <p>{comment.comment}</p>
            {/* Display other comment details here */}
          </div>
        ))}
      </div>

      {/* Textbox for adding a new comment */}
      <textarea className="comment-input" value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button className="add-comment-btn" onClick={handleCommentSubmit}>Add Comment</button>
    </div>
  );
};

export default SinglePostView;
