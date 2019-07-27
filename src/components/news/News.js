import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const News = ({ news }) => (
  <div className='row'>
    {news.map(newsitem => (
      <NewsItem key={newsitem.url} newsitem={newsitem} />
    ))}
  </div>
);

News.propTypes = {
  news: PropTypes.array.isRequired
};

export default News;
