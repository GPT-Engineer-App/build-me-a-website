import React from 'react';
import { Button } from "@/components/ui/button";
import { Truck, Globe, BarChart, Users, Shield, Zap } from 'lucide-react';

const Features = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground p-4">
      <h1 className="text-3xl font-bold text-primary mb-8">HaulAI Solutions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-secondary p-6 rounded-lg">
          <Truck className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-4">Full Truckload</h2>
          <p className="mb-4">Efficient and reliable full truckload services across Europe, optimized for your supply chain needs.</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <Globe className="h-12 w-12 mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-4">Logistics Platform</h2>
          <p className="mb-4">Our digital platform connects shippers and carriers, streamlining operations and increasing transparency.</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explore Platform</Button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6">Why Choose HaulAI?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <BarChart className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
          <p className="text-muted-foreground">Leverage advanced analytics to optimize your supply chain and make informed decisions.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Users className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Vast Carrier Network</h3>
          <p className="text-muted-foreground">Access our extensive network of vetted carriers across Europe for reliable transportation.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Shield className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Sustainability Focus</h3>
          <p className="text-muted-foreground">Reduce your carbon footprint with our eco-friendly logistics solutions and practices.</p>
        </div>
      </div>

      <div className="bg-secondary p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Custom Solutions</h2>
        <p className="mb-4">We understand that every business has unique logistics needs. Our team of experts is ready to create tailored solutions that address your specific challenges and goals.</p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contact Us for Custom Solutions</Button>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Ready to Revolutionize Your Logistics?</h2>
        <p className="mb-6">Join the HaulAI network and experience the future of freight forwarding today.</p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started Now</Button>
      </div>
    </div>
  );
};

export default Features;