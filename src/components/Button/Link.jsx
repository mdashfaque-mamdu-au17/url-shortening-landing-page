import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = (props) => {
  const { type } = props;
  console.log(props.children);
  const clickHandler = (e) => {
    e.preventDefault();
  };
  const applyStyle = () => {
    if (type === 'web-navigation') {
      return 'text-[15px] leading-[22px] font-bold text-dark-gray transition-colors duration:500 ease-in hover:text-primary-black';
    }
    if (type === 'mob-navigation') {
      return 'text-lg leading-[27px] font-bold text-white';
    }
    if (type === 'footer-navigation') {
      return 'text-[15px] leading-[22px] tracking-[-0.234375px] font-medium text-medium-gray transition-colors duration:500 ease-in hover:text-dark-cyan';
    }
  };
  return (
    <a href="#" className={classNames(applyStyle())} onClick={clickHandler}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  type: PropTypes.oneOf([
    'web-navigation',
    'mob-navigation',
    'footer-navigation',
  ]).isRequired,
};
export default Link;
