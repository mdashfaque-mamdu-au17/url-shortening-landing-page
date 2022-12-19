import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Button from '../Button/Button';
import Illustration from '../../assets/illustration-working.svg';
const Hero = () => {
  return (
    <section className="max-w-[1400px]  mx-auto  overflow-x-hidden lg:relative">
      <div className="">
        <div className="-mr-[160px] sm:-mr-0 sm:flex sm:justify-center lg:absolute lg:-right-[300px] xl:-right-[170px] ">
          <img src={Illustration} alt="" className="" />
        </div>
        <div className="lg:max-w-[1108px] lg:mx-auto lg:flex lg:items-center lg:h-[482px]">
          <div className="text-center px-6 pt-[37px] lg:px-0 lg:pt-0 lg:text-left lg:w-[564px] lg:-order-1  lg:self-center">
            <div className="pb-4 lg:pb-[5px]">
              <Heading type="primary">More than just shorter links</Heading>
            </div>
            <div>
              <Paragraph type="primary">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </Paragraph>
            </div>
            <div className="pt-8 lg:pt-[38px]">
              <Button type="rounded" size="medium">
                Get started
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
