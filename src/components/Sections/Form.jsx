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
    <div>
      <form onSubmit={formSubmitHandler}>
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
        <div>
          <Button type="square" size="large" btnType="submit">
            Shorten it
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
