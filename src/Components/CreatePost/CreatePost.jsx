import React, { useState } from 'react';
import './CreatePost.css'; // Import your CSS file for styling

function CreatePost({ AddPost }) {
  // Define state variables for the post title and content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your logic to save the post data
    // console.log('Title:', title);
    // console.log('Content:', content);
    AddPost(title, content);

    // Clear the form fields after submission
    setTitle('');
    setContent('');
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="6"
            required
          />
        </div>
        <button onClick={handleSubmit} type="submit" >Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
