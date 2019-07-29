import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className='navbar-fixed '>
      <nav>
        <div className='nav-wrapper grey darken-3'>
          <a href='#!' className='brand-logo center'>
            {title}
          </a>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
