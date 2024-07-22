import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import 'leaflet/dist/leaflet.css';

const LocationBasedLanes = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyLanes, setNearbyLanes] = useState([]);
  const [searchRadius, setSearchRadius] = useState(50); // Default radius in km

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Fetch nearby lanes based on user location and search radius
      // This is a placeholder. In a real app, you'd call an API with the user's location and radius
      const mockNearbyLanes = [
        { id: 1, name: "Lane 1", start: [userLocation[0] + 0.1, userLocation[1] + 0.1], end: [userLocation[0] + 0.2, userLocation[1] + 0.2] },
        { id: 2, name: "Lane 2", start: [userLocation[0] - 0.1, userLocation[1] - 0.1], end: [userLocation[0] - 0.2, userLocation[1] - 0.2] },
        // Add more mock lanes as needed
      ];
      setNearbyLanes(mockNearbyLanes);
    }
  }, [userLocation, searchRadius]);

  const handleRadiusChange = (e) => {
    setSearchRadius(Number(e.target.value));
  };

  if (!userLocation) {
    return <div>Loading location...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Nearby Lanes</h2>
      <div className="mb-4">
        <Input
          type="number"
          value={searchRadius}
          onChange={handleRadiusChange}
          placeholder="Search radius (km)"
          className="w-full max-w-xs"
        />
      </div>
      <MapContainer center={userLocation} zoom={10} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {nearbyLanes.map((lane) => (
          <React.Fragment key={lane.id}>
            <Marker position={lane.start}>
              <Popup>{`${lane.name} Start`}</Popup>
            </Marker>
            <Marker position={lane.end}>
              <Popup>{`${lane.name} End`}</Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>
      <div className="mt-4">
        <Button onClick={() => console.log("View detailed routes")}>
          View Detailed Routes (Additional Fee)
        </Button>
      </div>
    </div>
  );
};

export default LocationBasedLanes;