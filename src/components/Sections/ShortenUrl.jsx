import React from 'react';
import Form from './Form';
import BgShortenMobile from '../../assets/bg-shorten-mobile.svg';
import BgShortenDesktop from '../../assets/bg-shorten-desktop.svg';
import ShortenLink from '../ShortenLink/ShortenLink';

const ShortenUrl = () => {
  return (
    <section className="">
      <div
        className="pt-[168px] lg:pt-[152px] relative w-full 
      "
      >
        <div>
          <div className="absolute  top-[88px] md:top-[68px]  left-1/2 transform -translate-x-1/2  w-full max-w-[1110px]">
            <div className="bg-light-violet rounded-[10px] py-6 md:py-[52px] px-6 md:px-[64px] flex items-center justify-center relative lg:mx-0 mx-6 xl:mx-0">
              <div className="absolute top-0 right-0 z-0 rounded-[10px] md:hidden">
                <img src={BgShortenMobile} alt="" className="rounded-[10px]" />
              </div>
              <div className="hidden md:block absolute bottom-0 right-0 z-0 rounded-[10px]">
                <img src={BgShortenDesktop} alt="" className="rounded-[10px]" />
              </div>
              <Form />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cream-white">
        <div className="pt-[126px] px-6 md:pt-[108px] bg-cream-white w-full flex flex-col gap-6 lg:gap-4 max-w-[1110px] mx-auto xl:px-0">
          <ShortenLink />
          <ShortenLink />
          <ShortenLink />
        </div>
      </div>
    </section>
  );
};

export default ShortenUrl;
