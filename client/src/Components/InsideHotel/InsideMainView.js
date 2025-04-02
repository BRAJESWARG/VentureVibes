import React, { useState } from 'react'
import "./InsideMainView.css";
import {
    // MDBCard,
    // MDBCardTitle,
    // MDBCardText,
    // MDBCardBody,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

function InsideMainView({ val }) {

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

    const Guest = (val) => {
        return val.Adults + val.Child
    }

    return (
        <div className='InsideMainView'>
            <div className='InsideMainViewChild'>
                <div>
                    <MDBRow className='g-0'>
                        <div fixedheight="5" className="HotelInfostyles__CenterDiv-sc-138dfbx-0 cSraKB">
                            <div className="HotelInfostyles__RatingOuterWrapper-sc-138dfbx-9 flayJI">
                                <div className="HotelInfostyles__StarRatingContainer-sc-138dfbx-7 bYcbLl">
                                    5
                                    <span itemscope="" itemprop="starRating" itemtype="http://schema.org/Rating">
                                        <meta itemprop="ratingValue" content="1" />
                                        <span className="HotelRatingStars__StarWrapper-sc-1kvldzg-1 jZQKNP">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" className="RatingStarIcon-sc-1lv0lb2-0 HotelRatingStars__StarIcon-sc-1kvldzg-0 RxyTX ifSBNC">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M-5-5h24v24H-5z">
                                                    </path>
                                                    <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="HotelInfostyles__Dot-sc-138dfbx-8 liAKvM">
                                        ·
                                    </div>
                                    Hotel
                                </div>
                            </div>
                            <div className="HotelInfostyles__CoupleFriendlyTagContainer-sc-138dfbx-1 cPsVXn">
                                <span className="PersuasionHoverTextstyles__WrapperDiv-sc-1c06rw1-14 jRhIkX">
                                    <span type="Couple Friendly Persuasion" wrapperstyles="" className="PersuasionHoverTextstyles__HoverTargetWrapperDiv-sc-1c06rw1-2 gTXKBu">
                                        <div style={{ border: '1px solid #FF6D38', templatetype: '0', hashover: '[object Object]', color: '#ff6d38', bgcolor: '#ffffff' }} type="Couple Friendly Persuasion" className="PersuasionHoverTextstyles__TextWrapperSpan-sc-1c06rw1-15 lgRJUY">
                                            <span className="PersuasionHoverTextstyles__TextLabelIconContainer-sc-1c06rw1-20 edcLrh">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="1.6rem" width="1.6rem" fill="#ff6d38" margin="" className="CoupleFriendlyIcon-sc-1akp97f-0 bIgRch">
                                                    <path d="M23.333 4.309A4.133 4.133 0 0 0 19.805.025a3.78 3.78 0 0 0-3.539 1.627.333.333 0 0 1-.541 0A3.77 3.77 0 0 0 12.194.025a4.133 4.133 0 0 0-3.528 4.284c0 3.236 4.564 7.081 6.533 8.585.473.37 1.137.37 1.611 0 1.957-1.503 6.523-5.349 6.523-8.585M11.155 24.507a.335.335 0 0 1-.044-.566 5.866 5.866 0 1 0-6.888 0 .334.334 0 0 1-.044.567A7.67 7.67 0 0 0 0 31.335c0 .368.298.667.667.667h14a.667.667 0 0 0 .667-.667 7.68 7.68 0 0 0-4.179-6.827zM7.667 22.4a3.2 3.2 0 0 1-3.035-4.207.333.333 0 0 1 .496-.174 7.509 7.509 0 0 0 5.337 1.073.33.33 0 0 1 .281.081.34.34 0 0 1 .108.267 3.2 3.2 0 0 1-3.188 2.96zM27.733 24.892a.667.667 0 0 0-.839.28l-1.611 2.8a.335.335 0 0 1-.579 0l-1.611-2.8a.667.667 0 0 0-.839-.28 7.01 7.01 0 0 0-4.256 6.441c0 .368.298.667.667.667h12.667a.667.667 0 0 0 .667-.667 7.01 7.01 0 0 0-4.267-6.441z">
                                                    </path>
                                                    <path d="M19.333 18.977a4.1 4.1 0 0 1-.933 3.136 1.333 1.333 0 1 0 1.866 1.896 5 5 0 0 0 .557-.651.334.334 0 0 1 .488-.054 5.654 5.654 0 0 0 7.368 0 .338.338 0 0 1 .488.056q.252.348.557.651a1.333 1.333 0 1 0 1.875-1.897 4.09 4.09 0 0 1-.933-3.136 5.667 5.667 0 1 0-11.334 0zm2.964.036a4.6 4.6 0 0 0 1.212-.373c.481-.226.9-.564 1.221-.987a.335.335 0 0 1 .533 0c.322.422.741.761 1.221.987.385.18.793.306 1.212.373.173.034.29.196.267.371a2.998 2.998 0 0 1-5.949 0 .335.335 0 0 1 .283-.371">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span title="">Couple Friendly</span>
                                        </div>
                                        <div direction="bottom" className="PersuasionHoverTextstyles__HiddenDropdownWrapperDiv-sc-1c06rw1-1 fNdWoQ persuasion-hover">
                                            <div className="PersuasionHoverTextstyles__TopDiv-sc-1c06rw1-3 slvVL">
                                                <div style={{ color: '#141823', bgcolor: '#fff4eb' }} className="Layouts__Column-sc-1yzlivq-1 PersuasionHoverTextstyles__TextBlockDropDownWrapper-sc-1c06rw1-8 gANvcd dBFeZI">
                                                    <div style={{ color: '#ff6d38', bgcolor: '#ffffff' }} className="Layouts__Row-sc-1yzlivq-0 PersuasionHoverTextstyles__TextBlockDDHeading-sc-1c06rw1-10 iRIAvw tmTFo">
                                                        <span style={{ color: '#ff6d38', bgcolor: '#ffffff' }} className="PersuasionHoverTextstyles__TextBlockDDHeadingSpan-sc-1c06rw1-11 hzRtce">
                                                            <span className="PersuasionHoverTextstyles__MiniIconWrapperSpan-sc-1c06rw1-18 bCjtdu">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="1.2rem" width="1.2rem" fill="#ff6d38" className="CoupleFriendlyIcon-sc-1akp97f-0 fzjEht">
                                                                    <path d="M23.333 4.309A4.133 4.133 0 0 0 19.805.025a3.78 3.78 0 0 0-3.539 1.627.333.333 0 0 1-.541 0A3.77 3.77 0 0 0 12.194.025a4.133 4.133 0 0 0-3.528 4.284c0 3.236 4.564 7.081 6.533 8.585.473.37 1.137.37 1.611 0 1.957-1.503 6.523-5.349 6.523-8.585M11.155 24.507a.335.335 0 0 1-.044-.566 5.866 5.866 0 1 0-6.888 0 .334.334 0 0 1-.044.567A7.67 7.67 0 0 0 0 31.335c0 .368.298.667.667.667h14a.667.667 0 0 0 .667-.667 7.68 7.68 0 0 0-4.179-6.827zM7.667 22.4a3.2 3.2 0 0 1-3.035-4.207.333.333 0 0 1 .496-.174 7.509 7.509 0 0 0 5.337 1.073.33.33 0 0 1 .281.081.34.34 0 0 1 .108.267 3.2 3.2 0 0 1-3.188 2.96zM27.733 24.892a.667.667 0 0 0-.839.28l-1.611 2.8a.335.335 0 0 1-.579 0l-1.611-2.8a.667.667 0 0 0-.839-.28 7.01 7.01 0 0 0-4.256 6.441c0 .368.298.667.667.667h12.667a.667.667 0 0 0 .667-.667 7.01 7.01 0 0 0-4.267-6.441z">
                                                                    </path>
                                                                    <path d="M19.333 18.977a4.1 4.1 0 0 1-.933 3.136 1.333 1.333 0 1 0 1.866 1.896 5 5 0 0 0 .557-.651.334.334 0 0 1 .488-.054 5.654 5.654 0 0 0 7.368 0 .338.338 0 0 1 .488.056q.252.348.557.651a1.333 1.333 0 1 0 1.875-1.897 4.09 4.09 0 0 1-.933-3.136 5.667 5.667 0 1 0-11.334 0zm2.964.036a4.6 4.6 0 0 0 1.212-.373c.481-.226.9-.564 1.221-.987a.335.335 0 0 1 .533 0c.322.422.741.761 1.221.987.385.18.793.306 1.212.373.173.034.29.196.267.371a2.998 2.998 0 0 1-5.949 0 .335.335 0 0 1 .283-.371">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                            <span type="Couple Friendly Persuasion" className="PersuasionHoverTextstyles__PersuasionHoverTitleSpan-sc-1c06rw1-0 dxCQBs">Couple Friendly Hotels</span>
                                                        </span>
                                                    </div>
                                                    <div className="PersuasionHoverTextstyles__IconWrapperDiv-sc-1c06rw1-16 hTvKaA">
                                                        <div className="PersuasionHoverTextstyles__RoundBoxWrap-sc-1c06rw1-9 dEygOn">
                                                            <svg viewBox="0 0 16 16" height="1.2rem" width="1.2rem" fill="#ff6d38" className="RoundedCheckbox-sc-4skzta-0 jmzhkB">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="M-4-4h24v24H-4z">
                                                                    </path>
                                                                    <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p className="PersuasionHoverTextstyles__TextWrapper-sc-1c06rw1-17 bCWWx">Hassle-Free Check-in</p>
                                                    </div>
                                                    <div className="PersuasionHoverTextstyles__IconWrapperDiv-sc-1c06rw1-16 hTvKaA">
                                                        <div className="PersuasionHoverTextstyles__RoundBoxWrap-sc-1c06rw1-9 dEygOn">
                                                            <svg viewBox="0 0 16 16" height="1.2rem" width="1.2rem" fill="#ff6d38" className="RoundedCheckbox-sc-4skzta-0 jmzhkB">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="M-4-4h24v24H-4z">
                                                                    </path>
                                                                    <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p className="PersuasionHoverTextstyles__TextWrapper-sc-1c06rw1-17 bCWWx">Private Bookings</p>
                                                    </div>
                                                    <div className="PersuasionHoverTextstyles__IconWrapperDiv-sc-1c06rw1-16 hTvKaA">
                                                        <div className="PersuasionHoverTextstyles__RoundBoxWrap-sc-1c06rw1-9 dEygOn">
                                                            <svg viewBox="0 0 16 16" height="1.2rem" width="1.2rem" fill="#ff6d38" className="RoundedCheckbox-sc-4skzta-0 jmzhkB">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="M-4-4h24v24H-4z">
                                                                    </path>
                                                                    <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p className="PersuasionHoverTextstyles__TextWrapper-sc-1c06rw1-17 bCWWx">Unmarried Couples</p>
                                                    </div>
                                                    <div className="PersuasionHoverTextstyles__IconWrapperDiv-sc-1c06rw1-16 hTvKaA">
                                                        <div className="PersuasionHoverTextstyles__RoundBoxWrap-sc-1c06rw1-9 dEygOn">
                                                            <svg viewBox="0 0 16 16" height="1.2rem" width="1.2rem" fill="#ff6d38" className="RoundedCheckbox-sc-4skzta-0 jmzhkB">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="M-4-4h24v24H-4z">
                                                                    </path>
                                                                    <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <p className="PersuasionHoverTextstyles__TextWrapper-sc-1c06rw1-17 bCWWx">Local IDs Accepted</p>
                                                    </div>
                                                </div>
                                                <div style={{ bgcolor: '#fff4eb', direction: 'bottom' }} className="PersuasionHoverTextstyles__TipUI-sc-1c06rw1-4 PersuasionHoverTextstyles__TipPositioning-sc-1c06rw1-6 ibOANv eVOhNU">
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </MDBRow>
                    <MDBRow className='g-0'>
                        <MDBCol md='9' className=''>
                            <MDBRow className='g-0'>
                                <MDBCol md='7'>
                                    <div className=''>
                                        <div className=''>
                                            <h1 itemprop="name" className="dwebCommonstyles__SectionHeaderSEO-sc-112ty3f-7 HotelName__HotelNameText-sc-1o26jsk-0 AoXaW bHgRLt">
                                                Pride Plaza Hotel Aerocity New Delhi
                                            </h1>
                                        </div>
                                        <a href="/#" width="100%" className="TriggerActionText__TriggerAnchorText-sc-1vbd2op-0 tzmmd">
                                            <div className="HotelAddressText__HotelAddressTextDiv-sc-1lcrowf-2 cUDamO">
                                                <span className="HotelAddressText__AddressTextLeftSpan-sc-1lcrowf-3 gkwTFY">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="16" className="LocationInfoIcon-sc-vwm4pc-0 hKTTdu">
                                                        <g fill="none" fill-rule="evenodd">
                                                            <path fill="#2276E3" d="M9.333 6a.667.667 0 0 0 1.334 0V2.21a.167.167 0 0 1 .263-.134l2.933 2.093a.33.33 0 0 1 .137.27v1.56A.666.666 0 1 0 15.333 6V4.095c0-.323-.156-.626-.418-.814L10.582.187a.995.995 0 0 0-1.163 0L5.552 2.949a.33.33 0 0 1-.4-.007L1.618.214A1 1 0 0 0 .563.1 1 1 0 0 0 0 1v9.924c0 .314.149.61.4.8l4.338 3.254a1 1 0 0 0 1.18.013l2.917-2.084a.666.666 0 0 0-.774-1.084l-1.794 1.284a.17.17 0 0 1-.172.012.17.17 0 0 1-.092-.145V4.438c0-.108.052-.209.14-.271l2.933-2.093a.167.167 0 0 1 .263.133zm-4.666 6.924c0 .063-.036.12-.092.149a.17.17 0 0 1-.175-.016l-2.933-2.2a.33.33 0 0 1-.134-.266V2.018c0-.063.036-.12.092-.15a.17.17 0 0 1 .175.017L4.533 4.15a.33.33 0 0 1 .134.267z">
                                                            </path>
                                                            <path fill="#FF3A5C" d="M12.667 7.333a3.34 3.34 0 0 0-3.334 3.334c0 2.114 2.972 5.109 3.098 5.236a.335.335 0 0 0 .472 0c.126-.127 3.097-3.122 3.097-5.236a3.337 3.337 0 0 0-3.333-3.334m0 4.5a1.166 1.166 0 1 1-.002-2.332 1.166 1.166 0 0 1 .002 2.332">
                                                            </path>
                                                        </g>
                                                    </svg>
                                                    <address itemscope="" itemprop="address" itemtype="http://schema.org/PostalAddress" className="HotelAddressText__HotelAddressStyled-sc-1lcrowf-1 gZCrux">
                                                        <small>Park Street, Kolkata</small>
                                                        <span itemprop="postalCode" className="dwebCommonstyles__HiddenElement-sc-112ty3f-17 cJirRI">
                                                            110037
                                                        </span>
                                                        <span itemprop="addressLocality" className="dwebCommonstyles__HiddenElement-sc-112ty3f-17 cJirRI">
                                                            Aerocity
                                                        </span>
                                                        <span itemprop="addressRegion" className="dwebCommonstyles__HiddenElement-sc-112ty3f-17 cJirRI">
                                                            Delhi
                                                        </span>
                                                        <span itemprop="addressCountry" className="dwebCommonstyles__HiddenElement-sc-112ty3f-17 cJirRI">
                                                            India
                                                        </span>
                                                    </address>
                                                </span>
                                                <span className="HotelAddressText__PersuationAddressOuterSpan-sc-1lcrowf-7 YLmOj">
                                                    |
                                                    <img
                                                        src="https://gos3.ibcdn.com/idea-1626422541.png"
                                                        alt="" className="HotelAddressText__HappyLocationNewIcon-sc-1lcrowf-0 bQyVyb" data-testid=""
                                                    />
                                                    <span className="HotelAddressText__PersuationAddress-sc-1lcrowf-6 pSgkl">
                                                        <small> 4 minutes walk to Shakespear Sarani, Kolkata </small>
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
                                        <div className=''>
                                            <div className=''>

                                            </div>
                                            <div className=''>

                                            </div>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md='5'>
                                    <div className="HotelInfostyles__ReviewInfoContainer-sc-138dfbx-4 joohaA">
                                        <a href="/#" className="TriggerActionText__TriggerAnchorText-sc-1vbd2op-0 gnNNeO">
                                            <div className="ReviewInfostyles__FlexItemColumn-sc-extx54-16 cVXDiL">
                                                <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPdB">
                                                    <div className="ReviewInfostyles__RatingOuterWrapper-sc-extx54-17 bHFLpI">
                                                        <div className="ReviewInfostyles__ImageWrapper-sc-extx54-18 cjxKhb">
                                                            <div className="ReviewInfostyles__NewViewMap-sc-extx54-13 evERWw">
                                                                <img src="https://gos3.ibcdn.com/mapPin-1638795585.png" alt='' className="ReviewInfostyles__NewMapPin-sc-extx54-14 jqwsUI" />
                                                            </div>
                                                            <div className="ReviewInfostyles__NewViewMapCTA-sc-extx54-15 iINLVi">View Map</div>
                                                        </div>
                                                    </div>
                                                    <div className="ReviewInfostyles__ReviewOuterWrapper-sc-extx54-19 dtSHLP">
                                                        <div className="ReviewInfostyles__ReviewInnerWrapper-sc-extx54-20 iYaNAT">
                                                            <div bgcolor="#48b41c" className="ReviewInfostyles__RatingWrapper-sc-extx54-21 kjYceN">
                                                                <span color="#1ABA32" className="ReviewInfostyles__ReviewNumber-sc-extx54-3 hyxOAP">
                                                                    <span itemprop="worstRating" content="1">
                                                                    </span>
                                                                    <span itemprop="ratingValue">{val.StarRating}</span>
                                                                    <span>/</span>
                                                                    <span itemprop="bestRating" className="ReviewInfostyles__OutOfNumberForReview-sc-extx54-6 gnnIdA">5</span>
                                                                </span>
                                                            </div>
                                                            <div className="ReviewInfostyles__NewViewMapCTA-sc-extx54-15 iINLVi">View Reviews</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className='g-0' >
                                <MDBCol md='8'>
                                    <div className="CaptivateGallerystyles__ImageGalleryWrapper-sc-1dvzj0j-0 iYvHLx">
                                        <div className="CaptivateGallerystyles__AltAccoCaptivateBannerContainer-sc-1dvzj0j-1 bXQfQi">
                                            <div className="CaptivateBannerGallerystyles__CaptivateBannerGallery-sc-dn43rp-1 kNYAlG">
                                                <div className="CaptivateBannerGallerystyles__CaptivateBannerOuterContainer-sc-dn43rp-11 dJYjNs">
                                                    <div className="CaptivateBannerGallerystyles__WideImagePreviewWrap-sc-dn43rp-6 fJkWyA">
                                                        <div className="CaptivateBannerGallerystyles__CaptivateGalleryOverlayTabWrap-sc-dn43rp-13 dKjUdJ">
                                                            <div className="CaptivateBannerGallerystyles__CaptivateGalleryOverlayTab-sc-dn43rp-14 eLINGK">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" margin="0 .5rem 0 0" className="HappyBuildingIcon-sc-sv2xip-0 pWtdx">
                                                                    <path d="M10.167 2.667c.368 0 .666.298.666.666v11c0 .184.15.334.334.334h.333c.184 0 .333-.15.333-.334V9.167c0-.369.299-.667.667-.667V8a.5.5 0 0 1 1 0v.5h1c.368 0 .667.298.667.667V14.5c0 .092.074.167.166.167a.666.666 0 1 1 0 1.333H.667a.666.666 0 1 1 0-1.333.166.166 0 0 0 .166-.167V9.167c0-.369.299-.667.667-.667h1V8a.5.5 0 0 1 1 0v.5c.368 0 .667.298.667.667v5.166c0 .184.149.334.333.334h.333c.184 0 .334-.15.334-.334v-11c0-.368.298-.666.666-.666zM9.5 12.333h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-.167-2.666H6.667a.5.5 0 0 0 0 1h2.666a.5.5 0 0 0 0-1m0-2.667H6.667a.5.5 0 0 0 0 1h2.666a.5.5 0 0 0 0-1m0-2.667H6.667a.5.5 0 0 0 0 1h2.666a.5.5 0 0 0 0-1M8.5 0c.368 0 .667.298.667.667v.666c0 .184-.15.334-.334.334H7.167a.335.335 0 0 1-.334-.334V.667C6.833.298 7.132 0 7.5 0z">
                                                                    </path>
                                                                </svg>
                                                                <p>Photos by Property (41)</p>
                                                            </div>
                                                            <div className="CaptivateBannerGallerystyles__CaptivateGalleryOverlayTab-sc-dn43rp-14 eLINGK">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#FFFFFF" margin="0 .5rem 0 0" className="HappyGuestCameraIcon-sc-1rlytel-0 kMWgnD">
                                                                    <path fill="none" fill-rule="nonzero" d="M15.298 12.675c-.49-1.022-2.16-1.663-4.473-2.55l-.607-.233c-.076-.03-.152-.159-.2-.348a2.7 2.7 0 0 1 .072-1.507c.688-.791 1.363-1.77 1.363-4.21C11.453 1.184 9.72.002 8 .002c-1.403-.05-2.682.832-3.187 2.199a.18.18 0 0 0 .018.16.16.16 0 0 0 .138.076h.619a1.82 1.82 0 0 1 1.437.639.17.17 0 0 0 .122.056h.186c1.105 0 2 .934 2 2.087v3.825c0 1.153-.895 2.087-2 2.087h-4.6a.2.2 0 0 0-.066.015 3.87 3.87 0 0 0-1.966 1.53A7.6 7.6 0 0 0 0 15.652c0 .192.15.348.333.348h15.334a.34.34 0 0 0 .333-.348 7.6 7.6 0 0 0-.702-2.977M7.04 10.667c.53 0 .96-.485.96-1.083v-3.97c0-.597-.43-1.082-.96-1.082h-.666a.16.16 0 0 1-.14-.094c-.15-.389-.493-.637-.87-.628H3.916c-.377-.009-.72.24-.87.628a.16.16 0 0 1-.14.094H.96c-.53 0-.96.485-.96 1.082v3.97c0 .598.43 1.083.96 1.083zM5.09 5.333c.804 0 1.455.682 1.455 1.524s-.65 1.524-1.454 1.524-1.455-.682-1.455-1.524.651-1.524 1.455-1.524z">
                                                                    </path>
                                                                </svg>
                                                                <p>Photos by Travellers (9)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div marginbottom="1rem" className="CaptivateBannerGallerystyles__CaptivateBannerGalleryContainer-sc-dn43rp-0 dvXhdS">
                                                        <div className="Carouselstyles__CarouselContainer-sc-1hv3vvl-1 iAowDS">
                                                            <div className="Carouselstyles__CarouselSlider-sc-1hv3vvl-2 jUQFXK">

                                                                <div className="Carouselstyles__SliderWrap-sc-1hv3vvl-3 bRTEOS"
                                                                    style={{ transform: 'transform: translate3d(0px, 0px, 0px);' }}
                                                                >
                                                                    <div className="Carouselstyles__CarouselSlide-sc-1hv3vvl-5 ccUBwm">
                                                                        <div className="dwebCommonstyles__CenteredDivWrap-sc-112ty3f-1 CaptivateBannerGallerystyles__WideImageViewAllPhotosOuter-sc-dn43rp-2 bGKfHf iBqcKR">
                                                                            <button className="prev-button" onClick={handlePrev}>❮</button>
                                                                            {val.Images?.length > 0 && (
                                                                                <img src={val.Images[currentIndex].original} alt="InsideMainView Imageiew" className="InsideMainView-image" />
                                                                            )}
                                                                            <button className="next-button" onClick={handleNext}>❯</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MDBCol>

                                <MDBCol md='4'>
                                    <div className="UGCCardChipsstyles__UGCPersuasions-sc-1wjbdwi-0 fOsFHx">
                                        <div className="VillaDetailsCardstyles__VillaCardWrapper-sc-1de73i2-0 bIHrOU">
                                            <div className="VillaDetailsCardstyles__VillaHeaderWrapper-sc-1de73i2-1 dhebRJ">
                                                <span className="VillaDetailsCardstyles__VillaIconWrapper-sc-1de73i2-2 legDce">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none" className="HappyVillaIcon-sc-txepgq-0 hNgjWe">
                                                        <path fill="#FFC24A" stroke="#195EB7" d="M3.722 13.611h20.333v13.222H3.722zM3.722 13.396V5.43L10.334.85l6.61 4.578v7.967z">
                                                        </path>
                                                        <path fill="#fff" stroke="#195EB7" d="M7.278 18.945h6.111v7.889H7.278z">
                                                        </path>
                                                        <path fill="#195EB7" d="M15.667 18.445H21v3.556h-5.333z">
                                                        </path>
                                                        <path stroke="#195EB7" stroke-width="0.5" d="M18.333 11.5v1.667M20.111 11.5v1.667M21.889 11.5v1.667M23.667 11.5v1.667">
                                                        </path>
                                                        <path stroke="#195EB7" stroke-linecap="round" d="M5.195 6.487 1.346 9.151M15.336 6.37l3.8 2.488">
                                                        </path>
                                                        <path stroke="#195EB7" stroke-width="0.5" d="M17.133 11.812h8.272">
                                                        </path>
                                                        <circle cx="10.333" cy="8.667" r="1.778" fill="#195EB7">
                                                        </circle>
                                                    </svg>
                                                </span>
                                                <h4 className="VillaDetailsCardstyles__VillaHeader-sc-1de73i2-3 kxXWlU">Room in a Homestay</h4>
                                            </div>
                                            <ul className="VillaDetailsCardstyles__VillaListWrapper-sc-1de73i2-5 hRzPvT">
                                                <li className="VillaDetailsCardstyles__VillaListItem-sc-1de73i2-6 gVzTww">
                                                    <p>Bedrooms</p>
                                                    <p className="VillaDetailsCardstyles__ItemLogoWrapper-sc-1de73i2-7 fHkHrn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="20px" fill="none" viewBox="0 0 15 20" className="HappyBedVillaIcon-sc-eyxcmc-0 dEtffJ">
                                                            <path fill="#fff" stroke="#2BAC36" stroke-width="1.5" d="M.75 1A.25.25 0 0 1 1 .75h13a.25.25 0 0 1 .25.25v18a.25.25 0 0 1-.25.25H1A.25.25 0 0 1 .75 19z">
                                                            </path>
                                                            <path fill="inherit" stroke="#2BAC36" stroke-width="1.5" d="M.75 2.129a.75.75 0 0 1 1.002-.707l7 2.5a.75.75 0 0 1 .498.707v10.743c0 .316-.2.6-.498.706l-7 2.5a.75.75 0 0 1-1.002-.706z">
                                                            </path>
                                                            <circle cx="6.591" cy="10.357" r="1.071" fill="#fff">
                                                            </circle>
                                                        </svg>
                                                        <span>1</span>
                                                    </p>
                                                </li>
                                                <li className="VillaDetailsCardstyles__VillaListItem-sc-1de73i2-6 gVzTww">
                                                    <p>Beds</p>
                                                    <p className="VillaDetailsCardstyles__ItemLogoWrapper-sc-1de73i2-7 fHkHrn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 26 16" className="HappyBedsVillaIcon-sc-10c97l3-0 jClWSO">
                                                            <path stroke="#2BAC36" stroke-linecap="round" stroke-width="1.5" d="M.75.75v14.5M1.5 8.5H24a1 1 0 0 1 1 1v5">
                                                            </path>
                                                            <path fill="#fff" stroke="#2BAC36" stroke-width="1.5" d="M9 5a1 1 0 0 1 1-1h9.364A3.636 3.636 0 0 1 23 7.636c0 .201-.163.364-.364.364H10a1 1 0 0 1-1-1z">
                                                            </path>
                                                            <path stroke="#2BAC36" stroke-linecap="round" stroke-width="1.5" d="M24 12H2">
                                                            </path>
                                                            <circle cx="5" cy="6" r="2" fill="#fff" stroke="#2BAC36" stroke-width="1.5">
                                                            </circle>
                                                        </svg>
                                                        <span>1</span>
                                                    </p>
                                                </li>
                                                <li className="VillaDetailsCardstyles__VillaListItem-sc-1de73i2-6 gVzTww">
                                                    <p>Max Guests</p>
                                                    <p className="VillaDetailsCardstyles__ItemLogoWrapper-sc-1de73i2-7 fHkHrn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" fill="none" viewBox="0 0 22 18" className="HappyTwoPeopleOutlined-sc-mcylqu-0 joagdu">
                                                            <path fill="#fff" stroke="#2BAC36" stroke-width="1.5" d="M.764 17.25A4.25 4.25 0 0 1 5 13.35h1a4.25 4.25 0 0 1 4.236 3.9z">
                                                            </path>
                                                            <path fill="#fff" stroke="#2BAC36" stroke-width="1.5" d="M9.916 14.9a4.25 4.25 0 0 1 4.25-4.25h2.833a4.25 4.25 0 0 1 4.25 4.25v2.35H9.916zM19.417 4.5c0 2.058-1.704 3.75-3.834 3.75S11.75 6.558 11.75 4.5 13.453.75 15.583.75s3.834 1.692 3.834 3.75ZM8.417 8.1c0 1.561-1.292 2.85-2.916 2.85S2.584 9.661 2.584 8.1s1.293-2.85 2.917-2.85S8.417 6.539 8.417 8.1Z">
                                                            </path>
                                                        </svg>
                                                        <span>4</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="UGCCardChipsstyles__UGCPersuasionsInnerWrap-sc-1wjbdwi-1 gZXduj">
                                            <div className="UGCChipsCardstyles__UGCCardContainer-sc-o2g5e1-0 DcPSx">
                                                <div className="UGCChipsCardstyles__UGCPersuasionHeadingContainer-sc-o2g5e1-1 irBYur">
                                                    <h3 className="UGCChipsCardstyles__Text_Heading_UGCPersuasion-sc-o2g5e1-2 jmXGx">Amenities &amp; Services</h3>
                                                </div>
                                                <div className="dwebCommonstyles__BaseColumnWrap-sc-112ty3f-2 civGJZ">
                                                    <ul className="UGCChipsCardstyles__AmenitiesList-sc-o2g5e1-5 csJKpm">
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="HouseKeepingIcon-sc-5ioupd-0 clmBJd">
                                                                <path d="M13.261 24.744a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4m5.12-24.32a8.32 8.32 0 0 1 8.32 8.32v16.64c0 .353.287.64.64.64h2.346a1.28 1.28 0 0 1 1.215.876l.852 2.56a1.28 1.28 0 0 1-1.214 1.685H20.3a1.28 1.28 0 0 1-1.214-1.686l.854-2.56.055-.138a1.28 1.28 0 0 1 1.16-.736h2.346a.64.64 0 0 0 .64-.64V8.745a5.76 5.76 0 0 0-11.52 0c0 .353.287.64.64.64.707 0 1.28.573 1.28 1.28v5.126a.64.64 0 0 1-.64.64H3.237a.64.64 0 0 1-.555-.957 7 7 0 0 1 .445-.694 6.56 6.56 0 0 1 4.458-2.765.64.64 0 0 0 .556-.64v-.712c0-.707.573-1.28 1.28-1.28a.64.64 0 0 0 .64-.64 8.32 8.32 0 0 1 8.32-8.32zm-4.48 17.92a.64.64 0 0 1 .64.64v3.237a.64.64 0 0 1-.723.64 5 5 0 0 0-.557-.037 5.12 5.12 0 0 0-5.12 5.12 5 5 0 0 0 .23 1.507.32.32 0 0 1-.305.413H4.035a1.92 1.92 0 0 1-1.828-1.332 19.3 19.3 0 0 1-.778-9.676.64.64 0 0 1 .626-.512z">
                                                                </path>
                                                            </svg>
                                                            <span className="UGCChipsCardstyles__AmenitiesText-sc-o2g5e1-7 jftUfU">Caretaker</span>
                                                        </li>
                                                        <li>
                                                            <svg viewBox="0 0 16 16" className="RoundedCheckbox-sc-4skzta-0 bpsfFU">
                                                                <g fill="none" fill-rule="evenodd">
                                                                    <path d="M-4-4h24v24H-4z">
                                                                    </path>
                                                                    <path fill="#898B91" d="M7.68 0a7.68 7.68 0 1 1 0 15.36A7.68 7.68 0 0 1 7.68 0m4.335 3.922-6.233 6.702-2.454-2.26a.436.436 0 0 0-.622.021.45.45 0 0 0 .022.632l2.556 2.358c.295.28.76.26 1.039-.032l6.326-6.8a.45.45 0 0 0-.011-.632.436.436 0 0 0-.623.011">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                            <span className="UGCChipsCardstyles__AmenitiesText-sc-o2g5e1-7 jftUfU">Housekeeping</span>
                                                        </li>
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" className="HappyWifiIcon-sc-9vspjr-0 xcwlX">
                                                                <path d="M8 11.295a1.794 1.794 0 1 1 0 3.588 1.794 1.794 0 0 1 0-3.588M4.322 8.693A5.2 5.2 0 0 1 9.71 7.465c.74.254 1.411.673 1.965 1.225a.897.897 0 0 1-.634 1.531l-.117-.007a.9.9 0 0 1-.515-.254l-.067-.055-.069-.056a3.41 3.41 0 0 0-4.683.111.9.9 0 0 1-.634.264l-.12-.008a.898.898 0 0 1-.514-1.523M2.293 5.947a8.08 8.08 0 0 1 11.412 0 .9.9 0 0 1 .262.633v.021a.89.89 0 0 1-.893.876l-.118-.008a.9.9 0 0 1-.516-.254 6.286 6.286 0 0 0-8.878 0 .898.898 0 0 1-1.268-1.268zM.263 3.2c4.276-4.267 11.198-4.267 15.474 0a.894.894 0 0 1-.402 1.5.9.9 0 0 1-.866-.232 9.16 9.16 0 0 0-12.939 0A.897.897 0 0 1 .262 3.2z">
                                                                </path>
                                                            </svg>
                                                            <span className="UGCChipsCardstyles__AmenitiesText-sc-o2g5e1-7 jftUfU">Free Wi-Fi</span>
                                                        </li>
                                                    </ul>
                                                    <a href='/#' className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 UGCChipsCardstyles__ViewAllAmenities-sc-o2g5e1-12 bmajuy dpJilB">View all amenities</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md='3'>
                            <div className='rightBox'>
                                <div className="BookingWidgetstyles__BookingWidgetStyleContainer-sc-bwqud6-0 jirlwh">
                                    <p className="BookingWidgetstyles__PriceStartsAtText-sc-bwqud6-1 cFqHdv">Deluxe Cottage Room</p>
                                    <div className="BookingWidgetstyles__PriceInfo-sc-bwqud6-2 jREzVX">
                                        <div className="BookingWidgetstyles__RoomAndPersuasionContainer-sc-bwqud6-11 fKcHGY">
                                            <div className="BookingWidgetstyles__Column-sc-bwqud6-3 dGMLAu">
                                                <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 BookingWidgetstyles__NoOfGuestsContainer-sc-bwqud6-7 lfQUri EYMfX">
                                                    <svg viewBox="0 0 32 32" width="1.4rem" height="1.4rem" fill="#777777" className="UserIcon__UserIconSVG-sc-xqeqn3-0 ccvAEy">
                                                        <path d="M21.185 3.148a7.333 7.333 0 11-10.37 10.371 7.333 7.333 0 0110.37-10.371zM16 17.667c-6.992.008-12.659 5.674-12.667 12.667 0 .368.298.667.667.667h24a.667.667 0 00.667-.667C28.659 23.342 22.993 17.675 16 17.667z">
                                                        </path>
                                                    </svg>
                                                    <p className="BookingWidgetstyles__NoOfGuestsAndRoomsTextStyles-sc-bwqud6-8 eAlRyj">{Guest(val)} Guests</p>
                                                </div>
                                                <div style={{ margin: '0px 5px' }} > | </div>
                                                <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 BookingWidgetstyles__NoOfGuestsContainer-sc-bwqud6-7 lfQUri dCeeKI">
                                                    <svg viewBox="0 0 32 32" width="1.4rem" height="1.4rem" fill="#777777" className="DoubleBedIcon__DoubledBedIconSVG-sc-1hxyafg-0 emEatq">
                                                        <path d="M30 15.667H2a2 2 0 00-2 2V23a1.998 1.998 0 001.5 1.933.667.667 0 01.5.644V27a1.333 1.333 0 002.666 0v-1.333c0-.368.298-.667.667-.667h21.333c.368 0 .667.298.667.667V27a1.333 1.333 0 002.666 0v-1.419a.667.667 0 01.5-.644 2 2 0 001.5-1.937v-5.333a2 2 0 00-2-2zm-26.667-2c0 .368.298.667.667.667h24a.667.667 0 00.667-.667V7a3.333 3.333 0 00-3.333-3.333H6.667A3.333 3.333 0 003.334 7zm5.334-4h2.667c1.191 0 2.292.635 2.888 1.667a.667.667 0 01-.577 1H6.357a.667.667 0 01-.578-1 3.335 3.335 0 012.888-1.667zm12 0h2.667c1.191 0 2.292.635 2.888 1.667a.667.667 0 01-.577 1h-7.288a.667.667 0 01-.578-1 3.335 3.335 0 012.888-1.667z">
                                                        </path>
                                                    </svg>
                                                    <p className="BookingWidgetstyles__NoOfGuestsAndRoomsTextStyles-sc-bwqud6-8 eAlRyj">1 Room</p>
                                                </div>
                                            </div>
                                            <div className="BookingWidgetstyles__PersuasionContainer-sc-bwqud6-12 iZMmzF">
                                                <span className="PersuasionHoverTextstyles__WrapperDiv-sc-6gy5p5-14 kReQCt">
                                                    <span type="" wrapperstyles="" className="PersuasionHoverTextstyles__HoverTargetWrapperDiv-sc-6gy5p5-2 dlgNQP">
                                                        <div padding="0" templatetype="16" color="#77ca7e" bgcolor="" type="" hasbgcolor="" className="PersuasionHoverTextstyles__TextWrapperSpan-sc-6gy5p5-15 bvCGaC">
                                                            <span className="PersuasionHoverTextstyles__TextLabelIconContainer-sc-6gy5p5-20 gjXTgl">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="1.6rem" width="1.6rem" fill="#77ca7e" margin="" className="ShieldIcon-sc-k4m8fy-0 cAYiP">
                                                                    <path d="M29.333 5.033a2.05 2.05 0 0 0-1.187-1.875A29.5 29.5 0 0 0 15.999.666 29.5 29.5 0 0 0 3.852 3.158a2.05 2.05 0 0 0-1.187 1.875v10.183a16.38 16.38 0 0 0 10.437 15.291l1.423.552a4.08 4.08 0 0 0 2.947 0l1.423-.552a16.38 16.38 0 0 0 10.437-15.291zm-4.656 5.952L16.63 21.961a1.67 1.67 0 0 1-1.216.676h-.133c-.442 0-.866-.176-1.179-.489l-6.103-6.1a1.667 1.667 0 0 1 2.358-2.356l4.455 4.456a.333.333 0 0 0 .505-.039l6.667-9.095a1.667 1.667 0 0 1 2.716 1.932l-.028.038z">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                            <span title="">Free Cancellation till 15-Apr-2025 11:59 </span>
                                                        </div>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="BookingWidgetstyles__Column-sc-bwqud6-3 dFmDgp">
                                            <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 lfQUri">
                                                <p className="BookingWidgetstyles__PriceValueStyled-sc-bwqud6-4 csEaWM">{formatCurrency(PriceAfterDiscount)}</p>
                                            </div>
                                            <div className="dwebCommonstyles__FlexCentered-sc-112ty3f-6 lfQUri">+<p className="BookingWidgetstyles__PlusPriceValueText-sc-bwqud6-5 kBdKJl">{formatCurrency(TaxValue)} taxes &amp; fees</p>
                                            </div>
                                            <p className="BookingWidgetstyles__PerRoomPerNightLabel-sc-bwqud6-6 jOwQqP">
                                                <strong className="RoomPerNightUIstyles__RoomCountText-sc-1clmiys-0 jvAZfA">1 Room</strong>
                                                <span style={{ padding: '2px' }}>per night</span>
                                            </p>
                                        </div>
                                    </div>
                                    <span itemprop="priceRange" className="dwebCommonstyles__HiddenElement-sc-112ty3f-17 cJirRI">Hotel Rushabh Home Price Starts at INR {val.PricePerNight}/Night</span>
                                    <button className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 BookingWidgetstyles__ViewRoomOptionsButton-sc-bwqud6-10 cYhrVX cjSXqJ">
                                        <div styleprops="[object Object]" className="TextFieldExpt__Tag-sc-7a7pro-0 hAWoHt">
                                            <span>VIEW ALL ROOM OPTIONS</span>
                                            <div className="BookingWidgetstyles__RightDoubleArrowIconContainer-sc-bwqud6-9 insATV">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 15" width="2rem" height="2rem" fill="#FFFFFF" className="RightDoubleArrow__RightDoubleArrowIcon-sc-1tk0dpe-0 hppXJR">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <path d="M-6-5h24v24H-6z">
                                                        </path>
                                                        <path fill="#2276E3" fill-rule="nonzero" d="m6.345 14.399-.114-.003a.864.864 0 0 1-.637-1.354l3.95-5.678a.29.29 0 0 0 0-.329l-3.95-5.68A.864.864 0 0 1 7.013.37l3.949 5.678c.479.692.479 1.61 0 2.302l-3.95 5.678a.86.86 0 0 1-.781.367zm-5.77-.288a.576.576 0 0 1-.472-.902l3.95-5.678a.58.58 0 0 0 0-.66L.103 1.193A.576.576 0 0 1 .576.288h1.928c.188 0 .365.092.472.247l3.95 5.678c.411.594.411 1.38 0 1.973l-3.95 5.678a.58.58 0 0 1-.472.247z">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        </div>
    )
}

export default InsideMainView;