import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import indiaMap from '../assets/india.json'; // Make sure path is correct

const Map = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    // If importing directly doesn't work, you can fetch
    setGeoData(indiaMap);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {geoData && (
        <MapContainer
          style={{ width: '100%', height: '100%' }}
          center={[22, 78]} // Center of India
          zoom={4}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <GeoJSON data={geoData} style={{ fillColor: '#4caf50', color: '#ffffff', weight: 1 }} />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
