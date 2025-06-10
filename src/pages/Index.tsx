
import React from 'react';
import { Hero } from '../components/Hero';
import { Vision } from '../components/Vision';
import { Project } from '../components/Project';
import { Impact } from '../components/Impact';
import { BusinessModel } from '../components/BusinessModel';
import { HowToJoin } from '../components/HowToJoin';
import { Contact } from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Vision />
      <Project />
      <Impact />
      <BusinessModel />
      <HowToJoin />
      <Contact />
    </div>
  );
};

export default Index;
