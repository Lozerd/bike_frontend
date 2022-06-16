import React from 'react';
import Header from "./components/Header/Header";
import './Index.css';
import Slider from "./components/Slider/Slider";

function App() {
    return (
        <div className="App">
            <div className="banner-background">
                <div className="container">
                    <Header/>
                </div>
                <Slider/>
            </div>
        </div>
    );
}

export default App;
