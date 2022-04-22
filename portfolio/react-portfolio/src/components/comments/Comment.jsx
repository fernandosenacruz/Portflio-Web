import React, { useEffect, useState, useRef } from 'react';
import API from '../../services/API';
import './comment.css';
import fatnando_cartoon from '../../assets/fatnando_cartoon.jpg';
import fatnando_it from '../../assets/fatnando_it.png';

const comment = [
  {
    id: 1,
    createdAt: '2022-04-20T22:17:36.695Z',
    updatedAt: '2022-04-20T22:17:36.695Z',
    title: 'Sugestão',
    content: 'Acredite no seu potencia e desista',
    published: false,
    author: 'CdD',
  },
  {
    id: 2,
    createdAt: '2022-04-22T11:08:02.121Z',
    updatedAt: '2022-04-22T11:08:02.121Z',
    title: 'Crítica',
    content: 'Apaga e começa do zero',
    published: false,
    author: 'Ximira',
  },
];

const Comment = () => {
  const [comments, setComments] = useState(
    // [
    //   {
    //     title: 'No comments yet',
    //     comment: '',
    //     author: null,
    //   },
    // ]
    comment
  );

  useEffect(() => {
    async function getComments() {
      try {
        // const { data } = await API.get('/comments');
        // console.log(data);
        // setComments(data);

        setComments(comments);
      } catch (error) {
        console.log(error);
      }
    }
    getComments();
  });

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const comment = form.comment.value;
    const author = form.author.value;

    try {
      await API.post(
        '/comment',
        {
          title,
          comment,
          author,
        },
        console.log({ title, comment, author })
      );

      setComments([
        ...comments,
        {
          title,
          comment,
          author,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="comment">
      {/* <div className="container comment__container">
        <div className="comment__options">
          {comments.map(({ title, comment, author }, index) => (
            <article key={index} className="comment__option">
              <h3>{title}</h3>
              <h4>{author}</h4>
              <small>{comment}</small>
            </article>
          ))}
        </div>
      </div> */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={fatnando_cartoon}
              className="d-block w-11"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={fatnando_it}
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={fatnando_cartoon}
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <form ref={form}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <textarea
          name="comment"
          id="comment"
          cols="15"
          rows="5"
          placeholder="Comment"
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Add Comment
        </button>
      </form>
    </section>
  );
};

export default Comment;
