import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-bg">

            <h1 className="home-title">
                <span className="v-orchid">V</span>irtual <span className="v-skyblue">V</span>ortex
            </h1>

            <button className="home-btn">Get In</button>

            <div className="socials">
                <a href="https://www.instagram.com/" target="_blank">
                    <img className="social" src="/instagram-logo.svg" alt="Logo Instagram" />
                </a>
           
                <a href="https://www.facebook.com/" target="_blank">
                    <img className="social" src="/facebook-logo.svg" alt="Logo Facebook" />
                </a>

                <a href="https://www.linkedin.com/feed/" target="_blank">
                    <img className="social" src="/linkedin-logo.svg" alt="Logo LinkedIn" />
                </a>

                <a href="https://www.youtube.com/" target="_blank">
                    <img className="social" src="youtube-logo.svg" alt="Logo youtube" />
                </a>
                
            </div>
        </div>
    )
}

export default Home;