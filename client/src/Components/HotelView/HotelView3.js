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
  "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];

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
          <MDBCol md='4'>
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
                    <img alt="sample_file" src={URL} key={index} />
                  </div>
                ))}
              </Carousel>
            </div>
          </MDBCol>
          <MDBCol md='8'>
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