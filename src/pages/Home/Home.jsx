import React from 'react';
import logo from "../../assets/logo-black.png";
import './Home.css';


function Home() {
    return (
        <div className="inner-container-home">
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <img src={logo} alt="Company logo"/>
            <h2>*En in billboards. Die zijn niet te missen namelijk.</h2>
        </div>
    );
}

export default Home;