import "../styles/Help.css";
import React from 'react'
import { Link } from 'react-router-dom';


function Help() {
    return (
        <div className="Help-section">
        <div className="inner-help">
        <h1>
            Help
            <div className="border-help"></div>
        </h1>

        <p className="text-help">
            We Made it easy for every one to use our website and rent a premium car, we also have a Mobile Application
            to make the reservation more easier.
        </p>
        <Link to="/login">
        <button className="Btn-help">Join Us</button>
        </Link>
        </div>
    </div>
  );
}

export default Help
