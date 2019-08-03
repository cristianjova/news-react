import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ newsitem }) => {
  // Extraer los datos
  const { urlToImage, url, title, description, source } = newsitem;

  // Load image if available
  const image = urlToImage ? (
    <div className='card-image'>
      <img
        src={urlToImage}
        alt={title}
        style={{ maxWidth: '200%', height: '300px' }}
      />
      <span
        className='card-title white-text'
        style={{ textShadow: '3px 1px 4px black' }}
      >
        {source.name}
      </span>
    </div>
  ) : null;

  const cardContentLarge = description ? (
    <div className='card-content'>
      <h5 className='text-content-title'>{title}</h5>
      <div className='text-content'>
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div className='card-content'>
      <h5>{title}</h5>
    </div>
  );

  return (
    <Fragment>
      <div className='col m12 hide-on-small-only hide-on-large-only'>
        <div className='card horizontal hoverable mb-2'>
          <div className='card-image'>{image}</div>
          <div className='card-stacked'>
            <div className='card-content'>
              <h5>{title}</h5>
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
      </div>
      <div className='col s12 hide-on-med-and-up'>
        <div className='card'>
          {image}

          <div className='card-content'>
            <h5>{title}</h5>
            <div className='text-content'>
              <p>{description}</p>
            </div>
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

      <div className='col l6 hide-on-med-and-down'>
        <div className='card hoverable large'>
          {image}
          {cardContentLarge}
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
    </Fragment>
  );
};

NewsItem.propTypes = {
  newsitem: PropTypes.object.isRequired
};

export default NewsItem;
