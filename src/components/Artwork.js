import React from 'react';


const Artwork = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <h3>{artwork.title}</h3>
      <p>{artwork.artistDisplayName}</p>
      <img src={artwork.primaryImage} alt={artwork.title} />
      <p>{artwork.description}</p>
      {artwork.wikipediaUrl && (
        <p>
          <a href={artwork.wikipediaUrl} target="_blank" rel="noopener noreferrer">
            Learn more on Wikipedia
          </a>
        </p>
      )}
    </div>
  );
};

export default Artwork;
