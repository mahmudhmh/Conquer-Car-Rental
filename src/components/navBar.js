import "./navBar.css";
import logo from "../assets/logoConquer.png";
import { Link } from "react-router-dom";



function NavBar() {
    return (
        <div>

            <div className="navbar">
                <div className="leftSide">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="rightSide">
                  <Link to="/" >Home</Link>
                  <Link to="/car" >Cars</Link>
                  <Link to="/feat">Features</Link>
                  <Link to="/help">Help</Link>
                  <Link to="/aboutus">About us</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>

            </div>
        </div>
    )
}

export default NavBar


