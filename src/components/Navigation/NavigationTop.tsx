import React from 'react';
import './NavigationTop.css';
import {cartImage} from "../../assets/images";

const NavigationTop = () => {
    return (
        <nav className="nav-top">
            <ul className="navigation-items">
                <li className="navigation-item"><a href="#">Bicycles</a>
                    <ul className="dropdown">
                        <li className="dropdown-item"><a href="#">Fixed/Single Speed</a></li>
                        <li className="dropdown-item"><a href="#">City Bikes</a></li>
                        <li className="dropdown-item"><a href="#">Premium Bikes</a></li>
                    </ul>
                </li>
                <li className="navigation-item"><a href="#">Parts</a></li>
                <li className="navigation-item"><a href="#">Accessories</a></li>
                <li className="navigation-item"><a href="#">Extras</a></li>
                <a className="navigation-cart" href="#"><img src={cartImage} alt=""/></a>
            </ul>
        </nav>
    );
};

export default NavigationTop;