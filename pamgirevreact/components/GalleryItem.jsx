import React from 'react';

function GalleryItem({ source, figcaption }) {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-full block aspect-square object-cover transition-transform">
          <img src={source} alt={figcaption} />
          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 flex justify-center items-center">
            <h3 className="text-white text-center text-xl">{figcaption}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
