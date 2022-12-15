import classNames from 'classnames';
import React, { useState } from 'react';
import Link from '../Button/Link';
import Button from '../Button/Button';
import ShortyLogo from '../../assets/logo.svg';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(false);
  };

  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  }
  if (!menuOpen) {
    document.body.style.overflow = 'auto';
  }
  return (
    <nav className="">
      {/* mobile */}
      <div className="flex items-center justify-between px-6 mt-10 mb-6 lg:hidden">
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

      {menuOpen && (
        <div className="absolute z-20 top-24 right-6 w-[327px] bg-light-violet rounded-[10px] sm:w-9/12 scale-in-center lg:hidden">
          <div className="">
            <div className="pt-10 pb-[30px] flex flex-col items-center gap-[30px]">
              <Link type="mob-navigation">Features</Link>
              <Link type="mob-navigation">Pricing</Link>
              <Link type="mob-navigation">Resources</Link>
            </div>
            <div className="h-[1px] bg-dark-gray opacity-50 mx-6"></div>
            <div className="pt-8 pb-10 flex flex-col items-center gap-6">
              <Link type="mob-navigation">Login</Link>
              <Button type="rounded" size="large">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* web */}
      <div className="hidden  lg:flex items-center justify-between mt-12 mb-[78px] max-w-[1108px] mx-auto">
        <div className="flex items-center gap-[46px]">
          <div>
            <div>
              <img src={ShortyLogo} alt="" />
            </div>
          </div>
          <div className="flex gap-[29px] items-center">
            <Link type="web-navigation">Features</Link>
            <Link type="web-navigation">Pricing</Link>
            <Link type="web-navigation">Resources</Link>
          </div>
        </div>

        <div className="flex items-center gap-[37px]">
          <Link type="web-navigation">Login</Link>
          <Button type="rounded" size="small">
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
