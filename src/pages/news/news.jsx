//news.jsx
import React from 'react';
import { useState , useEffect } from 'react';

import { NewsTemplate } from './newsTemplate';
import { NEWSCONTENT } from '../../newsContent';
import axios from 'axios';
import './news.css'




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
