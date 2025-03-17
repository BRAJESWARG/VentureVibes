import React from 'react'
import "../HotelSearch/DisplayPage.css";

function InsideSearchView({ val }) {
    return (
        <section class="SearchWidgetUIstyles__OuterWrapDiv-sc-1x37qbj-0 edQnfF">
            <div class="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 SearchWidgetUIstyles__WrapperStyle-sc-1x37qbj-1 buWWlt bFIqAi">
                <div class="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPd">
                    <div class="SearchWidgetUIstyles__SearchWrapperArea-sc-1x37qbj-2 gfWNJG">
                        <div
                            aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label" class="SearchWidgetAutosuggeststyles__AutocompleteWrapperStyles-sc-1lizu4w-0 iGTTep"
                        >
                            <label id="downshift-1-label" for="downshift-1-input" class="SearchWidgetAutosuggeststyles__SearchLabelStyles-sc-1lizu4w-2 cZkTVY">AREA, LANDMARK OR PROPERTY NAME</label>
                            <input
                                aria-autocomplete="list"
                                aria-labelledby="downshift-1-label"
                                autocomplete="off" id="downshift-1-input"
                                placeholder="CITY NAME"
                                class="SearchWidgetAutosuggeststyles__SearchInputStyles-sc-1lizu4w-1 cGELZI"
                                value={val.City}
                            />
                            <ul id="downshift-1-menu" role="listbox" aria-labelledby="downshift-1-label" top="6rem" left="0" data-testid="autosuggest-suggestions-container" class="HomePageAutosuggeststyles__SearchMenuStyles-sc-tk3iiv-3 dHsxlv">
                            </ul>
                        </div>
                    </div>
                    <div id="search-widget-calendar-element" class="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
                        <div>
                            <label class="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECKIN</label>
                            <input
                                type="text"
                                placeholder="Travel Dates"
                                id="search-widget-checkin-input"
                                editable="false"
                                readonly=""
                                class="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                                value="Apr 16, 2025"
                            />
                        </div>
                    </div>
                    <div class="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
                        <div>
                            <label class="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECKOUT</label>
                            <input
                                type="text"
                                placeholder="Travel Dates"
                                editable="false"
                                readonly=""
                                class="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                                value="Apr 26, 2025"
                            />
                        </div>
                    </div>
                    <div class="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf/">
                        <label class="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">GUEST &amp; ROOMS</label>
                        <input type="text"
                            editable="false"
                            readonly=""
                            class="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                            value="2 Adults  . 1 Room "
                        />
                    </div>
                </div>
                <button class="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 hDRTlP">Update Search</button>
            </div>
        </section>
    )
}

export default InsideSearchView