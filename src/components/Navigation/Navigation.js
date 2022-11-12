import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <button className='navigation__button'>Обо мне</button>
      <button className='navigation__button'>Портфолио</button>
      <button className='navigation__button'>Блог</button>
    </nav>
  );
}

export default Navigation;
