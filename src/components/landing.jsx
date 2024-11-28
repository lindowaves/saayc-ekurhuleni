import React from "react";
import './landing.css'

function Landing () {
    return(
        <div>
            <section className="banner" id="banner1">
                <div className="banner-content">
                <h1>Welcome to SAAYC ER Platform</h1>
                <p>Explore amazing Programmes with us. Join today!</p>
                <a href="register.html" class="button">Sign In</a>
                </div>
            </section>

        <section className="banner" id="banner2">
            <div className="banner-content">
            <h1>Boost Your Skills</h1>
            <p>Learn, grow, and network with our vast resources.</p>
            <a href="learning.html" class="button">Learn More</a>
            </div>
        </section>

        <section className="banner" id="banner3">
            <div className="banner-content">
            <h1>Start Networking</h1>
            <p>Connect with like-minded individuals.</p>
            <a href="networking.html" class="button">Start Networking</a>
            </div>
        </section>

        <section className="banner" id="banner4">
            <div className="banner-content">
            <h1>Business Resources</h1>
            <p>Utilize our tools to grow your business.</p>
            <a href="business.html" class="button">Explore Tools</a>
            </div>
        </section>
        </div>
    )
}

export default Landing;