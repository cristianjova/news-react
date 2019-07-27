import React from 'react';

const NewsItem = ({ newsitem }) => {
  // Extraer los datos
  const { urlToImage, url, title, description, source } = newsitem;

  // Load image if available
  const image = urlToImage ? (
    <div className='card-image'>
      <img src={urlToImage} alt={title} />
      <span
        className='card-title white-text'
        style={{ textShadow: '3px 1px 4px black' }}
      >
        {source.name}
      </span>
    </div>
  ) : null;

  return (
    <div className='col s12 m6 l4'>
      <div className='card'>
        {image}

        <div className='card-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className='card-action'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='waves-effect waves-light btn'
          >
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
