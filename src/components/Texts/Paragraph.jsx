import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Paragraph = (props) => {
  const { type } = props;
  const applyCommonStyle = () => {
    return 'text-dark-gray font-medium';
  };

  const applyStyle = () => {
    if (type === 'primary') {
      return 'text-lg leading-[30px] tracking-[0.122727px] md:text-[22px] md:leading-[36px] tracking-[0.15px]';
    }
    if (type === 'secondary') {
      return 'text-base leading-7 tracking-[0.109091px] md:text-lg md:leading-8 md:tracking-[0.122727px]';
    }
    if (type === 'otherType') {
      return 'text-[15px] leading-[26px]';
    }
  };
  if (type === 'primary' || type === 'secondary' || type === 'otherType') {
    return (
      <p className={classNames(applyCommonStyle(), applyStyle())}>
        {props.children}
      </p>
    );
  }
};

Paragraph.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'otherType']),
};

export default Paragraph;
