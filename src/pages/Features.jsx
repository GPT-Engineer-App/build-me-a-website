import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Features = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch major European cities data
    // This is a placeholder. In a real application, you'd fetch this data from an API
    setCities([
      { name: 'London', position: [51.505, -0.09], population: 8900000 },
      { name: 'Paris', position: [48.8566, 2.3522], population: 2140000 },
      { name: 'Berlin', position: [52.5200, 13.4050], population: 3645000 },
      { name: 'Madrid', position: [40.4168, -3.7038], population: 3223000 },
      { name: 'Rome', position: [41.9028, 12.4964], population: 2873000 },
    ]);
  }, []);

  // Custom icon for markers
  const customIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="w-full h-screen bg-[#0D1742]">
      <h1 className="text-3xl font-bold text-[#21edc6] p-4">Zeus Connect AI Features</h1>
      <MapContainer 
        center={[50.5, 10]} 
        zoom={4} 
        style={{ height: "calc(100vh - 100px)", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker key={index} position={city.position} icon={customIcon}>
            <Popup>
              <div>
                <h2 className="text-lg font-bold">{city.name}</h2>
                <p>Population: {city.population.toLocaleString()}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Features;