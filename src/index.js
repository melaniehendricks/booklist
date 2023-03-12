import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
import { books } from "./books";
import Book from "./Book";

/**
 * JSX Rules
 * - return single element
 * - div / section / article or Fragment
 * - use camelCase for html attribute
 * - className instead of class
 * - close every element
 * - formatting
 */

function BookList2022() {
  // capitalize for Components in React
  return (
    <>
      <div className="container">
        <header>
          <h1>2022 Book List</h1>
        </header>
        <section className="booklist">
          {books.map((book) => {
            return <Book key={book.id} {...book}></Book>;
          })}
        </section>
      </div>
    </>
  );
}

/*
<button type="button" onClick={(moreComplexExample(author)}>more complex example</button>
this will invoke the function immediately when the page is rendered

<button type="button" onClick={() => moreComplexExample(author)}>more complex example</button>
this will invoke the function onClick
*/

// WHAT do we want to render (<Greeting/>)
// WHERE do we want it rendered? (root)
ReactDOM.render(<BookList2022 />, document.getElementById("root"));
