import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Heading = (props) => {
  const { type } = props;
  const applyCommonStyle = () => {
    return 'text-primary-black font-bold';
  };

  const applyStyle = () => {
    if (type === 'primary') {
      return 'text-[42px] leading-[48px] tracking-[-1.05px] md:text-[80px] md:leading-[90px] md:tracking-[-2px]';
    }
    if (type === 'secondary') {
      return 'text-[28px] leading-[48px] tracking-[-0.7px] md:text-[40px] md:tracking-[-1px]';
    }

    if (type === 'smaller') {
      return 'text-[22px] leading-[33px]';
    }
  };

  if (type === 'primary') {
    return (
      <h1
        className={classNames(
          applyCommonStyle(),
          applyStyle(),
          props.className
        )}
      >
        {props.children}
      </h1>
    );
  }

  if (type === 'secondary') {
    return (
      <h3
        className={classNames(
          applyCommonStyle(),
          applyStyle(),
          props.className
        )}
      >
        {props.children}
      </h3>
    );
  }

  if (type === 'smaller') {
    return (
      <h4
        className={classNames(
          applyCommonStyle(),
          applyStyle(),
          props.className
        )}
      >
        {props.children}
      </h4>
    );
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'smaller']),
};

export default Heading;
