/**
 * 'rafce' - React componnet utilizing an arrow function
 */

import React from "react";

// Nested Components, React Tools
// {} = JavaScript
function Book({ img, title, author }) {
  //const { img, title, author } = props;   // destructuring properties

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

export default Book;
