import { useState } from 'react';
import './App.css';
import Heading from './components/Texts/Heading';
import Paragraph from './components/Texts/Paragraph';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
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
      <div>
        <Paragraph type="otherType">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </Paragraph>
      </div>
    </div>
  );
}

export default App;
