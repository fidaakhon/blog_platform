import React from "react";
import "./ShowFullPost.css";
import { Link } from "react-router-dom";

const ShowFullPost = ({ showPost, deletePost }) => {


    return (
        <>
            <div className="posts">
                <h1>{showPost.title}</h1>
                <p>{showPost.content}</p>
                <div className="btn_link">
                <Link to={'/'} >Read less</Link>
                <button onClick={() => deletePost(showPost.id)} className='delete-btn'><Link to={'/'} className="dlt_link">Delete</Link></button>
                </div>
            </div>
        </>
    )

}

export default ShowFullPost;