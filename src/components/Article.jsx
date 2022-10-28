import React from "react";
import '../App.css';


const Headlines = ({headline,thumbnail,bodyText,link}) => {
  return (

       <section className="card">
          <img src={thumbnail} alt="article" />
          <article className="container1">
            <h4><b><a href={link} >{headline}</a></b></h4> 
            <p>{bodyText}</p> 
          </article>
        </section>
  );
}

export default Headlines;

