import React, { useEffect, useState, useRef } from 'react';
import API from '../../services/API';
import './comment.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Comment = () => {
  const form = useRef();

  const [comments, setComments] = useState([{
    title: 'No comments yet',
    content: '',
    author: null,
    },
  ]);

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
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const author = form.author.value;

    try {
      await API.post(
        '/comment',
        {
          title,
          content,
          author,
        },
      );
      setComments([
        ...comments,
        {
          title,
          content,
          author,
        },
      ]);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="comment">
      <div className="container comment__container">
        <Swiper
          className="comment__options"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {comments.map(({ title, content, author }, index) => (
            <SwiperSlide key={index} className="comment__option">
              <h3>{title}</h3>
              <h4>{author}</h4>
              <p>{content}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <form ref={form} onSubmit={(e) => handleSubmit(e)} className="form__comment">
          <input type="text" name="title" placeholder="Title" required/>
          <input type="text" name="author" placeholder="Author" required/>
          <textarea
            name="content"
            id="content"
            cols="15"
            rows="5"
            placeholder="Comment"
            required
            ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            >
            Add Comment
          </button>
        </form>
      </div>
    </section>
  );
};

export default Comment;
