import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg"
import slider3 from "../images/slider3.jpg"
import slider4 from "../images/slider4.jpg"
import slider5 from "../images/slider5.jpg"


const DemoCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const onChange = (index) => {
        setCurrentSlide(index);
    };

    const onClickItem = (index) => {
        // Aquí puedes realizar acciones al hacer clic en un elemento del carrusel si lo deseas
    };

    const onClickThumb = (index) => {
        // Aquí puedes realizar acciones al hacer clic en una miniatura del carrusel si lo deseas
    };

    return (
      
        <Carousel
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            selectedItem={currentSlide}
            autoPlay
            infiniteLoop
        >
            <div>
                <img src={slider1} alt="Slide 1" />
                <p className="legend">El del hp momento</p>
            </div>
            <div>
                <img src={slider2}  alt="Slide 2" />
                <p className="legend">Eso es todo</p>
            </div>
            <div>
                <img src={slider3}  alt="Slide 3" />
                <p className="legend">Buscalooo</p>
            </div>
            <div>
                <img src={slider4} alt="Slide 4" />
                <p className="legend">N O R M A L</p>
            </div>
            <div>
                <img src={slider5}alt="Slide 5" />
                <p className="legend">Viene la vaina.</p>
            </div>
           
        </Carousel>
      
    );
};

export default DemoCarousel;
