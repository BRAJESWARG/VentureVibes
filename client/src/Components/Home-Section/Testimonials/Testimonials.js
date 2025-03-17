import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "../../utilis/data";
import './Testimonials.css'

function Testimonials(props) {
    const product = productData.map((item) => (
        <Product
            name={item.name}
            url={item.imageurl}
        />
    ));


    // https://www.npmjs.com/package/react-multi-carousel
    // https://github.com/nshntarora/Indian-Cities-JSON/blob/master/a-detailed-version.json


    return (
        <div className="Testimonials-container">
            <div className="Testimonials">
                <div>
                    {/* <hr className="hr-left" />
                    <hr className="hr-right" />
                    &nbsp;&nbsp;<h1 className="Testimonials-text">Point. Pick. Stay.</h1>&nbsp;&nbsp; */}
                    <h1 className="Testimonials-text">Point. Pick. Stay.</h1>
                </div>
                <Carousel
                    className="Carousel"
                    swipeable={true}
                    draggable={true}
                    // centerMode={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    transitionDuration={500}
                    // containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"

                >
                    {product}
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonials;
