import classNames from 'classnames';
import React, { useState } from 'react';
import ShortyLogo from '../../assets/logo.svg';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="sticky top-10">
      {/* mobile */}
      <div className="flex items-center justify-between px-6">
        <div>
          <img src={ShortyLogo} alt="" />
        </div>
        <div>
          <div
            className={classNames('menu-btn', menuOpen && 'open')}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
