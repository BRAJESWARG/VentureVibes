import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InsideSearchView from "./InsideSearchView";
import InsideMainView from "./InsideMainView";
import InsideNav from "./InsideNav";
import Amenities from "./Amenities";
import Host from "./Host";
import PropertyPolicies from "./PropertyPolicies";
import GuestReviews from "./GuestReviews";
import StayOptions from "./StayOptions";
import SimilarProperties from "./SimilarProperties";


const InsideHotel = ({ val }) => {

    return (
        <>
            <div className='InsideHotelSearchView'>
                <InsideSearchView val={val} />
            </div>
            <div className='InsideHotelMainView'>
                <InsideMainView val={val} />
            </div>
            <div className='InsideHotelNav'>
                <InsideNav val={val} />
            </div>
            <div className='InsideHotelStayOptions'>
                <StayOptions val={val} />
            </div>
            <div className='InsideHotelAmenities'>
                <Amenities val={val} />
            </div>
            <div className='InsideHotelHost'>
                <Host val={val} />
            </div>
            <div className='InsideHotelGuestReviews'>
                <GuestReviews val={val} />
            </div>
            <div className='InsideHotelPropertyPolicies'>
                <PropertyPolicies val={val} />
            </div>
            <div className='InsideHotelSimilarProperties'>
                <SimilarProperties val={val} />
            </div>
        </>
    );
}

export default InsideHotel;