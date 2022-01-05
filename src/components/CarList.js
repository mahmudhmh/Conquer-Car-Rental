import CarView from "./CarView";
import '../styles/FeaturesList.css'
import React,{useState} from "react";



function CarList(props){
    
   
        
        return (
          
        <ul className="list">
            {props.car.map((car) => (
            <CarView key={car.id} 
            id={car.id} 
            image={car.image}
            title={car.title}
            description = {car.description}/>) )}  
        </ul>
    );
}
export default CarList;