import React, { useState } from 'react';
import {
  MDBCard,
  // MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import "./HotelView.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

const HotelView = ({ val, index }) => {

  // const images = [
  //   { original: "https://picsum.photos/id/1000/600/300", thumbnail: "https://picsum.photos/id/1000/100/50", ID: 1 },
  //   { original: "https://picsum.photos/id/1/600/300", thumbnail: "https://picsum.photos/id/1/100/50", ID: 2 },
  //   { original: "https://picsum.photos/id/10/600/300", thumbnail: "https://picsum.photos/id/10/100/50", ID: 3 },
  //   { original: "https://picsum.photos/id/100/600/300", thumbnail: "https://picsum.photos/id/100/100/50", ID: 4 },
  //   { original: "https://picsum.photos/id/101/600/300", thumbnail: "https://picsum.photos/id/101/100/50", ID: 5 },
  //   { original: "https://picsum.photos/id/237/600/300", thumbnail: "https://picsum.photos/id/237/100/50", ID: 6 },
  //   { original: "https://picsum.photos/id/1001/600/300", thumbnail: "https://picsum.photos/id/1001/100/50", ID: 7 }
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % val.Images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + val.Images.length) % val.Images.length);
  };

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

  const getTaxValue = (value) => {
    return value * 0.18;
  };

  const TaxValue = getTaxValue(PriceAfterDiscount);

  return (
    <div className='HotelView'>
      <div>
        <MDBCard style={{ maxWidth: '80rem', maxHeight: '300px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <div className='box'>
                <div className="gallery-containe">
                  <button className="prev-button" onClick={handlePrev}>❮</button>
                  {/* <img src={images[currentIndex].original} alt="Main View" className="main-image" /> */}
                  {val.Images?.length > 0 && (
                    <img src={val.Images[currentIndex].original} alt="Main View" className="main-image" />
                  )}
                  <button className="next-button" onClick={handleNext}>❯</button>
                  <div className="thumbnails">
                    {/* {images.filter((value) => (value.ID <= 4)).map((image, index) => (
                    <img
                      key={index}
                      src={image.thumbnail}
                      alt={`Thumbnail ${index}`}
                      className="thumbnail"
                      onMouseEnter={() => setCurrentIndex(index)}
                    />
                  ))} */}
                    {val.Images?.filter((value) => value.ID <= 4).map((image, index) => (
                      <img
                        key={index}
                        src={image.thumbnail}
                        alt={`Thumbnail ${index}`}
                        className="thumbnail"
                        onMouseEnter={() => setCurrentIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol md='5' className='Info-Component'>
              <MDBCardBody className='Info'>
                {/* <MDBCardText className='Ratings'>
                <span className='starRatings'>
                  5
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" width="1rem" height="1rem" margin="0 0.2rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 knROuZ"><path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z"></path></svg>
                  <span className="fa fa-star checked"></span>
                  <i style={{ fontSize: '5px' }} className="fa">&#xf111;</i>
                  &nbsp;&nbsp;Hotel
                </span>
                <span>1271 Ratings</span>
              </MDBCardText> */}

                <MDBCardText>
                  <div className="HotelCardV2styles__SRPCardRatingWrapper-sc-6przws-10 iJZWvD">
                    <div className="HotelCardV2styles__CardTopWrapper-sc-6przws-47 starRatingCard">
                      <div className="HotelCardV2styles__CardTopLeftWrapper-sc-6przws-48 dooBui">
                        <div itemprop="starRating" content="4">
                          <div className="AltAccoRatingsRendererstyles__HotelTag-sc-1z0kydb-0 ijHVWm">
                            <div className="AltAccoRatingsRendererstyles__HotelStarRating-sc-1z0kydb-1 hIffyn">
                              <span>
                                {val.StarRating}
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" width="1rem" height="1rem" margin="0 0.2rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 knROuZ">
                                <path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z">
                                </path>
                              </svg>
                            </div>
                            <span className="AltAccoRatingsRendererstyles__PropertyLabel-sc-1z0kydb-2 ffygJa">
                              Hotel
                            </span>
                          </div>
                        </div>
                        <div className="HotelCardV2styles__TagWrapper-sc-6przws-49 wNsWF">
                        </div>
                      </div>
                      <div className="HotelCardV2styles__CardTopRightWrapper-sc-6przws-50 frMGXj">
                        <div itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating" className="ReviewAndRatingsstyles__ReviewAndRatingOuterContainer-sc-hy6oq9-2 hSgJJA">
                          <div className="ReviewAndRatingsstyles__HotelTotalReviewWrapper-sc-hy6oq9-1 CntYP">
                            <div className="ReviewAndRatingsstyles__RatingWrapper-sc-hy6oq9-32 bFYVse">
                              <div className="HotelReviewstyles__TotalUserCountDiv-sc-1hb22sy-6 bPLtwR">
                                <span>{val.Ratings} Ratings</span>
                              </div>
                              <div className="HotelReviewstyles__CenteredDivWrap-sc-1hb22sy-0 HotelReviewstyles__UserRatingWrapperDiv-sc-1hb22sy-2 cNQnuA imgiRd">
                                <span className="HotelReviewstyles__RatingText-sc-1hb22sy-4 fJCwcn">{val.StarRating}</span>
                                <span className="HotelReviewstyles__TotalRating-sc-1hb22sy-5 ccXZUc">/5</span>
                              </div>
                              <div className="ReviewAndRatingsstyles__GuestReviewPopUpWrap-sc-hy6oq9-0 fUGqIF">
                                <div bgcolor="#1ca54f" className="dwebCommonstyles__CenteredDivWrap-sc-112ty3f-1 ReviewAndRatingsstyles__GoRatingBlock-sc-hy6oq9-9 bGKfHf PvrTo">
                                  <p className="ReviewAndRatingsstyles__AvgReviewTextWrapperDiv-sc-hy6oq9-13 iLqjAf">
                                    <span className="ReviewAndRatingsstyles__AvgReviewTextWrapper-sc-hy6oq9-14 cSoxCp">{val.StarRating}</span>
                                    <span className="ReviewAndRatingsstyles__TotalReviewTextWrapper-sc-hy6oq9-15 gzEDcE">/5</span>
                                  </p>
                                  <p className="ReviewAndRatingsstyles__RatingsCountTextWrapper-sc-hy6oq9-12 feUPJF">443 Ratings</p>
                                </div>
                                <div className="ReviewAndRatingsstyles__BreakupWrapperDiv-sc-hy6oq9-23 bTTkLK">
                                  <div className="ReviewAndRatingsstyles__BreakupWrapperContainer-sc-hy6oq9-25 fkVHQo">
                                    <span className="ReviewAndRatingsstyles__ReviewTypeTextWrapper-sc-hy6oq9-17 knFcNf">5</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" margin="0 0.5rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 cVXwXq">
                                      <path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z">
                                      </path>
                                    </svg>
                                    <div className="Layouts__Row-sc-1yzlivq-0 ReviewAndRatingsstyles__ProgressBarWrapperDiv-sc-hy6oq9-18 iRIAvw eiOZKd">
                                      <div className="Layouts__Column-sc-1yzlivq-1 ReviewAndRatingsstyles__OverriddenProgressBar-sc-hy6oq9-24 gANvcd cFpMWx">
                                        <span width="7" bgcolor="#11998e" className="ReviewAndRatingsstyles__ProgressLine-sc-hy6oq9-26 cKjjtw">
                                        </span>
                                      </div>
                                    </div>
                                    <span className="ReviewAndRatingsstyles__ProgressBarCountWrapper-sc-hy6oq9-19 cbgYBc">232</span>
                                  </div>
                                  <div className="ReviewAndRatingsstyles__BreakupWrapperContainer-sc-hy6oq9-25 fkVHQo">
                                    <span className="ReviewAndRatingsstyles__ReviewTypeTextWrapper-sc-hy6oq9-17 knFcNf">4</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" margin="0 0.5rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 cVXwXq">
                                      <path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z">
                                      </path>
                                    </svg>
                                    <div className="Layouts__Row-sc-1yzlivq-0 ReviewAndRatingsstyles__ProgressBarWrapperDiv-sc-hy6oq9-18 iRIAvw eiOZKd">
                                      <div className="Layouts__Column-sc-1yzlivq-1 ReviewAndRatingsstyles__OverriddenProgressBar-sc-hy6oq9-24 gANvcd cFpMWx">
                                        <span width="3.288793103448276" bgcolor="#1ca54f" className="ReviewAndRatingsstyles__ProgressLine-sc-hy6oq9-26 jHpTTJ">
                                        </span>
                                      </div>
                                    </div>
                                    <span className="ReviewAndRatingsstyles__ProgressBarCountWrapper-sc-hy6oq9-19 cbgYBc">109</span>
                                  </div>
                                  <div className="ReviewAndRatingsstyles__BreakupWrapperContainer-sc-hy6oq9-25 fkVHQo">
                                    <span className="ReviewAndRatingsstyles__ReviewTypeTextWrapper-sc-hy6oq9-17 knFcNf">3</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" margin="0 0.5rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 cVXwXq">
                                      <path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z">
                                      </path>
                                    </svg>
                                    <div className="Layouts__Row-sc-1yzlivq-0 ReviewAndRatingsstyles__ProgressBarWrapperDiv-sc-hy6oq9-18 iRIAvw eiOZKd">
                                      <div className="Layouts__Column-sc-1yzlivq-1 ReviewAndRatingsstyles__OverriddenProgressBar-sc-hy6oq9-24 gANvcd cFpMWx">
                                        <span width="1.5689655172413794" bgcolor="#f59d00" className="ReviewAndRatingsstyles__ProgressLine-sc-hy6oq9-26 hliiED">
                                        </span>
                                      </div>
                                    </div>
                                    <span className="ReviewAndRatingsstyles__ProgressBarCountWrapper-sc-hy6oq9-19 cbgYBc">52</span>
                                  </div>
                                  <div className="ReviewAndRatingsstyles__BreakupWrapperContainer-sc-hy6oq9-25 fkVHQo">
                                    <span className="ReviewAndRatingsstyles__ReviewTypeTextWrapper-sc-hy6oq9-17 knFcNf">2</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" margin="0 0.5rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 cVXwXq">
                                      <path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z">
                                      </path>
                                    </svg>
                                    <div className="Layouts__Row-sc-1yzlivq-0 ReviewAndRatingsstyles__ProgressBarWrapperDiv-sc-hy6oq9-18 iRIAvw eiOZKd">
                                      <div className="Layouts__Column-sc-1yzlivq-1 ReviewAndRatingsstyles__OverriddenProgressBar-sc-hy6oq9-24 gANvcd cFpMWx">
                                        <span width="0.5431034482758621" bgcolor="#f39c12" className="ReviewAndRatingsstyles__ProgressLine-sc-hy6oq9-26 zyfvR"></span>
                                      </div></div><span className="ReviewAndRatingsstyles__ProgressBarCountWrapper-sc-hy6oq9-19 cbgYBc">18</span>
                                  </div><div className="ReviewAndRatingsstyles__BreakupWrapperContainer-sc-hy6oq9-25 fkVHQo">
                                    <span className="ReviewAndRatingsstyles__ReviewTypeTextWrapper-sc-hy6oq9-17 knFcNf">1</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" margin="0 0.5rem 0 0" className="HappyRatingStarIcon-sc-qukodd-0 cVXwXq">
                                      <path fill-rule="evenodd" d="m8.172 13.282 3.964 2.434c.726.446 1.614-.213 1.423-1.047l-1.05-4.577 3.505-3.084c.64-.562.296-1.629-.545-1.696l-4.613-.398L9.051.589c-.325-.785-1.432-.785-1.757 0L5.489 4.904l-4.613.398C.036 5.37-.31 6.436.33 6.999l3.505 3.083-1.05 4.577c-.191.834.697 1.494 1.423 1.048l3.963-2.425z">
                                      </path>
                                    </svg>
                                    <div className="Layouts__Row-sc-1yzlivq-0 ReviewAndRatingsstyles__ProgressBarWrapperDiv-sc-hy6oq9-18 iRIAvw eiOZKd">
                                      <div className="Layouts__Column-sc-1yzlivq-1 ReviewAndRatingsstyles__OverriddenProgressBar-sc-hy6oq9-24 gANvcd cFpMWx">
                                        <span width="0.9655172413793103" bgcolor="#e74c3c" className="ReviewAndRatingsstyles__ProgressLine-sc-hy6oq9-26 fSLDwz">
                                        </span>
                                      </div>
                                    </div>
                                    <span className="ReviewAndRatingsstyles__ProgressBarCountWrapper-sc-hy6oq9-19 cbgYBc">32</span>
                                  </div>
                                </div>
                                <div className="ReviewAndRatingsstyles__TipUI-sc-hy6oq9-21 ReviewAndRatingsstyles__TipPositioning-sc-hy6oq9-22 dVqPnF hgwldU">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      itemprop="name"
                      href="https://www.goibibo.com/hotels/ramee-techome-hotel-in-mumbai-1382082848099584304/"
                      content="Ramee Techome" className="HotelCardV2styles__PropertyName-sc-6przws-23 ccHfbG"
                    >
                      {val.Title}
                    </a>

                    <div itemprop="address" itemtype="http://schema.org/PostalAddress" className="HotelCardV2styles__PropertyLocationWrapper-sc-6przws-24 iMdzTO">
                      <div className="PersuasionsUnifstyles__WithHoverWrapper-sc-wislna-5 rCBfm">
                        <div className="PersuasionsUnifstyles__LocationPersuasionWrapper-sc-wislna-10 bcAlMZ">
                          <span className="PersuasionsUnifstyles__ElementUIWrapper-sc-wislna-1 LtdCD">
                            <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(34, 118, 227)' }} >
                              {val.Address}
                            </span>
                          </span>
                          <span className="PersuasionsUnifstyles__ElementUIWrapper-sc-wislna-1 LtdCD">
                            <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(113, 113, 113)' }} > | {val.NearBy}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="HotelCardV2styles__PropertyLocationWrapper-sc-6przws-24 iMdzTO"></div>

                    <div className="HotelCardV2styles__PropertyFeaturesWrapper-sc-6przws-27 dZZtel">
                      <div className="PersuasionsUnifstyles__WithHoverWrapper-sc-wislna-5 rCBfm">
                        <div className="PersuasionsUnifstyles__MultiPersuasionHWrapper-sc-wislna-9 gGHYhq">
                          <span className="PersuasionsUnifstyles__MultiPersuasionListWrapper-sc-wislna-2 gRVFHo">
                            <span className="PersuasionsUnifstyles__ElementListWrapper-sc-wislna-3 gTvaBf">
                              <span className="PersuasionsUnifstyles__ElementUIWrapper-sc-wislna-1 LtdCD">
                                <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(113, 113, 113)', display: 'inline-flex', padding: '3px 8px', border: '1px solid rgb(228, 228, 228)', borderRadius: '4px' }} >
                                  <span>Jacuzzi</span>
                                </div>
                              </span>
                            </span>
                            <span className="PersuasionsUnifstyles__ElementListWrapper-sc-wislna-3 gTvaBf">
                              <span className="PersuasionsUnifstyles__ElementUIWrapper-sc-wislna-1 LtdCD">
                                <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(113, 113, 113)', display: 'inline-flex', padding: '3px 8px', border: '1px solid rgb(228, 228, 228)', borderRadius: '4px' }} >
                                  <span>Gym</span>
                                </div>
                              </span>
                            </span>
                            <span className="PersuasionsUnifstyles__CtaWrapper-sc-wislna-4 hsUjcS">
                              <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(34, 118, 227)' }} >&amp; more</span>
                              <div className="HoverPersuasionstyles__HoverCardOuter-sc-8xv4x3-0 cwgsXw">
                                <div className="HoverPersuasionstyles__HoverCard-sc-8xv4x3-1 liohMR">
                                  <div className="HoverPersuasionstyles__HoverHeader-sc-8xv4x3-2 jQBJPp">
                                    <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ padding: '4px' }} >
                                      <span>Amenities</span>
                                    </div>
                                  </div>
                                  <ul className="HoverPersuasionstyles__HoverList-sc-8xv4x3-3 cbFZPq">
                                    <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                      <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk">
                                        <span>Gym</span>
                                      </div>
                                    </li>
                                    <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                      <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk">
                                        <span>Restaurant</span>
                                      </div>
                                    </li>
                                    <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                      <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk">
                                        <span>24-hour Room Service</span>
                                      </div>
                                    </li>
                                    <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                      <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk">
                                        <span>Bar</span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="HoverPersuasionstyles__TipUI-sc-8xv4x3-6 HoverPersuasionstyles__TipPositioning-sc-8xv4x3-7 gpMBhB OrsFY">
                                </div>
                              </div>
                            </span>
                            {/* <span className="PersuasionsUnifstyles__CtaWrapper-sc-wislna-4 hsUjcS">
                              <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(34, 118, 227)' }} >&amp; more</span>
                            </span> */}
                          </span>
                        </div>
                      </div>
                      <div className="HoverPersuasionstyles__HoverCardOuter-sc-8xv4x3-0 cwgsXw">
                        <div className="HoverPersuasionstyles__HoverCard-sc-8xv4x3-1 liohMR">
                          <div className="HoverPersuasionstyles__HoverHeader-sc-8xv4x3-2 jQBJPp">
                            <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ padding: '4px' }} >
                              <span>Amenities</span>
                            </div>
                          </div>
                        </div>
                        <div className="HoverPersuasionstyles__TipUI-sc-8xv4x3-6 HoverPersuasionstyles__TipPositioning-sc-8xv4x3-7 gpMBhB OrsFY">
                        </div>
                      </div>
                    </div>

                  </div>
                </MDBCardText>

                {/* <div>
                <MDBCardTitle className='hotelName'>Trident Nariman Point</MDBCardTitle>
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
              
              </MDBCardText> */}

                <MDBCardText>
                  <div className="HotelCardV2styles__InfoMiddleWrapper-sc-6przws-45 hqOQmh">
                    <div className="HotelCardV2styles__CoupleFriendlyWrapper-sc-6przws-43 jdPwkf">
                      <div className="PersuasionsUnifstyles__WithHoverWrapper-sc-wislna-5 rCBfm">
                        <div className="PersuasionsUnifstyles__OuterWrapper-sc-wislna-7 jPEMGr">
                          <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(255, 109, 56)' }} >
                            <img src="https://go-assets.ibcdn.com/u/GI/images/1720953427381-coupleFreindlyV2.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(255, 109, 56)' }} />
                            <span>Couple Friendly</span>
                          </div>
                        </div>
                        <div className="HoverPersuasionstyles__HoverCardOuter-sc-8xv4x3-0 cwgsXw">
                          <div className="HoverPersuasionstyles__HoverCard-sc-8xv4x3-1 liohMR">
                            <div className="HoverPersuasionstyles__HoverHeader-sc-8xv4x3-2 jQBJPp">
                              <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ padding: '4px' }} >
                                <span>Couple Friendly</span>
                              </div>
                            </div>
                            <ul className="HoverPersuasionstyles__HoverList-sc-8xv4x3-3 cbFZPq">
                              <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(113, 113, 113)' }} >
                                  <img src="https://promos.goibibo.com/Hotels_product/GI/Checkmark.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(113, 113, 113)' }} />
                                  <span>Hassle Free Check-in</span>
                                </div>
                              </li>
                              <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(113, 113, 113)' }} >
                                  <img src="https://promos.goibibo.com/Hotels_product/GI/Checkmark.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(113, 113, 113)' }} />
                                  <span>Private Bookings</span>
                                </div>
                              </li>
                              <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(113, 113, 113)' }} >
                                  <img src="https://promos.goibibo.com/Hotels_product/GI/Checkmark.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(113, 113, 113)' }} />
                                  <span>Unmarried Couples</span>
                                </div>
                              </li>
                              <li className="HoverPersuasionstyles__HoverListItem-sc-8xv4x3-4 dgqzwp">
                                <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(113, 113, 113)' }} >
                                  <img src="https://promos.goibibo.com/Hotels_product/GI/Checkmark.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(113, 113, 113)' }} />
                                  <span>Local Id's Accepted</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="HoverPersuasionstyles__TipUI-sc-8xv4x3-6 HoverPersuasionstyles__TipPositioning-sc-8xv4x3-7 gpMBhB OrsFY">
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="HotelCardV2styles__PropertyBookOptionsWrapper-sc-6przws-30 itwhIy">
                      <div className="PersuasionsUnifstyles__WithHoverWrapper-sc-wislna-5 rCBfm">
                        <div className="PersuasionsUnifstyles__OuterWrapper-sc-wislna-7 jPEMGr">
                          <div className="PersuasionsUnifstyles__PersuasionUIElementsWrapper-sc-wislna-0 jhXONO">
                            <img src="https://gos3.ibcdn.com/Inclusion_Icon_Revamped_SRP-1673507159.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(70, 72, 77)' }} />
                            <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(70, 72, 77)' }} >
                              Breakfast Included
                            </span>
                          </div><div className="PersuasionsUnifstyles__PersuasionUIElementsWrapper-sc-wislna-0 jhXONO">
                            <img src="https://go-assets.ibcdn.com/u/GI/images/1721042967842-thunderIconV2.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(70, 72, 77)' }} />
                            <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(70, 72, 77)' }} >
                              Enjoy 10% off on food &amp; beverages
                            </span>
                          </div>
                          <div className="PersuasionsUnifstyles__PersuasionUIElementsWrapper-sc-wislna-0 jhXONO">
                            <img src="https://gos3.ibcdn.com/Inclusion_Icon_Revamped_SRP-1673507159.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(70, 72, 77)' }} />
                            <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(70, 72, 77)' }} >
                              10% off on session of Spa
                            </span>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <div className="HotelCardV2styles__SeoPersuasionWrapper-sc-6przws-44 fUTpJd"></div>
                  </div>

                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md='3'>
              {/* <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This
                content is a little bit longer.
              </MDBCardText>
              <MDBCardText>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody> */}

              <div className="HotelCardV2styles__SRPCardInfoRightWrapper-sc-6przws-11 iXyQLE">
                <div className="HotelCardV2styles__RightInfoTopWrapper-sc-6przws-12 ZjLwM">
                  <div className="PersuasionsUnifstyles__WithHoverWrapper-sc-wislna-5 rCBfm">
                    <div className="PersuasionsUnifstyles__OuterWrapper-sc-wislna-7 jPEMGr">
                      <div className="PersuasionsUnifstyles__PersuasionUIElementsWrapper-sc-wislna-0 knnNaM">
                        <img src="https://go-assets.ibcdn.com/u/GI/images/1726036804650-BankofferDT.png" alt="" data-testid="" loading="lazy" style={{ width: '1.5rem', height: '1.5rem', fill: 'rgb(34, 34, 34)' }} />
                        <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(34, 34, 34)' }} >
                          Bank offer | 10% off upto ₹1147
                        </span>
                      </div>
                      <div className="PersuasionsUnifstyles__Separator-sc-wislna-15 dcGuDt">
                      </div>
                      <div className="PersuasionsUnifstyles__PersuasionUIElementsWrapper-sc-wislna-0 knnNaM">
                        <span lineclamp="0" className="PersuasionTextUI__PersuasionTextWrapperSpan-sc-mkqdob-1 hQQLPW" style={{ color: 'rgb(70, 72, 77)' }} >
                          Pay using Axis Bank Credit Card to avail the offer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="HotelCardV2styles__PricePersuasionWrapper-sc-6przws-13 fgHUmF">
                  <div className="HotelCardV2styles__RightInfoBottomWrapper-sc-6przws-14 fPOEHs">
                    <div className="HotelCardV2styles__PriceInfoWrapper-sc-6przws-17 eyETDV">
                      <p className="HotelCardV2styles__OriginalPrice-sc-6przws-19 bfeKJJ">
                        {formatCurrency(val.PricePerNight)}
                      </p>
                      <p itemprop="priceRange" className="HotelCardV2styles__OfferPrice-sc-6przws-18 ewBNyB">
                        {formatCurrency(PriceAfterDiscount)}
                      </p>
                    </div>
                    <p className="HotelCardV2styles__TaxText-sc-6przws-16 bGmdZP">
                      +{formatCurrency(TaxValue)} taxes &amp;fees
                    </p>
                    <p className="HotelCardV2styles__TaxText-sc-6przws-16 bGmdZP">
                      <strong>
                        per night
                      </strong>
                    </p>
                  </div>
                  <div className="HotelCardV2styles__BottomWrapper-sc-6przws-15 DBlvW">
                    <div className="PersuasionsUnifstyles__LoggedInWrapper-sc-wislna-20 egatAC">
                      <div className="PersuasionsUnifstyles__WithHoverWrapper-sc-wislna-5 rCBfm">
                        <div className="PersuasionsUnifstyles__OuterWrapper-sc-wislna-7 jPEMGr">
                          <div lineclamp="0" className="PersuasionTextWithImageUI__PersuasionTextWrapperDiv-sc-leqkbd-0 WcUSk" style={{ color: 'rgb(39, 104, 184)', lineHeight: 'normal', fontSize: '12px', fontWeight: '500' }} >
                            <span>
                              Login now &amp; save more
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </MDBCol>
          </MDBRow>
        </MDBCard>
        <div className='viewAllBox'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeJpGZ9hA6ug-yU-SNFYPsHp8d2nkR58qir_qQ9LRRfw4f1HBB9voms0zX0JCyiyvESs&usqp=CAU'
            alt='view all'
            className="viewAllBoxImage"
          />
          <div className='viewAllBoxText'>
            <div>VIEW</div>
            <div>ALL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelView;