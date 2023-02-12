import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    // Heatmap verilerini buraya ekleyin
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;