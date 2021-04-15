import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="steps">
        <div className="step done" />
        <div className="step done" />
        <div className="step" />
        <div className="step" />
      </div>
    </header>
  );
};
export default Header;
