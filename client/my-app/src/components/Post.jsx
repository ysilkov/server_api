import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost} from "../store/getPost";
import logo from "../img/logo.webp"
import { deletePost } from "../store/deletePost";


export const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  const data = useSelector((state) => state.posts);
  return (
    <div className="postContainer">
      {data.loading === true ? <div className="loading">Loading...</div> : data.posts[0].map((post) => (
        <div className="userInfo">
            <div className="post">
            <div>{data.picture === undefined ? <img src={logo} alt="logo" className="avatar"/>: <img src={post.picture} className="avatar" alt="logo" />}</div>
            <div>{post.author}</div>
            </div>
            <div className="content">{post.content}</div>
            <div className="button"><button id={post._id} onClick={()=>dispatch(deletePost(post._id))}>X</button></div>
            </div>
       
      ))}
         {data.error && <h2>An error occured: {data.error}</h2>}
    </div> 
  );
};
