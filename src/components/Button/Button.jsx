import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const { type, size, isCopied, btnType } = props;

  const applyCommonStyle = () => {
    return 'bg-dark-cyan text-white font-bold transition-colors duration-500 ease-in hover:bg-dark-cyan-hover';
  };

  const applyBtnType = () => {
    if (type === 'rounded') {
      return 'rounded-[28px]';
    }

    if (type === 'square') {
      return '';
    }
  };

  const applySize = () => {
    if (size === 'medium' && type === 'rounded') {
      return 'w-[197px] h-14 text-xl leading-[30px]';
    }
    if (size === 'small' && type === 'rounded') {
      return 'w-[105px] h-10 text-[15px] leading-[22px]';
    }
    if (size === 'large' && type === 'rounded') {
      return 'w-[279px] h-12 text-lg leading-[27px]';
    }

    if (size === 'large' && type === 'square') {
      return 'w-full h-12 rounded-[5px] text-lg leading-[27px] md:text-xl md:leading-[30px] md:h-16 md:rounded-[10px]';
    }

    if (size === 'small' && type === 'square') {
      return 'w-full h-10 text-base leading-6';
    }
  };

  return (
    <button
      className={classNames(
        applyCommonStyle(),
        applyBtnType(),
        applySize(),
        isCopied && 'bg-light-violet hover:bg-light-violet'
      )}
      type={btnType}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['rounded', 'square']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
export default Button;
