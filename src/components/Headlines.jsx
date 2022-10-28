import React from "react";
import '../App.css';

const Headlines = ({headline,thumbnail}) => {
  return (

    <section className="card">
      <img src={thumbnail} alt="Headlines" />
      <article className="container1">
        <b><a href={headline}>{headline}</a> </b>
      </article>
    </section>
  
  );
}

export default Headlines;

