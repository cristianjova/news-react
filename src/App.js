import React, { Component } from 'react';

class App extends Component {
  state = {
    notices: []
  };

  componentDidMount() {
    this.checkNews();
  }

  checkNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=cd8df82dc9c94ffa807cebb6882907e8`;

    const response = await fetch(url);
    const notices = await response.json();

    this.setState({ notices: notices.articles });
  };

  render() {
    return <h1>Noticias React API</h1>;
  }
}

export default App;
