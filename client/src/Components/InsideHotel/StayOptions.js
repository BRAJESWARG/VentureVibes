import React from "react";
import "./StayOptions.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const StayOptions = ({ val }) => {

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
        <div className="StayOptions">
            <section id="stays" className="DetailsPagestyles__WrapperSection-sc-5ti44n-3 kCFGJC">
                <div className="DetailsPagestyles__WrapperDiv-sc-5ti44n-4 cOQlJH">
                    <div className="Roomsstyles__RoomsStyledContainer-sc-dijgbk-0 dVudlA">
                        <div className="RoomSelectionHeaderstyles__WrapperDivUpsellFilter-sc-in0xhy-2 jgHSyd">
                            <ul id="details-filters-outer-wrapper" className="FiltersGroupstyles__FilterList-sc-1jwjp2j-0 gexyvD">
                                <p className="FiltersGroupstyles__FilterByText-sc-1jwjp2j-4 zcRkk">Filter Type</p>
                                <li style={{ padding: '1px 0px', border: 'none' }}>
                                    <div id="details-filters-outer-wrapper" customouterwrapperpadding="0px" className="Filterstyles__OuterWrapperDiv-sc-czu6n9-1 dGqyqI">
                                        <div custominnerwrapperpadding="0.7rem 10px" className="Layouts__Row-sc-1yzlivq-0 Filterstyles__InnerWrapperDiv-sc-czu6n9-2 iRIAvw YBPYA">
                                            <div className="Layouts__Row-sc-1yzlivq-0 Filterstyles__ItemWrapperDiv-sc-czu6n9-3 iRIAvw fuYugT">
                                                <input id="Free Cancellation" data-testid="detail-roomSelection-filter-input" type="checkbox" className="Filterstyles__CheckBox-sc-czu6n9-0 Filterstyles__StyledCheckBox-sc-czu6n9-4 iCchch hfyqtt" />
                                                <label for="Free Cancellation" textcolor="#1958B6" className="Filterstyles__TextStyledSpan-sc-czu6n9-5 dVwFRs">Free Cancellation </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="RoomSelectionHeaderstyles__WrapperDivUpsellHeader-sc-in0xhy-1 joSZn">
                            <div className="RoomSelectionHeaderstyles__ItemWrapperDivUpsell-sc-in0xhy-4 kQnyqe">
                                <p className="RoomSelectionHeaderstyles__TextStylingWrapperSpan-sc-in0xhy-3 jFebjy">Stay Type</p>
                            </div>
                            <div className="RoomSelectionHeaderstyles__ItemWrapperDivUpsell-sc-in0xhy-4 fLCXyr">
                                <p className="RoomSelectionHeaderstyles__TextStylingWrapperSpan-sc-in0xhy-3 jFebjy">Stay Options</p>
                            </div>
                            <div className="RoomSelectionHeaderstyles__ItemWrapperDivUpsell-sc-in0xhy-4 fLCXyr">
                                <p className="RoomSelectionHeaderstyles__TextStylingWrapperSpan-sc-in0xhy-3 jFebjy">Price</p>
                            </div>
                        </div>
                        <div className="Roomsstyles__FlexWrap-sc-dijgbk-4 ipMnqG">
                            <div className="Roomsstyles__RightInnerWrapper-sc-dijgbk-3 gVTAjE">
                                <div id="2312" data-testid="detail-roomSelection-room" className="Roomstyles__RoomContainer-sc-1vvh1xt-1 dDVieA">
                                    <div className="Roomstyles__LeftDiv-sc-1vvh1xt-8 dgUxQa">
                                        <div id="2312upselldd">
                                        </div>
                                        <div width="39.7%" className="Roomstyles__RoomTypeStyledWrapper-sc-1vvh1xt-2 dbEVNG">
                                            <div filterheight="0" className="Roomstyles__RoomTypeStickyWrap-sc-1vvh1xt-4 KdsaA">
                                                <h3 filterheight="0" className="Roomstyles__RoomTypeTextStyled-sc-1vvh1xt-3 hEXjuX">Standard Room</h3>
                                                <a href="/#">
                                                    <div className="Layouts__Column-sc-1yzlivq-1 Roomstyles__Column-sc-1vvh1xt-0 Roomstyles__RoomImageWrapper-sc-1vvh1xt-5 gANvcd kyMJfW fqOCbV">
                                                        <img
                                                            // src="https://r1imghtlak.ibcdn.com/f1a506e41bb511ecbd530a58a9feac02.jpg?downsize=428:230" 
                                                            src={val.Thumbnail}
                                                            alt="Shakespeare Corporate Guest House Room Type - Standard Room"
                                                            className="Roomstyles__RoomImageStyled-sc-1vvh1xt-6 UeQCs"
                                                            data-testid="" title="Shakespeare Corporate Guest House Room Type - Standard Room"
                                                        />
                                                        <div className="Roomstyles__RoomImageTag-sc-1vvh1xt-10 fjWUzF">+7 Photos</div>
                                                    </div>
                                                </a>
                                                <div className="Roomstyles__RoomFeaturesWrapper-sc-1vvh1xt-9 gRZdvM">
                                                    <div width="50%" className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw hQzkPE">
                                                        <span alignitems="center" className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 cUApqs">
                                                            <div margintop="6px" padding="0 0.5rem 0 0" className="Roomstyles__RoomTypeColumnIconsContainer-sc-1vvh1xt-7 dTyqtu">
                                                                <img
                                                                    alt="" src="https://gos3.ibcdn.com/roomSizeBlack-1678093548.png" width="22px" />
                                                            </div>
                                                            <span style={{ paddingLeft: '3px', paddingTop: '7px' }}>120 sq.ft (11 sq.mt)</span>
                                                        </span>
                                                    </div>
                                                    <div width="50%" className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw hQzkPE">
                                                        <span alignitems="center" className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 cUApqs">
                                                            <div margintop="6px" padding="0 0.5rem 0 0" className="Roomstyles__RoomTypeColumnIconsContainer-sc-1vvh1xt-7 dTyqtu">
                                                                <img alt="" src="https://gos3.ibcdn.com/bedBlackIcon-1678093474.png" width="22px" />
                                                            </div>
                                                            <span style={{ paddingLeft: '3px', paddingTop: '7px' }}>Queen Bed</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* <div className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw tbBNw">
                                                    <span className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 fTPZGc">
                                                        <a href="/" className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 bmajuy" style={{ marginTop: '12px', fontWeight: 'bold' }}>View More Details</a>
                                                    </span>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="RoomFlavorsstyles__RoomFlavorsContainer-sc-19znpmi-0 gIXzUC room-flavor-container" flexgrowshrink="2">
                                            <div data-testid="detail-roomSelection-room-flavor" className="RoomFlavorstyles__RoomFlavorWrap-sc-90vv8b-9 gIPmqX">
                                                <div className="RoomFlavorstyles__RoomFlavorColumn-sc-90vv8b-0 gpDZNN">
                                                    <div className="RoomFlavorstyles__RoomHeadingContainer-sc-90vv8b-3 dSSarT">
                                                        <h4 id="room-options-name" className="RoomFlavorstyles__RoomOptionsHeadingTextStyle-sc-90vv8b-2 kRqFEd">1. Room Only</h4>
                                                    </div>
                                                    <div className="RoomFlavorstyles__RoomOptionsBody-sc-90vv8b-4 gXrlaP">
                                                        <div style={{ paddingTop: '11px' }}>
                                                            <div style={{ visibility: 'hidden' }}>
                                                                <div display="block" className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw bjlFDh">
                                                                    <span className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 fTPZGc">
                                                                        <div className="RoomFlavorstyles__BulletPointOuter-sc-90vv8b-20 fRdwtL">
                                                                            <span className="RoomFlavorstyles__BulletPoint-sc-90vv8b-21 hBwFYT">
                                                                            </span>
                                                                        </div>
                                                                        <span style={{ width: '300px' }}>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw tbBNw">
                                                                    <span color="#d0011b" alignitems="center" className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 fLeLsQ">
                                                                        <div className="RoomFlavorstyles__RoomOptionsIconContainer-sc-90vv8b-34 hCsmZX">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" width="0.8rem" height="0.8rem" fill="#d0011b" className="HappyCloseIcon-sc-nbfb2j-0 iRqvzU">
                                                                                <g fill="none">
                                                                                    <path d="M-2-2h16v16H-2z">
                                                                                    </path>
                                                                                    <path d="M.854 9.814a.641.641 0 0 0 .905.906l3.952-3.952a.1.1 0 0 1 .076-.031q.044 0 .075.031l3.952 3.952a.64.64 0 1 0 .905-.905L6.768 5.862a.1.1 0 0 1-.031-.075q0-.045.031-.076L10.72 1.76a.64.64 0 1 0-.906-.905l-3.952 3.95a.1.1 0 0 1-.075.032.1.1 0 0 1-.076-.032L1.76.855a.64.64 0 0 0-.905.904l3.951 3.952q.031.031.032.076a.1.1 0 0 1-.032.075L.855 9.814z">
                                                                                    </path>
                                                                                </g>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="RoomFlavorstyles__CancellationPolicyContainer-sc-90vv8b-35 iUTaYc">
                                                                            <span>Non-Refundable</span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="RoomFlavorstyles__CancellationPolicyContainer-sc-90vv8b-35 iUTaYc">
                                                            <a href="/" className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 RoomFlavorstyles__ViewPlanDetailsPoliciesBtn-sc-90vv8b-41 bmajuy iZHNjh">View plan details &amp; policies</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="RoomFlavorstyles__RoomFlavorColumn-sc-90vv8b-0 gpDZNN">
                                                    <span className="RoomFlavorstyles__OuterBlockWrapper-sc-90vv8b-38 dZPLdY">
                                                        <div textcolor="#ffffff" bgcolor="#e63148" className="RoomFlavorstyles__PercentageOffWrapperDiv-sc-90vv8b-39 dVZNvc">40 % off</div>
                                                        <span className="RoomFlavorstyles__PercentageLabelStyles-sc-90vv8b-40 eVznBG">
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <span className="RoomFlavorstyles__StrikeThroughPersuasionPriceTextStyled-sc-90vv8b-12 ipTqZy">{formatCurrency(val.PricePerNight)}</span>
                                                        <div className="RoomFlavorstyles__ActualPriceTextStyled-sc-90vv8b-13 huWnMY">
                                                            {formatCurrency(PriceAfterDiscount)}
                                                        </div>
                                                        <span className="RoomFlavorstyles__TaxesTextStyled-sc-90vv8b-14 bZeyYo">+ {formatCurrency(TaxValue)} taxes &amp; fees</span>
                                                        <p className="RoomFlavorstyles__PerRoomNightTextStyled-sc-90vv8b-15 jvcZpx">
                                                            <strong className="RoomPerNightUIstyles__RoomCountText-sc-1clmiys-0 jvAZfA">1  room</strong>
                                                            <span style={{ paddingLeft: '2px' }}>per night</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button data-testid="selectRoomBtn" className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 RoomFlavorstyles__ButtonWrapper-sc-90vv8b-16 cYhrVX fhJGsp">Select  room</button>
                                                        {/* <a href="/" className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 bmajuy">
                                                            <span className="RoomFlavorstyles__LoginForMore-sc-90vv8b-42 eBotoi">Login Now to unlock best deals and offers!</span>
                                                        </a> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-testid="detail-roomSelection-room-flavor" className="RoomFlavorstyles__RoomFlavorWrap-sc-90vv8b-9 hEkfgc">
                                                <div className="RoomFlavorstyles__RoomFlavorColumn-sc-90vv8b-0 gpDZNN">
                                                    <div className="RoomFlavorstyles__RoomHeadingContainer-sc-90vv8b-3 dSSarT">
                                                        <h4 id="room-options-name" className="RoomFlavorstyles__RoomOptionsHeadingTextStyle-sc-90vv8b-2 kRqFEd">2. Room Only | Free Cancellation</h4>
                                                    </div>
                                                    <div className="RoomFlavorstyles__RoomOptionsBody-sc-90vv8b-4 gXrlaP">
                                                        <div style={{ paddingTop: '11px' }}>
                                                            <div style={{ visibility: 'hidden' }}>
                                                                <div display="block" className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw bjlFDh">
                                                                    <span className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 fTPZGc">
                                                                        <div className="RoomFlavorstyles__BulletPointOuter-sc-90vv8b-20 fRdwtL">
                                                                            <span className="RoomFlavorstyles__BulletPoint-sc-90vv8b-21 hBwFYT">
                                                                            </span>
                                                                        </div>
                                                                        <span style={{ width: '300px' }}>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="Layouts__Row-sc-1yzlivq-0 RoomInfoText__RoomTextInfoWrapperStyled-sc-1bg35eu-0 iRIAvw tbBNw">
                                                                    <span color="#00b318" alignitems="center" className="RoomInfoText__RoomInfoTextStyled-sc-1bg35eu-1 hqciuS">
                                                                        <div className="RoomFlavorstyles__RoomOptionsIconContainer-sc-90vv8b-34 hCsmZX">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" fill="#18A160" width="0.8rem" height="0.8rem" className="HappyTickMarkIcon-sc-z2gohj-0 cliXjl">
                                                                                <path d="M7.712 13.5a1.65 1.65 0 0 1-1.203.669h-.132c-.437 0-.857-.174-1.165-.484l-4.75-4.29a1.648 1.648 0 0 1 2.332-2.33l3.12 2.663a.33.33 0 0 0 .499-.038L13.008.693a1.648 1.648 0 1 1 2.659 1.949z">
                                                                                </path>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="RoomFlavorstyles__CancellationPolicyContainer-sc-90vv8b-35 iUTaYc">
                                                                            <span>Free Cancellation before ‪15 Apr 11:59 AM‬</span>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="RoomFlavorstyles__CancellationPolicyContainer-sc-90vv8b-35 iUTaYc">
                                                            <a href="/" className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 RoomFlavorstyles__ViewPlanDetailsPoliciesBtn-sc-90vv8b-41 bmajuy iZHNjh">View plan details &amp; policies</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="RoomFlavorstyles__RoomFlavorColumn-sc-90vv8b-0 gpDZNN">
                                                    <span className="RoomFlavorstyles__OuterBlockWrapper-sc-90vv8b-38 dZPLdY">
                                                        <div textcolor="#ffffff" bgcolor="#e63148" className="RoomFlavorstyles__PercentageOffWrapperDiv-sc-90vv8b-39 dVZNvc">40 % off</div>
                                                        <span className="RoomFlavorstyles__PercentageLabelStyles-sc-90vv8b-40 eVznBG">
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <span className="RoomFlavorstyles__StrikeThroughPersuasionPriceTextStyled-sc-90vv8b-12 ipTqZy">{formatCurrency(val.PricePerNight * 1.5)}</span>
                                                        <div className="RoomFlavorstyles__ActualPriceTextStyled-sc-90vv8b-13 huWnMY">
                                                            {formatCurrency(PriceAfterDiscount * 1.5)}
                                                        </div>
                                                        <span className="RoomFlavorstyles__TaxesTextStyled-sc-90vv8b-14 bZeyYo">+ {formatCurrency(TaxValue * 1.5)} taxes &amp; fees</span>
                                                        <p className="RoomFlavorstyles__PerRoomNightTextStyled-sc-90vv8b-15 jvcZpx">
                                                            <strong className="RoomPerNightUIstyles__RoomCountText-sc-1clmiys-0 jvAZfA">1  room</strong>
                                                            <span style={{ paddingLeft: '2px' }}>per night</span>
                                                            {/* 9679329707 */}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <button data-testid="selectRoomBtn" className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 RoomFlavorstyles__ButtonWrapper-sc-90vv8b-16 cYhrVX fhJGsp">Select  room</button>
                                                        {/* <a href="/" className="dwebCommonstyles__PrimaryLink-sc-112ty3f-11 bmajuy">
                                                            <span className="RoomFlavorstyles__LoginForMore-sc-90vv8b-42 eBotoi">Login Now to unlock best deals and offers!</span>
                                                        </a> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="RoomFlavorsstyles__StylingFillerContainer-sc-19znpmi-1 kmYtPV">
                                                <div className="RoomFlavorsstyles__StylingFillerColumn-sc-19znpmi-2 bPJttq">
                                                </div>
                                                <div className="RoomFlavorsstyles__StylingFillerColumn-sc-19znpmi-2 bPJttq">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StayOptions;