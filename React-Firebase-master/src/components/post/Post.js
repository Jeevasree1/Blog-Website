import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import { useThemeContext } from './../../hooks/useThemeContext';
import moment from "moment";

export default function Post({post}) {

  const {theme} = useThemeContext()

  const navigate = useNavigate()


  const handleClick = () => {
    navigate(`/post/${post.id}`,{state:post})
  }

  return (
    <div className={`card ${theme}card`} onClick={handleClick}>
      <h5 className="card-header">{post.title}</h5>
      <div className="card-body">
        <p className="card-text">
          {post.body}
        </p>
        {post.createdAt && <small className="text-secondary"><i>{moment(post.createdAt.toDate()).calendar()}</i></small>}
      </div>
      
    </div>
  );
}
