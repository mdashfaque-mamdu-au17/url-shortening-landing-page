import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Link from './components/Button/Link';
import Heading from './components/Texts/Heading';
import Paragraph from './components/Texts/Paragraph';
import {
  Twitter,
  Facebook,
  Pinterest,
} from './components/SocialIcons/SocialIcon';
import Form from './components/Sections/Form';
import Card from './components/Card/Card';
import Navbar from './components/Sections/Navbar';
import Hero from './components/Sections/Hero';
import ShortenUrl from './components/Sections/ShortenUrl';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <div className="sticky top-10"> */}
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <ShortenUrl />

      <div className="mb-10">
        <Heading type="primary">More than just shorter links</Heading>
      </div>
      <div className="mb-10">
        <Heading type="secondary">Advanced Statistics</Heading>
      </div>
      <div className="mb-10">
        <Heading type="smaller">Brand Recognition</Heading>
      </div>
      <div className="mb-10">
        <Paragraph type="primary">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Paragraph>
      </div>
      <div className="mb-10">
        <Paragraph type="secondary">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Paragraph>
      </div>
      <div className="mb-10">
        <Paragraph type="otherType">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </Paragraph>
      </div>
      <div className="text-center mb-10">
        <Button type="rounded" size="medium">
          Get started
        </Button>
      </div>
      <div className="text-center mb-10">
        <Button type="rounded" size="small">
          Sign up
        </Button>
      </div>
      <div className="mb-10 text-center">
        <Button type="rounded" size="large">
          Sign up
        </Button>
      </div>
      <div className="text-center mb-10">
        <Button type="square" size="large">
          Shorten it
        </Button>
      </div>
      <div className="text-center mb-10">
        <Button type="square" size="small" isCopied={true}>
          Shorten it
        </Button>
      </div>

      <div className="text-center mb-10">
        <div className="mb-10">
          <Link type="web-navigation">Pricing</Link>
        </div>
        <div className="h-10 bg-violet-900 mb-10">
          <Link type="mob-navigation">Features</Link>
        </div>

        <div className="h-10 bg-primary-black">
          <div className="mb-10">
            <Link type="footer-navigation">About</Link>
          </div>
          <div className="h-10 bg-primary-black">
            <Link type="footer-navigation">
              <Twitter />
            </Link>

            <Link type="footer-navigation">
              <Pinterest />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 bg-black py-20 text-center px-4">
        <Form />
      </div>

      <div className="mt-20 mb-20 bg-cream-white py-10 pl-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
