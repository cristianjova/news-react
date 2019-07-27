import React, { Component, Fragment } from 'react';
import Header from './components/layouts/Header';
import News from './components/news/News';
import Browser from './components/layouts/Browser';

class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.checkNews();
  }

  checkNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=cd8df82dc9c94ffa807cebb6882907e8`;

    const response = await fetch(url);
    const news = await response.json();

    this.setState({ news: news.articles });
  };

  render() {
    return (
      <Fragment>
        <Header title='Noticias React API' />

        <div className='container white news-container'>
          <Browser checkNews={this.checkNews} />

          <News news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
