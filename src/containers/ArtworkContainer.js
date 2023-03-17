import { useState } from 'react';

import ArtworkList from '../components/ArtworkList';

const ArtworkContainer = () => {
  const [period, setPeriod] = useState('Renaissance');
  const [artworks, setArtworks] = useState([]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div>
      <h1>Artwork Collection</h1>
      <select value={period} onChange={handlePeriodChange}>
        <option value="Renaissance">Renaissance</option>
        <option value="Baroque">Baroque</option>
        <option value="Impressionism">Impressionism</option>
        <option value="Modernism">Modernism</option>
      </select>
      <ArtworkList period={period} />
     
    </div>
  );
};

export default ArtworkContainer;
