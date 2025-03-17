import React from "react";
import "./InsideHotel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const GuestReviews = ({ val }) => {

    return (
        <div className="GuestReviews">
            <div id="guest-reviews" data-testid="rnrComponent" class="RNR__RnRStyledWrapper-sc-76u5qf-0 dJAAfN">
                <div class="ReviewNRatingstyles__ContentWrapperDiv-sc-1vffayb-0 hohqDA">
                    <div class="ReviewNRatingstyles__OuterWrapperDiv-sc-1vffayb-1 TSydZ">
                        <div class="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 ReviewNRatingstyles__HeadingWrapperDiv-sc-1vffayb-2 buWWlt hARIFr">
                            <h2 class="dwebCommonstyles__LargeSectionHeader-sc-112ty3f-8 eeTyKB">Guest Reviews &amp; Rating for Shakespeare Corporate Guest House</h2>
                            <div class="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPdB">
                                <div data-testid="displayText" class="DropDownCheckListstyles__HoverTargetWrapperDiv-sc-pxm9-5 iUNbDh">
                                    <span class="DropDownCheckListstyles__FontBoldSpan-sc-pxm9-1 eRtKVZ">Sort By:</span>
                                    <span class="DropDownCheckListstyles__WrapperSpan-sc-pxm9-3 eRxZvC">Latest first<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1rem" height="1rem" margin="0 0 0 0.5rem" class="ArrowDownIcon-sc-1rvxdsg-0 iMkIGJ">
                                        <path d="M16 26a3.07 3.07 0 0 1-2.305-1.04L.614 10.091A2.462 2.462 0 0 1 4.312 6.84l11.439 13.003a.334.334 0 0 0 .501 0L27.691 6.84a2.462 2.462 0 1 1 3.697 3.251L18.311 24.955A3.08 3.08 0 0 1 16.002 26z">
                                        </path>
                                    </svg>
                                    </span>
                                    <div data-testid="criteriaType" class="DropDownCheckListstyles__HiddenDropdownWrapperDiv-sc-pxm9-4 ffDNvQ">
                                        <div class="DropDownCheckListstyles__TopDiv-sc-pxm9-6 hwDnKh">
                                            <div class="DropDownCheckListstyles__SortingDropDownWrapper-sc-pxm9-9 fhvMHk">
                                                <li>
                                                    <span class="DropDownCheckListstyles__FontBoldSpan-sc-pxm9-1 eRtKVZ">Sort By</span>
                                                </li>
                                                <li>
                                                    <input name="Latest first" readonly="" type="radio" class="DropDownCheckListstyles__RadioCheck-sc-pxm9-10 gYdvnt" checked="" />
                                                    <span class="DropDownCheckListstyles__FontBigBold-sc-pxm9-2 jrzcjl">Latest first</span>
                                                </li>
                                                <li>
                                                    <input name="Helpful first" readonly="" type="radio" class="DropDownCheckListstyles__RadioCheck-sc-pxm9-10 gYdvnt" />
                                                    <span class="DropDownCheckListstyles__FontBigBold-sc-pxm9-2 jrzcjl">Helpful first</span>
                                                </li>
                                                <li>
                                                    <input name="Positive first" readonly="" type="radio" class="DropDownCheckListstyles__RadioCheck-sc-pxm9-10 gYdvnt" />
                                                    <span class="DropDownCheckListstyles__FontBigBold-sc-pxm9-2 jrzcjl">Positive first</span>
                                                </li>
                                                <li>
                                                    <input name="Negative first" readonly="" type="radio" class="DropDownCheckListstyles__RadioCheck-sc-pxm9-10 gYdvnt" />
                                                    <span class="DropDownCheckListstyles__FontBigBold-sc-pxm9-2 jrzcjl">Negative first</span>
                                                </li>
                                            </div>
                                            <div class="DropDownCheckListstyles__TipUI-sc-pxm9-7 DropDownCheckListstyles__TipPositioning-sc-pxm9-8 ctgRod krCavP">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ReviewNRatingstyles__ReviewByUserWrapperDiv-sc-1vffayb-8 kfcvgo">
                            <div class="ReviewNRatingstyles__FlexContainerWrap-sc-1vffayb-10 jwAyyK">
                                <div hotelrating="3.9" class="Layouts__Column-sc-1yzlivq-1 GuestRatingstyles__GoRatingBlock-sc-1n5ou7m-0 gANvcd gKPvMO">
                                    <p class="GuestRatingstyles__GoRatingTextWrapper-sc-1n5ou7m-1 ceCnfH">goRating</p>
                                    <p class="GuestRatingstyles__AvgReviewTextWrapperDiv-sc-1n5ou7m-4 gDjAfW">
                                        <span class="GuestRatingstyles__AvgReviewTextWrapper-sc-1n5ou7m-5 jVbauY">{val.StarRating}</span>
                                        <span class="GuestRatingstyles__TotalReviewTextWrapper-sc-1n5ou7m-6 vKLim">/5</span>
                                    </p>
                                    <p data-testid="d-GuestReview-ratingCount" class="GuestRatingstyles__ReviewCountTextWrapper-sc-1n5ou7m-2 ceoSAg">54 Ratings</p>
                                    <div data-testid="d-GuestReview-reviewCount" class="Layouts__Column-sc-1yzlivq-1 GuestRatingstyles__RatingsCountTextWrapper-sc-1n5ou7m-3 gANvcd jBPckU">10 Reviews</div>
                                </div>
                                <div class="Layouts__Row-sc-1yzlivq-0 RatingsBreakupstyles__WrapperDiv-sc-1w4l82j-0 iRIAvwB dsSAii">
                                    <div class="Layouts__Row-sc-1yzlivq-0 iRIAvwB">
                                        <span class="RatingsBreakupstyles__ReviewTypeTextWrapper-sc-1w4l82j-1 epuJRG">5</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" class="RatingStarIcon-sc-1lv0lb2-0 RatingsBreakupstyles__StarDiv-sc-1w4l82j-4 RxyTX cONVXR">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M-5-5h24v24H-5z">
                                                </path>
                                                <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z">
                                                </path>
                                            </g>
                                        </svg>
                                        <div class="Layouts__Row-sc-1yzlivq-0 RatingsBreakupstyles__ProgressBarWrapperDiv-sc-1w4l82j-2 iRIAvwB lfzkXW">
                                            <div class="Layouts__Column-sc-1yzlivq-1 ProgressBarstyles__ProgressBarInnerWrapperDiv-sc-19gddgi-0 gANvcd eWRShh">
                                                <span width="7.5" bgcolor="#11998e" class="ProgressBarstyles__ProgressLine-sc-19gddgi-1 gdcYBO">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="RatingsBreakupstyles__ProgressBarCountWrapper-sc-1w4l82j-3 iQAVTu">15</div>
                                    </div>
                                    <div class="Layouts__Row-sc-1yzlivq-0 iRIAvwB">
                                        <span class="RatingsBreakupstyles__ReviewTypeTextWrapper-sc-1w4l82j-1 epuJRG">4</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" class="RatingStarIcon-sc-1lv0lb2-0 RatingsBreakupstyles__StarDiv-sc-1w4l82j-4 RxyTX cONVXR">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M-5-5h24v24H-5z">
                                                </path>
                                                <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z">
                                                </path>
                                            </g>
                                        </svg>
                                        <div class="Layouts__Row-sc-1yzlivq-0 RatingsBreakupstyles__ProgressBarWrapperDiv-sc-1w4l82j-2 iRIAvwB lfzkXW">
                                            <div class="Layouts__Column-sc-1yzlivq-1 ProgressBarstyles__ProgressBarInnerWrapperDiv-sc-19gddgi-0 gANvcd eWRShh">
                                                <span width="14.500000000000002" bgcolor="#1ca54f" class="ProgressBarstyles__ProgressLine-sc-19gddgi-1 iSmcEf">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="RatingsBreakupstyles__ProgressBarCountWrapper-sc-1w4l82j-3 iQAVTu">29</div>
                                    </div>
                                    <div class="Layouts__Row-sc-1yzlivq-0 iRIAvwB">
                                        <span class="RatingsBreakupstyles__ReviewTypeTextWrapper-sc-1w4l82j-1 epuJRG">3</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" class="RatingStarIcon-sc-1lv0lb2-0 RatingsBreakupstyles__StarDiv-sc-1w4l82j-4 RxyTX cONVXR">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M-5-5h24v24H-5z">
                                                </path>
                                                <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z">
                                                </path>
                                            </g>
                                        </svg>
                                        <div class="Layouts__Row-sc-1yzlivq-0 RatingsBreakupstyles__ProgressBarWrapperDiv-sc-1w4l82j-2 iRIAvwB lfzkXW">
                                            <div class="Layouts__Column-sc-1yzlivq-1 ProgressBarstyles__ProgressBarInnerWrapperDiv-sc-19gddgi-0 gANvcd eWRShh">
                                                <span width="3.9999999999999996" bgcolor="#f59d00" class="ProgressBarstyles__ProgressLine-sc-19gddgi-1 fpgWBn">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="RatingsBreakupstyles__ProgressBarCountWrapper-sc-1w4l82j-3 iQAVTu">8</div>
                                    </div>
                                    <div class="Layouts__Row-sc-1yzlivq-0 iRIAvwB">
                                        <span class="RatingsBreakupstyles__ReviewTypeTextWrapper-sc-1w4l82j-1 epuJRG">2</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" class="RatingStarIcon-sc-1lv0lb2-0 RatingsBreakupstyles__StarDiv-sc-1w4l82j-4 RxyTX cONVXR">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M-5-5h24v24H-5z">
                                                </path>
                                                <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z">
                                                </path>
                                            </g>
                                        </svg>
                                        <div class="Layouts__Row-sc-1yzlivq-0 RatingsBreakupstyles__ProgressBarWrapperDiv-sc-1w4l82j-2 iRIAvwB lfzkXW">
                                            <div class="Layouts__Column-sc-1yzlivq-1 ProgressBarstyles__ProgressBarInnerWrapperDiv-sc-19gddgi-0 gANvcd eWRShh">
                                                <span width="0" bgcolor="#f39c12" class="ProgressBarstyles__ProgressLine-sc-19gddgi-1 hDebIX">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="RatingsBreakupstyles__ProgressBarCountWrapper-sc-1w4l82j-3 iQAVTu">0</div>
                                    </div>
                                    <div class="Layouts__Row-sc-1yzlivq-0 iRIAvwB">
                                        <span class="RatingsBreakupstyles__ReviewTypeTextWrapper-sc-1w4l82j-1 epuJRG">1</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" class="RatingStarIcon-sc-1lv0lb2-0 RatingsBreakupstyles__StarDiv-sc-1w4l82j-4 RxyTX cONVXR">
                                            <g fill="none" fill-rule="evenodd">
                                                <path d="M-5-5h24v24H-5z">
                                                </path>
                                                <path fill="#FDBA00" d="m7.15 11.622 3.469 2.13c.635.39 1.412-.187 1.245-.917l-.92-4.004 3.068-2.699c.56-.492.259-1.425-.477-1.484L9.5 4.3 7.92.515a.831.831 0 0 0-1.537 0l-1.58 3.776-4.036.348C.031 4.7-.27 5.632.29 6.124l3.067 2.698-.92 4.005c-.166.73.61 1.307 1.246.916z">
                                                </path>
                                            </g>
                                        </svg>
                                        <div class="Layouts__Row-sc-1yzlivq-0 RatingsBreakupstyles__ProgressBarWrapperDiv-sc-1w4l82j-2 iRIAvwB lfzkXW">
                                            <div class="Layouts__Column-sc-1yzlivq-1 ProgressBarstyles__ProgressBarInnerWrapperDiv-sc-19gddgi-0 gANvcd eWRShh">
                                                <span width="0.9999999999999999" bgcolor="#e74c3c" class="ProgressBarstyles__ProgressLine-sc-19gddgi-1 ddApVc">
                                                </span>
                                            </div>
                                        </div>
                                        <div class="RatingsBreakupstyles__ProgressBarCountWrapper-sc-1w4l82j-3 iQAVTu">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ReviewNRatingstyles__FlexContainerWrap-sc-1vffayb-10 jwAyyK">
                            </div>
                        </div>
                        <div class="Layouts__Column-sc-1yzlivq-1 ReviewNRatingstyles__UserReviewOuterWrapperDiv-sc-1vffayb-9 gANvcd ezAYjh">
                            <div id="dontHaveData">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuestReviews;