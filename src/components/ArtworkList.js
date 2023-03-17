import { useState, useEffect } from 'react';
import Artwork from './Artwork';

const ArtworkList = ({ period }) => {
  const [artworks, setArtworks] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('title');

  const handleSortCriteriaChange = (event) => {
    setSortCriteria(event.target.value);
  };

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${period}`);
      const data = await response.json();
      const objectIDs = data.objectIDs.slice(0, 20);
      const artworksData = await Promise.all(
        objectIDs.map(async (id) => {
          const artworkResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
          const artworkData = await artworkResponse.json();
          return artworkData;
        })
      );
      setArtworks(artworksData);
    };

    fetchArtworks();
  }, [period]);

  return (
    <div>
      <h2>{period} Artworks</h2>
      {artworks.map((artwork) => (
        <Artwork key={artwork.objectID} artwork={artwork} />
      ))}
    </div>
  );
};

export default ArtworkList;
