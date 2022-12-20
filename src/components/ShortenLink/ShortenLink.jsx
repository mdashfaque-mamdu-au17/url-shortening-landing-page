import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
const ShortenLink = ({ shortLink, originalLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  const linkCopyHandler = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortLink);
  };
  useEffect(() => {
    let id;
    if (isCopied) {
      id = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isCopied]);
  return (
    <div className="bg-white rounded-[5px] lg:pl-8 lg:pr-6 lg:py-[18px]">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:max-w-[500px]">
          <p className="text-base font-medium text-primary-black leading-9 py-[6px] px-4 lg:py-0 lg:px-0 lg:text-xl truncate">
            {originalLink}
          </p>
          <div className="h-[1px] bg-dark-gray opacity-25 lg:hidden"></div>
        </div>
        <div className="lg:flex lg:items-center lg:gap-6">
          <p className="text-base font-medium leading-9 tracking-[0.12px] text-dark-cyan pt-[6px] pb-2 px-4 lg:pt-0 lg:pb-0 lg:px-0 lg:text-xl truncate">
            {shortLink}
          </p>
          <div className="px-4 pt-2 pb-4 lg:px-0 lg:pt-0 lg:pb-0 lg:w-[103px]">
            <Button
              type="square"
              size="small"
              isCopied={isCopied}
              onClick={linkCopyHandler}
            >
              {!isCopied ? 'Copy' : 'Copied!'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortenLink;
