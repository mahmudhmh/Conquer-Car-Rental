import React from 'react'
import CarList from '../components/CarList';
import first from '../assets/LS.jpg';
import secound from '../assets/rs.jpg';
import third from '../assets/lambo.jpg';
import fourth from '../assets/bmw.jpg';
import fifth from '../assets/porche.jpg';
import sixth from '../assets/koe.jpg';



const cars_data = [
    {
        id:'LS',
        title :'Lexus LS',
        image:first,
        description:'full-size luxury sedan',
    },
    {
        id:'Roadster',
        title :'Tesla Roadster',
        image:secound,
        description:'battery electric vehicle (BEV) sports car',
    },
    {
        id:'Aventador',
        title :'Lamborghini Aventador S',
        image:third,
        description:'The Aventador S is an update to the then outgoing Aventador',
    },
    {
        id:'BMW',
        title :'BMW M5',
        image:fourth,
        description:'high performance variant of the BMW 5 Series marketed under the BMW M sub-brand.',
    },
    {
        id:'porche',
        title :'Porsche 911',
        image:fifth,
        description:'is a two-door 2+2 high performance rear-engined sports car',
    },
    {
        id:'koe',
        title :'Koenigsegg Gemera 6',
        image:sixth,
        description:'is a limited production four-seat plug-in hybrid grand tourer to be manufactured by the Swedish automobile manufacturer Koenigsegg. ',
    },
];

function Car() {
    return (
        
         <section className='carssection'>
            <h6 className='carspageh6'>ONLY THE BEST CARS</h6>
         <h1 className='carspage'>Our Vehicles Fleet</h1>
         <h3 className='carspageh3'>We provide our customers with the most incredible driving emotions. <br/>
        That's why we have only world-class cars in our fleet.
         </h3>
          
         <CarList car ={cars_data}/>
   
       </section>
    );
}

export default Car;
