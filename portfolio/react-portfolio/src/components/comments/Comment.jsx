import React, { useEffect, useState } from 'react';
import API from '../../services/API';
import './comment.css';

const Comment = () => {
  const [comments, setComments] = useState([{
    title: 'No comments yet',
    comment: '',
    author: null
  }]);

  useEffect(() => {
    async function getComments() {
      try {
        const { data } = await API.get('/comments');
        setComments(data);        
      } catch (error) {
        console.log(error);        
      }
    }
    getComments();
  }, []);

  return (
    <section id="comment">
      <div className="container comments__container">
        <h3>{comments.map((comment) => comment.title)}</h3>
        <h4>{comments.map((comment) => comment.comment)}</h4>
        <h5>{comments.map((comment) => comment.author)}</h5>
      </div>
    </section>
  )
}

export default Comment;
