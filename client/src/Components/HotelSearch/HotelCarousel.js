import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../Components';

function ControlledCarousel({val}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const Image1 = val?.Image1
    const Image2 = val?.Image2
    const Image3 = val?.Image3

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                {
                    // <ExampleCarouselImage text="First slide" />
                }
                <img src={Image1} alt='' text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Image2} alt='' text="First slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Image3} alt='' text="First slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;