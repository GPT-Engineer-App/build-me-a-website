import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import LocationBasedLanes from '@/components/LocationBasedLanes';

const Features = () => {
  const [showDetailedRoutes, setShowDetailedRoutes] = useState(false);
  const [showShipperIntro, setShowShipperIntro] = useState(false);

  const handleViewDetailedRoutes = () => {
    // Here you would typically handle payment logic
    console.log("Processing payment for detailed routes");
    setShowDetailedRoutes(true);
  };

  const handleRequestShipperIntro = () => {
    // Here you would typically handle payment logic
    console.log("Processing payment for shipper introduction");
    setShowShipperIntro(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#0D1742] text-white p-4">
      <h1 className="text-3xl font-bold text-[#21edc6] mb-8">Zeus Connect AI Features</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Location-based Lanes</h2>
        <LocationBasedLanes />
      </div>

      {!showDetailedRoutes && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Detailed Routes</h2>
          <Button onClick={handleViewDetailedRoutes} className="bg-[#21edc6] text-[#0D1742]">
            View Detailed Routes (Additional Fee)
          </Button>
        </div>
      )}

      {showDetailedRoutes && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Detailed Routes</h2>
          {/* Add detailed routes information here */}
          <p>Detailed route information would be displayed here.</p>
        </div>
      )}

      {!showShipperIntro && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipper Introduction</h2>
          <Button onClick={handleRequestShipperIntro} className="bg-[#21edc6] text-[#0D1742]">
            Request Shipper Introduction (Final Fee)
          </Button>
        </div>
      )}

      {showShipperIntro && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Shipper Introduction</h2>
          {/* Add shipper introduction information here */}
          <p>Shipper introduction information would be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default Features;