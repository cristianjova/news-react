import React, { Component } from 'react';

class Browser extends Component {
  state = {};

  render() {
    return (
      <div className='browser row'>
        <div className='col s12 m8 offset-2'>
          <form>
            <h2>Ver Noticias por Categoría</h2>

            <div className='input-field col s12 m8'>
              <select>
                <option value='general'>General</option>
                <option value='technology'>Tecnología</option>
                <option value='sports'>Deportes</option>
                <option value='science'>Ciencia</option>
                <option value='entertainment'>Entretenimiento</option>
                <option value='business'>Negocios</option>
                <option value='health'>Salud</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Browser;
