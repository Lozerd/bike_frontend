import React from 'react';
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

const Slider = () => {

    const swiper = new Swiper('.swiper', {
        direction: "horizontal",
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide active">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev" onClick={() => swiper.slideNext()}></div>
            <div className="swiper-button-next" onClick={() => swiper.slidePrev()}></div>

            <div className="swiper-scrollbar"></div>
        </div>
    );
    // return (
    //     <div classNameName="caption">
    //         <div classNameName="slider">
    //             <div classNameName="callbacks_container">
    //                 <ul classNameName="rslides" id="slider">
    //                     <li><h1>HANDMADE BICYCLE</h1></li>
    //                     <li><h1>SPEED BICYCLE</h1></li>
    //                     <li><h1>MOUINTAIN BICYCLE</h1></li>
    //                 </ul>
    //                 <p>You <span>create</span> the <span>journey,</span> we supply the <span>parts</span></p>
    //                 <a classNameName="morebtn" href="#">SHOP BIKES</a>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Slider;