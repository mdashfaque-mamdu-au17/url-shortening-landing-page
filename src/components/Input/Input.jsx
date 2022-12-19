import classNames from 'classnames';
import React from 'react';

const Input = (props) => {
  const { id, type, errorMessage, error, label, name, value, onChange } = props;
  return (
    <div>
      <label htmlFor={id} hidden>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        className={classNames(
          'w-full h-12 md:h-16 pl-4 text-primary-black text-base lg:text-xl font-medium leading-9 tracking-[0.12px] lg:pl-8 rounded-[5px] md:rounded-[10px] focus:outline-none focus:border-dark-cyan focus:ring-dark-cyan focus:ring-[3px] placeholder:text-primary-black placeholder:text-opacity-50',
          error &&
            'ring-[3px] ring-primary-red placeholder:text-primary-red focus:ring-primary-red'
        )}
      />
      {error && (
        <div className="text-red-900 text-left italic text-sm md:text-base mt-1 md:mt-2 leading-[18px] md:absolute">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
