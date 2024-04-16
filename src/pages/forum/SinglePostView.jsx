// SinglePostView.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePostView = () => {
  const { postId, id } = useParams(); // Get the postId from the URL parameters
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        // Fetch the post details
        const postResponse = await axios.get(`http://localhost:1337/posts/${id}`);
        setPost(postResponse.data);

        // Fetch the comments for the post
        const commentsResponse = await axios.get(`http://localhost:1337/comments/post/${postId}`);
        setComments(commentsResponse.data);
      } catch (error) {
        console.error('Error fetching post and comments:', error);
      }
    };

    fetchPostAndComments();
  }, [postId]);

  const handleCommentSubmit = async () => {
    try {
      // Send a request to add the new comment to the post
      await axios.post(`http://localhost:1337/comments/post/${postId}`, {
        text: newComment
      });

      // Refetch the comments to update the UI
      const commentsResponse = await axios.get(`http://localhost:1337/comments/post/${postId}`);
      setComments(commentsResponse.data);

      // Clear the comment input field
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Author: {post.author.username}</p>
          {/* Display other post details here */}
        </div>
      )}

      <h3>Comments</h3>
      <div>
        {comments.map(comment => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            {/* Display other comment details here */}
          </div>
        ))}
      </div>

      {/* Textbox for adding a new comment */}
      <textarea value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button onClick={handleCommentSubmit}>Add Comment</button>
    </div>
  );
};

export default SinglePostView;
