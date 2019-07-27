import React from 'react';
import NewsItem from './NewsItem';

const News = ({ news }) => (
  <div className='row'>
    {news.map(newsitem => (
      <NewsItem key={newsitem.url} newsitem={newsitem} />
    ))}
  </div>
);

export default News;
