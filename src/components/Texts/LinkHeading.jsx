import React from 'react';
import PropTypes from 'prop-types';

const LinkHeading = (props) => {
  return (
    <h6 className="text-base text-white font-bold leading-6 -tracking-[0.25px]">
      {props.children}
    </h6>
  );
};

export default LinkHeading;
