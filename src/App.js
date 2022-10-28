import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import News from './components/News';
import Articles from './components/Articles';

function App() {

  const APP_KEY = "a6ad84fc-0fcb-4b13-ba7e-835ab39325f4";
  const [headlines, setHeadlines] = useState([]);

   const getNews = async () => {
    try {
      const response = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=${APP_KEY}`);
      setHeadlines(response.data.response.results);
    
    }
    catch (e) {
      console.log(e.message);
    }
  }

   useEffect(() => {
     getNews();
  }, []);

  return (
     <Router>
<div className="container">
      <div className="header">
        <h1>Today's Headlines </h1></div>
        <div className="content">
          
         <Routes>
              <Route exact path="/" element={<News headlines={headlines} />}/>
              <Route path="/article/:id" element={<Articles />} />
              
              </Routes>
          
      </div>
      <div className="footer"> &copy;Copyright 2022, Hugo Abreu</div>
      </div>
      </Router>
  );
}

export default App;