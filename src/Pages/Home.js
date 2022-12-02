import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="homepage-wrapper">
            <img src="https://i.pinimg.com/564x/f9/1a/a3/f91aa37eae15b0b16e6f0a5fb40f7732.jpg"
                alt="" />
            <div className="homepage-buttons">
                <a href='./Men' className="btn">
                    Shoes
                </a>
                <a href='./Women' className="btn">
                    Watches
                </a>
                <a href='./about' className="btn">
                    About
                </a>
            </div>
            <a className="textn">
                PRAKTIKUM PEMROGRAMAN PERANGKAT BERGERAK
                </a>
                <a className="textn">
                TEKNIK KOMPUTER 2020
                </a>
                <a className="textn">
                UNIVERSITAS DIPONEGORO
                </a>
        </div>
    );
}

export default Home;
