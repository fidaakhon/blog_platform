import React, {  useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import CreatePost from './Components/CreatePost/CreatePost';
import ShowFullPost from './Components/ShowFullPost/ShowFullPost';
import Breadcrumbs from './Components/BreadCrumbs/Breadcrumbs';

function App() {
  const [posts, setPosts] = useState([]);
  const [showPost, setShowPost] = useState("");

  let index = posts.length;
  const AddPost = (title, content) => {
    index++;
    setPosts((prevPosts) => [...prevPosts, { id: index, title: title, content: content }]);
  }

  const showingPost = (singlePost) => {
    setShowPost(singlePost);
    // console.log(singlePost);
  }

  const deletePost = (id) => {
      setPosts(posts.filter((post) => post.id !== id));
  }


  return (
    <Router>
      <div className="App">
        <Header />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home posts={posts} showingPost={showingPost} />} />
          <Route path="/blog_platform" element={<Home posts={posts} showingPost={showingPost} />} />
          <Route path="/create-post" element={<CreatePost AddPost={AddPost} />} />
          <Route path="/show-post" element={<ShowFullPost showPost={showPost} deletePost={deletePost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
