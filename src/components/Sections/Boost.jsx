import React from 'react';
import Heading from '../Texts/Heading';
import Button from '../Button/Button';
import BgBoostMobile from '../../assets/bg-boost-mobile.svg';
import BgBoostDesktop from '../../assets/bg-boost-desktop.svg';
const Boost = () => {
  return (
    <section className="bg-light-violet flex items-center justify-center relative">
      <div className="py-[90px] text-center md:py-[57px] z-20">
        <div>
          <Heading type="secondary" className="!text-white">
            Advanced Statistics
          </Heading>
        </div>
        <div className="pt-4 md:pt-8">
          <Button type="rounded" size="medium">
            Get started
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-10 md:hidden">
        <img src={BgBoostMobile} alt="" />
      </div>
      <div className="hidden md:block md:absolute z-10 md:h-[250px] md:bottom-0 md:right-0">
        <img src={BgBoostDesktop} alt="" className="h-full" />
      </div>
    </section>
  );
};

export default Boost;
