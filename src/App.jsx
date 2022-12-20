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
import AboutBrand from './components/AboutBrand/AboutBrand';
import Boost from './components/Sections/Boost';
import Footer from './components/Sections/Footer';

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
      <AboutBrand />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
