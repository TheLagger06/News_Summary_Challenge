import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Article from './Article';

const Articles = () => {

    const { id } = useParams();
    
    useEffect(() => {
      getNews()
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   const APP_KEY = "a6ad84fc-0fcb-4b13-ba7e-835ab39325f4";
   const [headline, setHeadline] = useState([]);
    
   const getNews = async () => {
    try {
        const response = await axios.get(`https://content.guardianapis.com/search?ids=${id}&show-fields=bodyText%2Cheadline%2Cthumbnail&api-key=${APP_KEY}`);
        setHeadline(response.data.response.results);
    }
    catch (e) {
      console.log(e.message);
    }
  }
    return (
      <div>
            <article className='article'>
          {headline.map(headline => (
            <Article 
              key={headline.id}
              headline={headline.fields.headline}
              thumbnail={headline.fields.thumbnail}
              bodyText={headline.fields.bodyText}
              link={headline.webUrl}
            />
          ))}
            </article>
        </div>
  );
}

export default Articles;