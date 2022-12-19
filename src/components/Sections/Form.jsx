import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
const Form = () => {
  const [inputLink, setInputLink] = useState('');
  const [inputLinkError, setInputLinkError] = useState(false);

  const inputChangeHandler = (event) => {
    setInputLink(event.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputLink) {
      setInputLinkError(true);
      return;
    }
    setInputLinkError(false);
    console.log(inputLink);
    setInputLink('');
  };

  return (
    <div className="z-20 w-full">
      <form
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-4 w-full  md:flex-row md:justify-between md:gap-6"
      >
        <div className="w-full">
          <Input
            id="link"
            name="link"
            type="text"
            label="Shorten a link here..."
            error={inputLinkError}
            errorMessage={inputLinkError ? 'Please add a link' : ''}
            value={inputLink}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="w-full md:w-[188px]">
          <Button type="square" size="large" btnType="submit">
            Shorten it
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
