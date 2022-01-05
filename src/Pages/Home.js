import React from 'react'
import "../styles/Home.css";
import back from "../assets/backkkkk.jpg"

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="home" style={{backgroundImage: `url(${back})`}}>
                
                <div className="headerContainer">

                    <h1>Premium Car Rental </h1>
                    <h1>in Alexandria </h1>

                    <p>Search, Compare & Save</p>
                    
                     <Link to="/login">
                         <button>Login</button>
                     </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
