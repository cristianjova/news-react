import React from 'react';

const Header = ({ title }) => {
  return (
    <nav className='nav-wrapper light-blue darken-3'>
      <button href='#' className='brand-logo btn-flat center'>
        {title}
      </button>
    </nav>
  );
};

export default Header;
