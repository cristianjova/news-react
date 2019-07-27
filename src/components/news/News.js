import React from 'react';
import NewsItem from './NewsItem';

const News = ({ news }) => (
  <div className='row'>
    {news.map(newitem => (
      <NewsItem key={newitem.url} newitem={newitem} />
    ))}
  </div>
);

export default News;
