import React from "react";
import "./HomePage.css";
import loremContent from "./LoremPosts";

const HomePage = () => {
  return (
    <div id="home">
  <h1 className="page-title">Blog</h1>
  <div className="blog-container">
    {loremContent.map((content, index) => (
      <article key={`blog-${index}`} className="blog-box">
        <time className="date">{content.date}</time>
        <h2 className="title">{content.title}</h2>
        <div className="content-preview">
          <p className="content">{content.content}</p>
        </div>
        <a href="#" className="read-more">Read More</a>
      </article>
    ))}
  </div>
</div>
  );
};

export default HomePage;
