import React from "react";
import { Link } from "react-router-dom";
import Headlines from "./Headlines";

const News = ({ headlines }) => {

  return (
    <article className='article'>
      {headlines.map(headline => (
        <Headlines
              key={headline.id}
          headline={
            <Link to={`/article/${headline.id.replace(/\//g, "%2F")}`}>
                  {headline.fields.headline}
            </Link>
          }
          thumbnail={headline.fields.thumbnail} 
        />
      ))}
      
    </article>
  );
}
export default News;

