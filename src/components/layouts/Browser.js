import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Browser extends Component {
  state = {
    category: 'general'
  };

  onChange = e => {
    // Segundo parametro, callback-> función
    this.setState(
      {
        category: e.target.value
      },
      () => {
        // Pasar a la pagina principal
        this.props.checkNews(this.state.category);
      }
    );
  };

  render() {
    return (
      <div className='browser row'>
        <div className='col s12'>
          <form>
            <div className='col m6'>
              <h2>Ver Noticias por Categoría</h2>

              <div className='input-field col s12'>
                <select onChange={this.onChange}>
                  <option value='general'>General</option>
                  <option value='technology'>Tecnología</option>
                  <option value='sports'>Deportes</option>
                  <option value='science'>Ciencia</option>
                  <option value='entertainment'>Entretenimiento</option>
                  <option value='business'>Negocios</option>
                  <option value='health'>Salud</option>
                </select>
              </div>
            </div>

            <div className='col m6'>
              <h2>Buscar un tema en especifico</h2>
              <div className='input-field col s12'>
                <input
                  type='text'
                  name='search'
                  placeholder='Buscar un tema especifico'
                  className='validate'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Browser.propTypes = {
  checkNews: PropTypes.func.isRequired
};

export default Browser;
