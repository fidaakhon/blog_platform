import React from 'react';
import './Home.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function Home({ posts, showingPost }) {

  function getFirstSentence(paragraph) {
    const sentenceRegex = /[^.!?]*[.!?]/;
    const sentences = paragraph.match(sentenceRegex);
    if (sentences && sentences.length > 0) {
      return sentences[0].trim();
    } else {
      return '';
    }
  }

  const toggleFullPost = (index) => {
    // console.log(posts[index]);
    showingPost(posts[index]);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Blog Platform</h1>
      <h2>Recent Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{getFirstSentence(post.content) + "..."}</p>
            <button onClick={() => toggleFullPost(index)} className='show-btn'>
              <Link to={'/show-post'} >Read more</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
