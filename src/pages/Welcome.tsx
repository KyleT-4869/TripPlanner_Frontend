import '../styles.css';
import { Link } from 'react-router-dom'
import Button from'../components/Button.tsx'

function Welcome() {
    return(
        <>
            <div className="WelcomePage">
                <div className="WelcomeMessageContainer">
                    <h2 className="WelcomeMessage">Welcome to</h2>
                    <h1 className="WebsiteName">TripPlanner</h1>
                </div>

                <div className="WPLinkContainer">
                    <Link to="/plan" className="GetStartedLink">Get Started</Link>
                    <Link to="/sigin" className="SigninLink">Signin</Link>
                    <Link to="/map" className="MapLink">Map</Link>
                </div>
            </div>
            
        </>
    )
}

export default Welcome;