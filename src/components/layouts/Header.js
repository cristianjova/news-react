import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='navbar-fixed '>
      <nav>
        <div className='nav-wrapper light-blue darken-3'>
          <a href='#!' className='brand-logo center'>
            {title}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
