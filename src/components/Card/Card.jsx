import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import IconBrandRecognition from '../../assets/icon-brand-recognition.svg';
const Card = (props) => {
  const { title, information, picture } = props;
  return (
    <div className="bg-white rounded-[5px] px-8  text-center lg:text-left w-full relative">
      <div className="pt-[77px] pb-3">
        <Heading type="smaller">{title}</Heading>
      </div>
      <div className="pb-[41px]">
        <Paragraph type="otherType">{information}</Paragraph>
      </div>

      <div className="h-[88px] w-[88px] bg-light-violet rounded-full absolute flex items-center justify-center -top-10 left-1/2 transform -translate-x-1/2 lg:left-8 lg:translate-x-0">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default Card;
