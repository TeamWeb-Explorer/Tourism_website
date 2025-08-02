

import React from 'react';
import GallerySection from '../components/GallerySection';
import { Link } from 'react-router-dom';
import RegionCards from '../components/RegionCards';




const Gallery = () => {
  // North India
  const galleryImagesNorth = [
    '/images/north/1.jpg',
    '/images/north/2.jpg',
    '/images/north/3.jpg',
    '/images/north/4.jpg'
  ];

  const sliderImagesNorth = [
    '/images/north/3a.jpg',
    '/images/north/3b.jpg'
  ];

  const reversedGalleryImagesNorth = [
    '/images/north/5.jpg',
    '/images/north/6.jpg',
    '/images/north/7.jpg',
    '/images/north/8.jpg'
  ];

  const reversedSliderImagesNorth = [
    '/images/north/7a.jpg',
    '/images/north/7b.jpg'
  ];
  const galleryImagesSouth = [
    '/images/south/1.jpg',
    '/images/south/2.jpg',
    '/images/south/3.jpg',
    '/images/south/4.jpg'
  ];

  const sliderImagesSouth= [
    '/images/south/3a.jpg',
    '/images/south/3b.jpg'
  ];

  const reversedGalleryImagesSouth = [
    '/images/south/5.jpg',
    '/images/south/6.jpg',
    '/images/south/7.jpg',
    '/images/south/8.jpg'
  ];

  const reversedSliderImagesSouth = [
    '/images/south/7a.jpg',
    '/images/south/7b.jpg'
  ];
 const galleryImagesWest = [
    '/images/west/1.jpg',
    '/images/west/2.jpg',
    '/images/west/3.jpg',
    '/images/west/4.jpg'
  ];

  const sliderImagesWest= [
    '/images/west/3a.jpg',
    '/images/west/3b.jpg'
  ];

  const reversedGalleryImagesWest = [
    '/images/west/5.jpg',
    '/images/west/6.jpg',
    '/images/west/7.jpg',
    '/images/west/8.jpg'
  ];

  const reversedSliderImagesWest = [
    '/images/west/7a.jpg',
    '/images/west/7b.jpg'
  ];
  const galleryImagesEast = [
    '/images/east/1.jpg',
    '/images/east/2.jpg',
    '/images/east/3.jpg',
    '/images/east/4.jpg'
  ];

  const sliderImagesEast= [
    '/images/east/3a.jpg',
    '/images/east/3b.jpg'
  ];

  const reversedGalleryImagesEast = [
    '/images/east/5.jpg',
    '/images/east/6.jpg',
    '/images/east/7.jpg',
    '/images/east/8.jpg'
  ];

  const reversedSliderImagesEast = [
    '/images/east/7a.jpg',
    '/images/east/7b.jpg'
  ];
  return (
    <>
   

      <RegionCards />

      {/* North India */}
      <div id="north">
        <GallerySection
          title="Chillin' with the Himalayas!"
          description="Welcome to the land where the tea is hot, the winds are cold, and the mountains silently judge your fitness. From snowy peaks to spicy street food—North India is basically nature's way of flexing."
          images={galleryImagesNorth}
          sliderImages={sliderImagesNorth}
          reversedImages={reversedGalleryImagesNorth}
          reversedSliderImages={reversedSliderImagesNorth}
        />
      </div>

      {/* South India */}
      <div id="south">
        <GallerySection
          title="Filter Kaapi & Temple Hopping!"
          description="South India brings the vibes with coconut trees, classical art, and temples that look like they're from another dimension. Get ready for beaches, dosas, and divine architecture!"
          images={galleryImagesSouth}
          sliderImages={sliderImagesSouth}
          reversedImages={reversedGalleryImagesSouth}
          reversedSliderImages={reversedSliderImagesSouth}
        />
      </div>

      {/* East India */}
      <div id="east">
        <GallerySection
          title="Where Rhinos Roam and Rasgullas Reign!"
          description="East India surprises you with serene monasteries, tribal culture, and wildlife straight out of NatGeo. Oh, and dessert is basically a spiritual experience here."
          images={galleryImagesWest}
          sliderImages={sliderImagesWest}
          reversedImages={reversedGalleryImagesWest}
          reversedSliderImages={reversedSliderImagesWest}
        />
      </div>

      {/* West India */}
      <div id="west">
        <GallerySection
          title="Dhol Beats & Desert Feats!"
          description="From Bollywood dreams to Rajasthani dunes, West India is all about drama, colors, and forts that whisper history. Brace yourself for spicy food and even spicier stories!"
          images={galleryImagesEast}
          sliderImages={sliderImagesEast}
          reversedImages={reversedGalleryImagesEast}
          reversedSliderImages={reversedSliderImagesEast}
        />
      </div>
    </>
  );
};

export default Gallery;



