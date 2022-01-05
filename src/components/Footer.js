import "./Footer.css";
import InstaIcon from "@material-ui/icons/Instagram"
import FaceIcon from "@material-ui/icons/Facebook"
import TwitIcon from "@material-ui/icons/Twitter"

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="socialMedia">
                       <a href="https://instgram.com/" > <InstaIcon/> </a>
                       <a href="https://www.facebook.com/" > <FaceIcon/> </a>
                        <a href="https://www.twitter.com/"> <TwitIcon/></a> 
                </div>
            <p>&copy; 2021 Car Rental</p>
            </div>
        </div>
    )
}
export default Footer

