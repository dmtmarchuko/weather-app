import React from 'react';
import {LeftBar} from '../components/leftBar';
import {RightBar} from '../components/rightBar';

export default  function Home() {
  
  return (
    <div className="Main__Window">
      <LeftBar />
      <RightBar />
    </div>
  );
}
