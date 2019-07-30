import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Browser extends Component {
  state = {
    category: 'general',
    search: ''
  };

  onChange = e => {
    // Segundo parametro, callback-> función
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        // Pasar a la pagina principal
        this.props.checkNews(this.state.category, this.state.search);
      }
    );
  };

  render() {
    return (
      <div className='browser row'>
        <div className='col s12'>
          <form>
            <div className='col m6'>
              <h2 className='hide-on-small-only'>Ver Noticias por Categoría</h2>
              <h6 className='hide-on-med-and-up center-align'>
                Ver Noticias por Categoría
              </h6>
              <div className='input-field col s12'>
                <select onChange={this.onChange} name='category'>
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
              <h2 className='hide-on-small-only'>
                Buscar un tema en especifico
              </h2>
              <h6 className='hide-on-med-and-up center-align'>
                Buscar un tema en especifico
              </h6>
              <div className='input-field col s12'>
                <input
                  type='text'
                  name='search'
                  placeholder='Buscar'
                  className='validate'
                  onChange={this.onChange}
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
