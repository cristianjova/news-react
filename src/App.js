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

  checkNews = async (category = 'general', search = '') => {
    if (search === '') {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=cd8df82dc9c94ffa807cebb6882907e8`;
      const response = await fetch(url);
      const news = await response.json();

      this.setState({ news: news.articles });
    } else {
      const url = `https://newsapi.org/v2/everything?q=${search}&language=es&sortBy=publishedAt&apiKey=cd8df82dc9c94ffa807cebb6882907e8`;
      const response = await fetch(url);
      const news = await response.json();

      this.setState({ news: news.articles });
    }
  };

  render() {
    return (
      <Fragment>
        <Header title='Noticias React API' />

        <div className='container white news-container'>
          <div className='row'>
            <div className='col s12'>
              <div className='hide-on-med-and-up'>
                <ul className='collapsible'>
                  <li>
                    <div className='collapsible-header'>
                      <i className='fas fa-bars' />
                      <span>MENU</span>
                    </div>
                    <div className='collapsible-body'>
                      <Browser checkNews={this.checkNews} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='hide-on-small-only'>
            <Browser checkNews={this.checkNews} />
          </div>

          <News news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
