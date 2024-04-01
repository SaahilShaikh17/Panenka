import React from 'react';
import { useState , useEffect } from 'react';

import { NewsTemplate } from './newsTemplate';
import { NEWSCONTENT } from '../../newsContent';
import axios from 'axios';
import './news.css'


const [news,setNews]= useState([]);
const fetchdata= async()=>{
  axios.get('https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=d233ef832c474d3ea36f9adc2f8dbc90')
  .then((res)=> {
    console.log(JSON.stringify(res.data));
    setNews(res.data);
  })
  }

  useEffect(()=>fetchdata,[]);

export const News = () => {
  return (
    <div className="newsPage">
      <div className="newsTitle">
        <h1>News</h1>
      </div>
      <div className="gridTry">
        {NEWSCONTENT.map((newsTemplate) => (
          <NewsTemplate data={newsTemplate} />
        ))}
      </div>
    </div>
  )
}
