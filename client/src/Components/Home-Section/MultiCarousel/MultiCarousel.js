import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
import './CardCarousel.css';


function MultiCarousel() {
    return (
        <div className='MultiCarousel'>
            <div style={{ display: 'block', width: '70%', padding: 30, alignItems: 'center' }}>
                <h4>React-Bootstrap Carousel Component</h4>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                            alt="ImageOne"
                        />
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                            alt="ImageTwo"
                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item interval={1500}>
                    <div className='MultiCard-container'>
                        <CardGroup>
                            <Card>
                                <Card.Img className='CardImg' variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/de/11/48/mohan-mahal.jpg?w=900&h=500&s=1" />
                                <div>
                                    <Card.Body>
                                        <Card.Title>Up to 15% OFF* on MOHAN MAHAL, Jaipur!</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Valid till: 31st Jan ’25</small>
                                    </Card.Footer>
                                </div>
                            </Card>
                            <br />
                        </CardGroup>
                        <CardGroup>
                            <Card>
                                <Card.Img className='CardImg' variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/de/11/48/mohan-mahal.jpg?w=900&h=500&s=1" />
                                <div>
                                    <Card.Body>
                                        <Card.Title>Up to 15% OFF* on MOHAN MAHAL, Jaipur!</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Valid till: 31st Jan ’25</small>
                                    </Card.Footer>
                                </div>
                            </Card>
                        </CardGroup>
                    </div>
                </Carousel.Item> */}
                </Carousel>
            </div>
        </div>
    );
}

export default MultiCarousel;
