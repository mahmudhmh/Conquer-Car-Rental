import React from 'react'
import FeaturesList from '../components/FeaturesList';
import first from '../assets/24-hours.png';
import secound from '../assets/help.png';
import third from '../assets/lighting.png';
import fourth from '../assets/check.png';
import Layout from '../components/Layout/Layout';
import '../styles/Features.css'

const Features_Data = [
  {
    id: '1',
    image: first,
    description:'24-hour car delivery',
  },
  {
    id: '2',
    image:secound,
    description:'24/7 technical support',
  },
  {
    id: '3',
    image:third,
    description:'Models premium packages',
  },
  {
    id: '4',
    image: fourth,
    description:'Absolute confidentiality',
  }
];

function Features() {
  return (
    <section className='section'>
      <h6>TAKING CARE OF EVERY CLIENT</h6>
      <h1>Key Features</h1>
      <h3>We are all about our client's comfort and safety. That's <br/>
        why we provide the best service you can imagine.
      </h3>
        <Layout>
        <FeaturesList features={Features_Data}/>
        </Layout>
    </section>
  );
}

export default Features;