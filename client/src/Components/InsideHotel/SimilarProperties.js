import React, { useEffect, useState } from 'react';
import "./SimilarProperties.css";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
// import Product from "./Product";
import { responsive } from "../utilis/data";
// import { productData, responsive } from "../utilis/data";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SimilarProperties = ({ val }) => {

    // const product = productData.map((item) => (
    //     <Product
    //         url={item.imageurl}
    //         val={val}
    //     />
    // ));

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0, // Removes decimal values
        }).format(value);
    };

    const getPriceAfterDiscount = (value) => {
        return value * 0.6;
    };

    const PriceAfterDiscount = getPriceAfterDiscount(val.PricePerNight);

    const { cat } = useParams()

    const [yourTrip, setYourTrip] = useState([]);
    console.log(yourTrip);

    useEffect(() => {

        axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(

            data => setYourTrip(data.data)
        )

    }, [cat])
    const City = val.City;

    return (
        <>
            <div className="SimilarProperties">
                <div className="SimilarProperties-container">
                    <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 buWWlt">
                        <h2 className="dwebCommonstyles__LargeSectionHeader-sc-112ty3f-8 eeTyKB">Similar Properties to Shakespeare Corporate Guest House</h2>
                        {/* <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPdB">
                            <div className="SimilarHotelsstyles__ArrowContainer-sc-11wc8bz-1 iTFBGe">
                                <div className="dwebCommonstyles__CenteredDivWrap-sc-112ty3f-1 SimilarHotelsstyles__LeftArrowWrapper-sc-11wc8bz-2 bGKfHf EtZNA">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" isactive="false" className="LeftArrowIconHome__LeftArrowIcon-sc-dm8bkt-0 dRhXgW">
                                        <path d="M30.064 14.081H7.249a.334.334 0 0 1-.22-.584L18.545 3.364A1.92 1.92 0 0 0 16.012.481L1.104 13.6a3.2 3.2 0 0 0 0 4.8l14.905 13.116a1.92 1.92 0 0 0 2.533-2.881L7.026 18.502a.335.335 0 0 1 .22-.584h22.817a1.92 1.92 0 0 0 0-3.839z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="SimilarHotelsstyles__ArrowContainer-sc-11wc8bz-1 iTFBGe">
                                <div className="dwebCommonstyles__CenteredDivWrap-sc-112ty3f-1 SimilarHotelsstyles__RightArrowWrapper-sc-11wc8bz-3 bGKfHf bWgSVG">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" isactive="true" className="RIghtArrowIconHome__RightArrowIcon-sc-atqev5-0 jSLSL">
                                        <path d="M31.983 16a3.21 3.21 0 0 0-1.085-2.4L15.993.481a1.92 1.92 0 0 0-2.533 2.882l11.516 10.133a.334.334 0 0 1-.22.583H1.937a1.92 1.92 0 0 0 0 3.84h22.815a.334.334 0 0 1 .22.584L13.456 28.636a1.92 1.92 0 1 0 2.533 2.881l14.908-13.119a3.21 3.21 0 0 0 1.087-2.4z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <section className="SimilarHotelsstyles__SimilarHotelsCardsContainer-sc-11wc8bz-4 dNFRNM">
                        <section id="similar-hotels-current-hotel" className="SimilarHotelCardstyles__WrapperDivRight-sc-u9axkm-0 guwHAy similar-hotel-card">
                            <Card
                                // style={{ width: '18rem' }}
                                className='CurrentHotelCard'
                            >
                                <Card.Title className='CardTitle'>Current Hotel</Card.Title>
                                <Card.Img
                                    className='Card-Img'
                                    variant="top"
                                    // src="https://r1imghtlak.mmtcdn.com/57663784996211e8bfae0adfcdb46c1c.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=webp"
                                    src={val.Thumbnail}
                                />
                                <Card.Body className='CardBody'>
                                    <Card.Text className='CardText'>
                                        <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 SimilarHotelDetailsstyles__HotelCategoryWrapDiv-sc-i3ec2n-1 lfQUri kAxHXK">
                                            <div className="SimilarHotelDetailsstyles__HotelCatgegory-sc-i3ec2n-4 bDXZVh">{val.Author}</div>
                                        </div>
                                        <div className="SimilarHotelDetailsstyles__HotelNameLocationWrapper-sc-i3ec2n-10 jcodLa">
                                            <h3 className="SimilarHotelDetailsstyles__ReviewHotelNameHeading-sc-i3ec2n-5 chNQWg">{val.Title}</h3>
                                            <span className="SimilarHotelDetailsstyles__AddressSpan-sc-i3ec2n-6 eWvefQ">{val.Address}</span>
                                        </div>
                                        <div className="SimilarHotelAmenitiesstyles__HotelAmenitiesWrapOuterDiv-sc-lv7ss5-0 fkXUqg">
                                            <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">
                                                <div className="SimilarHotelAmenitiesstyles__IconContainer-sc-lv7ss5-5 icZKdB">
                                                    <svg viewBox="0 0 16 16" width="1.5rem" height="1.5rem" className="RoundedCheckbox-sc-4skzta-0 bpsfFUB">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path d="M-4-4h24v24H-4z">
                                                            </path>
                                                            <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </div>Air Conditioning</div>
                                            <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">
                                                <div className="SimilarHotelAmenitiesstyles__IconContainer-sc-lv7ss5-5 icZKdB">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.5rem" height="1.5rem" className="RoomServiceIcon-sc-cq049u-0 fSiKho">
                                                        <path d="M30.387 15.6c-.375-5.737-4.975-10.35-10.813-10.887q.075-.188.075-.412a1.213 1.213 0 0 0-2.424 0q0 .225.075.412C11.475 5.25 6.875 9.863 6.5 15.6H4.888c0 .813.662 1.463 1.462 1.463h1.313c-1.525.775-3.625 2.837-3.625 2.837l4.813 4.863 1.725-1.025h9.8l6.675-6.675h3.475c.813 0 1.462-.663 1.462-1.463zM19.8 20.575h-4.575c-.65 0-2.175-1.425-2.175-1.425h4.063c1.85 0 2.788-1.462 3.1-2.087h4.275c-1.688.95-4.688 3.512-4.688 3.512M2.9 19.6l6.412 6.413-2.9 2.9L0 22.5z">
                                                        </path>
                                                    </svg>
                                                </div>Room Service</div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                {/* <ListGroup className="list-group-flush ListGroup">
                                <ListGroup.Item className='ListGroupItem' >Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className='ListGroupItem' >Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className='ListGroupItem' >Vestibulum at eros</ListGroup.Item>
                            </ListGroup> */}
                                <Card.Body className='CardBody'>
                                    {/* <Card.Link className='CardLink' href="#">Card Link</Card.Link>
                                <Card.Link className='CardLink' href="#">Another Link</Card.Link> */}
                                    <div className="Layouts__Column-sc-1yzlivq-1 SimilarHotelCardstyles__SimilarHotelPricingWrapper-sc-u9axkm-4 gANvcd cEMjip">
                                        <div className="SimilarHotelPricingstyles__SimilarHotelPricingWrapDiv-sc-17odt1r-0 cfBEgO">
                                            <div className="SimilarHotelPricingstyles__HotelOldPrice-sc-17odt1r-1 gyWimb">{formatCurrency(val.PricePerNight)}</div>
                                            <div className="SimilarHotelPricingstyles__HotelFinalPrice-sc-17odt1r-2 GJIrM">{formatCurrency(PriceAfterDiscount)}</div>
                                            <div className="SimilarHotelPricingstyles__HotelPerNight-sc-17odt1r-3 bhPWYy">
                                                <strong>1 room </strong>
                                                <span>per night</span>
                                            </div>
                                        </div>
                                        {/* <div className="Layouts__Column-sc-1yzlivq-1 SimilarHotelCardstyles__SelectButtomOuterWrap-sc-u9axkm-5 gANvcd dvgTIT">
                                        <button backgroundcolor="transparent" color="#141823" className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SimilarHotelCardstyles__SelectRoomButton-sc-u9axkm-3 cYhrVX heUzDZ">
                                            BOOK NOW
                                        </button>
                                    </div> */}
                                    </div>
                                </Card.Body>
                            </Card>
                        </section>
                        <section className='similarHotelCardCointaner'>

                            <Carousel
                                className="similarHotelCarousel"
                                swipeable={true}
                                draggable={true}
                                // centerMode={true}
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={false}
                                autoPlay={false}
                                autoPlaySpeed={2000}
                                // keyBoardControl={true}
                                // customTransition="all .5"
                                transitionDuration={500}
                                // containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                // itemClass="carousel-item-padding-40-px"
                                dotListClass="custom-dot-list-style"
                            >
                                {/* {product} */}
                                {/* <div className="card"> */}
                                {yourTrip.filter((value) => (value.City === City) && (value.Category === cat)).map((val, index) => (
                                    <Card className='similarHotelCard'            >
                                        <Card.Title className='CardTitle'>Similar Hotel</Card.Title>
                                        <Card.Img className='Card-Img' variant="top" src={val.Thumbnail} />
                                        <Card.Body className='CardBody'>
                                            <Card.Text className='CardText'>
                                                <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 SimilarHotelDetailsstyles__HotelCategoryWrapDiv-sc-i3ec2n-1 lfQUri kAxHXK">
                                                    <div className="SimilarHotelDetailsstyles__HotelCatgegory-sc-i3ec2n-4 bDXZVh">{val.Author}</div>
                                                </div>
                                                <div className="SimilarHotelDetailsstyles__HotelNameLocationWrapper-sc-i3ec2n-10 jcodLa">
                                                    <h3 className="SimilarHotelDetailsstyles__ReviewHotelNameHeading-sc-i3ec2n-5 chNQWg">{val.Title}</h3>
                                                    <span className="SimilarHotelDetailsstyles__AddressSpan-sc-i3ec2n-6 eWvefQ">{val.Address}</span>
                                                </div>
                                                <div className="SimilarHotelAmenitiesstyles__HotelAmenitiesWrapOuterDiv-sc-lv7ss5-0 fkXUqg">
                                                    <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">
                                                        <div className="SimilarHotelAmenitiesstyles__IconContainer-sc-lv7ss5-5 icZKdB">
                                                            <svg viewBox="0 0 16 16" width="1.5rem" height="1.5rem" className="RoundedCheckbox-sc-4skzta-0 bpsfFUB">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="M-4-4h24v24H-4z">
                                                                    </path>
                                                                    <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>Air Conditioning</div>
                                                    <div className="SimilarHotelAmenitiesstyles__AmenityContainer-sc-lv7ss5-4 jdzNHa">
                                                        <div className="SimilarHotelAmenitiesstyles__IconContainer-sc-lv7ss5-5 icZKdB">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1.5rem" height="1.5rem" className="RoomServiceIcon-sc-cq049u-0 fSiKho">
                                                                <path d="M30.387 15.6c-.375-5.737-4.975-10.35-10.813-10.887q.075-.188.075-.412a1.213 1.213 0 0 0-2.424 0q0 .225.075.412C11.475 5.25 6.875 9.863 6.5 15.6H4.888c0 .813.662 1.463 1.462 1.463h1.313c-1.525.775-3.625 2.837-3.625 2.837l4.813 4.863 1.725-1.025h9.8l6.675-6.675h3.475c.813 0 1.462-.663 1.462-1.463zM19.8 20.575h-4.575c-.65 0-2.175-1.425-2.175-1.425h4.063c1.85 0 2.788-1.462 3.1-2.087h4.275c-1.688.95-4.688 3.512-4.688 3.512M2.9 19.6l6.412 6.413-2.9 2.9L0 22.5z">
                                                                </path>
                                                            </svg>
                                                        </div>Room Service</div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Body className='CardBody'>
                                            <div className="Layouts__Column-sc-1yzlivq-1 SimilarHotelCardstyles__SimilarHotelPricingWrapper-sc-u9axkm-4 gANvcd cEMjip">
                                                <div className="SimilarHotelPricingstyles__SimilarHotelPricingWrapDiv-sc-17odt1r-0 cfBEgO">
                                                    <div className="SimilarHotelPricingstyles__HotelOldPrice-sc-17odt1r-1 gyWimb">{formatCurrency(val.PricePerNight)}</div>
                                                    <div className="SimilarHotelPricingstyles__HotelFinalPrice-sc-17odt1r-2 GJIrM">{formatCurrency(getPriceAfterDiscount(val.PricePerNight))}</div>
                                                    <div className="SimilarHotelPricingstyles__HotelPerNight-sc-17odt1r-3 bhPWYy">
                                                        <strong>1 room </strong>
                                                        <span>per night</span>
                                                    </div>
                                                </div>
                                                {/* <div className="Layouts__Column-sc-1yzlivq-1 SimilarHotelCardstyles__SelectButtomOuterWrap-sc-u9axkm-5 gANvcd dvgTIT">
                                                    <button backgroundcolor="transparent" color="#141823" className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SimilarHotelCardstyles__SelectRoomButton-sc-u9axkm-3 cYhrVX heUzDZ">
                                                        BOOK NOW
                                                    </button>
                                                </div> */}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                                {/* </div> */}
                            </Carousel>
                        </section>
                    </section>

                </div>

            </div >
            {/* <div>

                <Carousel
                    className="Carousel"
                    swipeable={true}
                    draggable={true}
                    // centerMode={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
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
            </div> */}
        </>
    );
}

export default SimilarProperties;