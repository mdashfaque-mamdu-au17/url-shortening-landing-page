import React from 'react';
import Heading from '../Texts/Heading';
import Paragraph from '../Texts/Paragraph';
import Card from '../Card/Card';
import IconBrandRecognition from '../../assets/icon-brand-recognition.svg';
import IconDetailedRecord from '../../assets/icon-detailed-records.svg';
import IconFullyCustomizable from '../../assets/icon-fully-customizable.svg';

const AboutBrand = () => {
  return (
    <section className="pt-20 bg-cream-white lg:pt-[120px]">
      <div>
        <div className="px-6 text-center sm:max-w-[540px] sm:mx-auto sm:px-0">
          <div className="pb-4 lg:pb-[18px]">
            <Heading type="secondary">Advanced Statistics</Heading>
          </div>
          <div>
            <Paragraph type="secondary">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </Paragraph>
          </div>
        </div>

        <div className="pt-[92px] bg-cream-white  xl:pt-[100px]  px-6 max-w-[1110px] mx-auto  xl:px-0">
          <div className="flex flex-col  items-center xl:flex-row xl:justify-between xl:items-start">
            <div className="w-[327px] sm:w-[400px] xl:w-[350px] xl:h-[267px] ">
              <Card
                title="Brand Recognition"
                information=" Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content."
                picture={IconBrandRecognition}
              />
            </div>
            <div className="w-2 h-12 bg-dark-cyan xl:h-2 xl:w-[30px] xl:mt-[152px]"></div>
            <div className="pt-10 w-[327px] sm:w-[400px] xl:w-[350px] xl:h-[267px]  xl:pt-11">
              <Card
                title="Detailed Records"
                information="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                picture={IconDetailedRecord}
              />
            </div>
            <div className="w-2 h-12 bg-dark-cyan xl:h-2 xl:w-[30px] xl:mt-[152px]"></div>
            <div className="pt-10 w-[327px] sm:w-[400px] xl:w-[350px] xl:h-[267px] xl:pt-[88px]">
              <Card
                title="Fully Customizable"
                information="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                picture={IconFullyCustomizable}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 xl:pt-[208px]"></div>
    </section>
  );
};

export default AboutBrand;
