import React from 'react';
import { Carousel } from "react-responsive-carousel";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  // MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "./HotelView.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HotelView.css";
const images = [
  "https://r1imghtlak.ibcdn.com/60c4acf2236f11e89cd40a4cef95d023.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
  "https://r1imghtlak.ibcdn.com/64401ba0236f11e8ade7025f77df004f.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
  "https://r1imghtlak.ibcdn.com/62b3223c236f11e8a8b7025f77df004f.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
  "https://r1imghtlak.ibcdn.com/64606496236f11e8b6270a4cef95d023.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
  "https://r1imghtlak.ibcdn.com/64e4493c236f11e8a52d025f77df004f.jpg?&downsize=245:152&crop=245:152;25,0&output-format=webp",
];

// https://github.com/Azure-Samples/azure-search-sample-data/blob/main/hotels/HotelsData_toAzureSearch.JSON
// https://gist.github.com/Thaer-Sarakbi/e92e818f0a2c9d5467cf68e8c8833d65

const HotelView = () => {

  const rotateAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";
    let slideStyle = {
      display: "block",
      minHeight: "100%",
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position:
        state.previousItem === state.selectedItem ? "relative" : "absolute",
      inset: "0 0 0 0",
      zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
      opacity: state.previousItem === state.selectedItem ? "1" : "0",
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: "relative",
        zIndex: 2,
        filter: `blur(0)`,
      },
      prevStyle: {
        ...slideStyle,
        transformOrigin: " 0 100%",
        transform: `rotate(${state.previousItem > state.selectedItem ? "-45deg" : "45deg"
          })`,
        opacity: "0",
        filter: `blur( ${state.previousItem === state.selectedItem ? "0px" : "5px"
          })`,
      },
    };
  };

  return (
    <div className='HotelView'>
      <MDBCard style={{ maxWidth: '70%' }}>
        <MDBRow className='g-0'>
          <MDBCol md='3'>
            {/* <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid /> */}
            <div className="box">
              <Carousel
                renderArrowNext={(clickHandler, hasNext) => {
                  //...
                }}
                renderArrowPrev={(clickHandler, hasNext) => {
                  //...
                }}
                renderIndicator={(clickHandler, isSelected, index) => {
                  //...
                }}
                statusFormatter={(currentItem, total) => {
                  //...
                }}
                transitionTime={310}
                animationHandler={rotateAnimationHandler}
                swipeable={false}
              >
                {images.map((URL, index) => (
                  <div className="slide">
                    <img alt="sample_file" style={{width: '100%', height:'60%', borderRadius: "5px"}} src={URL} key={index} />
                  </div>
                ))}
              </Carousel>
            </div>
          </MDBCol>
          <MDBCol md='5' className='Info-Component'>
            <MDBCardBody className='Info'>
              <MDBCardText className='Ratings'>
                <span>5 star Hotel</span>
                <span>1271 Ratings</span>
              </MDBCardText>
              <div>
                <MDBCardTitle>Trident Nariman Point</MDBCardTitle>
                <span>Marine Drive | 2 minutes walk to Nariman Point</span>
              </div>
              <MDBCardText className='Facilitate'>
                <span>Spa</span>
                <span>Swimming Pool</span>
                <span>&more</span>
              </MDBCardText>
              <MDBCardText className='Advantages'>
                <small className='text-muted'>Couple Friendly</small>
                <small className='text-muted'>Free Cancellation</small>
                <small className='text-muted'>Breakfast Included</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}

export default HotelView;