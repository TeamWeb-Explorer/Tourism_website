
// import React from 'react';
// import './RegionCards.css'; // custom CSS for styling

// const regions = [
//   { name: 'North', image: '/images/regions/north.jpg', targetId: 'north' },
//   { name: 'South', image: '/images/regions/south.jpg', targetId: 'south' },
//   { name: 'East', image: '/images/regions/east.jpg', targetId: 'east' },
//   { name: 'West', image: '/images/regions/west.jpg', targetId: 'west' },
// ];

// const RegionCards = () => {
//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <div class="region-section">
//       {/* <h2 className="region-title">Incredible India</h2> */}
//       <div className="region-header">
//   <img src="elephant.png" alt="Left" className="side-icon-left" />
//   <h2 className="region-title">Incredible India</h2>
//   <img src="elephant.png" alt="Right" className="side-icon-right" />
// </div>

//       <div className="region-card-container">
//         {regions.map((region) => (
//           <div
//             key={region.name}
//             className="region-card"
//             onClick={() => handleScroll(region.targetId)}
//           >
//             <img src={region.image} alt={region.name} className="region-image" />
//             <div className="region-overlay">
//               <span className="region-text">{region.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default RegionCards;
import React from 'react';
import './RegionCards.css';

const regions = [
  { name: 'North', image: '/images/regions/north.jpg', targetId: 'north' },
  { name: 'South', image: '/images/regions/south.jpg', targetId: 'south' },
  { name: 'East', image: '/images/regions/east.jpg', targetId: 'east' },
  { name: 'West', image: '/images/regions/west.jpg', targetId: 'west' },
];

const RegionCards = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="region-section">
      <div className="region-header">
        <img src="/elephant.png" alt="Left Elephant" className="side-icon-left" />
        <h2 className="region-title">Incredible India</h2>
        <img src="/elephant.png" alt="Right Elephant" className="side-icon-right" />
      </div>

      <div className="region-card-container">
        {regions.map((region) => (
          <div
            key={region.name}
            className="region-card"
            onClick={() => handleScroll(region.targetId)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && handleScroll(region.targetId)}
          >
            <img src={region.image} alt={region.name} className="region-image" />
            <div className="region-overlay">
              <span className="region-text">{region.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionCards;
