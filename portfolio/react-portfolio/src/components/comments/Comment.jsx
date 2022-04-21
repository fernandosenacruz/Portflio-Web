import React, { useEffect, useState, useRef } from 'react';
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
        console.log(data);
        setComments(data);       
      } catch (error) {
        console.log(error);        
      }
    }
    getComments();
  }, []);

  const form = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const comment = form.comment.value;
    const author = form.author.value;

    try {
      await API.post('/comment', {
        title,
        comment,
        author,
      },
      console.log({ title, comment, author }));
      
      setComments([...comments, {
        title,
        comment,
        author,
      }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section id="comment">
      <form ref={ form }>
        <input type="text" name="title" placeholder="Title" />
        <imput type="text" name="comment" placeholder="Comment" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit" className="btn btn-primary" onSubmit={ handleSubmit }>Add Comment</button>
      </form>

      <div className="container comments__container">
        <h3>{comments.map((comment) => comment.title)}</h3>
        <h4>{comments.map((comment) => comment.comment)}</h4>
        <h5>{comments.map((comment) => comment.author)}</h5>
      </div>
    </section>
  )
}

export default Comment;
