import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function Home({ posts, showingPost }) {
  const [emtyPost, setEmptyPost] = useState(false);

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

  // let postsss= posts;
  useEffect(() => {
    if (posts.length === 0) {
      setEmptyPost(true);
      // console.log("change")
    }
    return () => {
      setEmptyPost(false)
    }

  }, [posts])

  return (
    <div className="home-container">
      <h1>Welcome to the Blog Platform</h1>
      {emtyPost ? <div>
        <h2>No Post Yet</h2>
        <button className="create_post_btn">
        <Link to="/create-post">Create Post</Link>
        </button>
      </div> :
        <div>
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
      }
    </div>
  );
}

export default Home;
