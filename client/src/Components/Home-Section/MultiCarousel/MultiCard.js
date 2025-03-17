import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import './CardCarousel.css';

function MultiCard() {
    return (
        <div className='MultiCard-container'>
            <div className='MultiCard'>
                <h1>
                    Offers for you
                </h1>
                {/* <div className='MultiCard-container'>
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
                    </Card> */}
                {/* <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card> */}
                {/* </CardGroup>
            </div> */}


                {/* <div style={{ display: 'block', width: '70%', padding: 30, alignItems: 'center' }}> */}
                <Carousel>
                    <Carousel.Item interval={2500}>
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
                                    <Card.Img className='CardImg' variant="top" src="https://lh3.googleusercontent.com/p/AF1QipPYk7u4JT8GfayNZxP870CbfUEDtQS8szDpOkx5=w287-h192-n-k-rw-no-v1" />
                                    <div>
                                        <Card.Body>
                                            <Card.Title>Up to 15% OFF* on The Ummed Jodhpur Palace!</Card.Title>
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
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <div className='MultiCard-container'>
                            <CardGroup>
                                <Card>
                                    <Card.Img className='CardImg' variant="top" src="https://akm-img-a-in.tosshub.com/lingo/images/story/media_bank/202312/657bdd60d1fdd-taj-mumbai-150015589-16x9.png" />
                                    <div>
                                        <Card.Body>
                                            <Card.Title>Up to 15% OFF* on Taj*, Mumbai!</Card.Title>
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
                                    <Card.Img className='CardImg' variant="top" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/604155459.jpg?k=b3840036ac52cffbb4c18842b0a6af2fe151f87f19bdbc0b365ac617ffb32c7b&o=&hp=1" />
                                    <div>
                                        <Card.Body>
                                            <Card.Title>Up to 25% OFF* on ITC Royal Bengal!</Card.Title>
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
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <div className='MultiCard-container'>
                            <CardGroup>
                                <Card>
                                    <Card.Img className='CardImg' variant="top" src="https://images.news18.com/ibnlive/uploads/2023/05/untitled-design-2023-05-25t115114.850.png" />
                                    <div>
                                        <Card.Body>
                                            <Card.Title>Up to 15% OFF* on Rambagh Palace -Jaipur!</Card.Title>
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
                                    <Card.Img className='CardImg' variant="top" src="https://static.wixstatic.com/media/21241f_6eb1859a22f94204a8abe25914399fac~mv2.jpg/v1/fill/w_1000,h_726,al_c,q_85,enc_auto/21241f_6eb1859a22f94204a8abe25914399fac~mv2.jpg" />
                                    <div>
                                        <Card.Body>
                                            <Card.Title>Up to 15% OFF* on Capital Choice -Delhi.</Card.Title>
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
                    </Carousel.Item>
                </Carousel>
                {/* </div> */}
            </div>
        </div>
    );
}

export default MultiCard;
