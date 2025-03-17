import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

function Product(props) {

  const { cat } = useParams()

  const [yourTrip, setYourTrip] = useState([]);
  console.log(yourTrip);

  useEffect(() => {

    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(

      data => setYourTrip(data.data)
    )

  }, [cat])
  // const City = props.City;

  return (
    <div className="card">
      {yourTrip.filter((value) => (value.City === 'Kolkata') && (value.Category === cat)).map((val, index) => (
        <Card className='similarHotelCard'            >
          <Card.Title className='CardTitle'>Similar Hotel</Card.Title>
          {/* // <h2 className='mainCategory' key={index} >
          //   {val.CategoryHead}
          // </h2> */}
          <Card.Img className='Card-Img' variant="top" src={val.Thumbnail} />
          <Card.Body className='CardBody'>
            <Card.Text className='CardText'>
              <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 SimilarHotelDetailsstyles__HotelCategoryWrapDiv-sc-i3ec2n-1 lfQUri kAxHXK">
                <div className="SimilarHotelDetailsstyles__HotelCatgegory-sc-i3ec2n-4 bDXZVh">BnB</div>
              </div>
              <div className="SimilarHotelDetailsstyles__HotelNameLocationWrapper-sc-i3ec2n-10 jcodLa">
                <h3 className="SimilarHotelDetailsstyles__ReviewHotelNameHeading-sc-i3ec2n-5 chNQWg">Shakespeare Corporate Guest House</h3>
                <span className="SimilarHotelDetailsstyles__AddressSpan-sc-i3ec2n-6 eWvefQ">Park Street</span>
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
                <div className="SimilarHotelPricingstyles__HotelOldPrice-sc-17odt1r-1 gyWimb">₹2,250</div>
                <div className="SimilarHotelPricingstyles__HotelFinalPrice-sc-17odt1r-2 GJIrM">₹1,843</div>
                <div className="SimilarHotelPricingstyles__HotelPerNight-sc-17odt1r-3 bhPWYy">
                  <strong>1 room </strong>
                  <span>per night</span>
                </div>
              </div>

            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Product