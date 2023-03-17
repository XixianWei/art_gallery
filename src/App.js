import { useState } from 'react';
import ArtworkContainer from './containers/ArtworkContainer';

import './App.css';



const App = () => {
  const [period, setPeriod] = useState('');


  return (
    <div>
      <h1>Metropolitan Museum of Art Collection</h1>
      
      <ArtworkContainer period={period} />
    </div>
  );
};

export default App;
