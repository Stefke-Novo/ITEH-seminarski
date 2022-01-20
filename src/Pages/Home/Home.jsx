import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom"
function Home() {
    return (
        <div id='homePageWrap'>
            <div id='homePage'>
                <h2>Website in meintenance...</h2>
                <div id='mainText'>
                    <h1>Welcome to <br />
                        BestReads Revievs
                    </h1>
                    <p id='homep'>You are now logged in as admin. You can go to Admin Dashboard to view <br/>
                    and manage titles and genres
                    </p>
                        <button id='homeBtn1'>
                            <Link to="/admin/dashboard">
                                Dashboard
                            </Link>
                        </button>
                </div>
                <div id='footer'>
                    <div>
                        <div id='circle'></div>
                        <p id='copyright'>&copy; BestReads, Beograd 2022</p>
                    </div>
                    <div>
                        <h3 className='footerTitle'>Genres</h3>
                        <ul>
                            <li>Sci-Fi</li>
                            <li>Fantacy</li>
                            <li>Rommance</li>
                            <li>Educational</li>
                            <li>Comics</li>
                            <li>Historical</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='footerTitle'>Authors</h3>
                        <ul>
                            <li>Agata Christie</li>
                            <li>Neli Gaiman</li>
                            <li>Jane Austen</li>
                            <li>Charles Dickens</li>
                            <li>Dan Brown</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='footerTitle'>About</h3>
                        <ul>
                            <li>Meet Our Crew</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
