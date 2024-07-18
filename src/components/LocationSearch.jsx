import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import 'leaflet/dist/leaflet.css';

const LocationSearch = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [contracts, setContracts] = useState([
    { id: 1, title: 'Contract 1', location: [51.505, -0.09] },
    { id: 2, title: 'Contract 2', location: [51.51, -0.1] },
    { id: 3, title: 'Contract 3', location: [51.515, -0.095] },
  ]);

  const handleSearch = () => {
    // In a real application, this would call an API to get contracts near the searchLocation
    console.log('Searching for contracts near:', searchLocation);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Find Contracts Nearby</h2>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Enter location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="mr-2"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {contracts.map((contract) => (
          <Marker key={contract.id} position={contract.location}>
            <Popup>{contract.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationSearch;