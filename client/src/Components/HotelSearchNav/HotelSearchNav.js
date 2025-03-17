import React, { useEffect, useState } from "react";
import "../HotelSearch/DisplayPage.css";
import axios from "axios";
import dayjs from "dayjs";

function HotelSearchNav({ result, setResult, sendDataToParent }) {
    const [yourTrip, setYourTrip] = useState([]);
    const [formData, setFormData] = useState({
        ...result,
        checkIn: result.checkIn && dayjs(result.checkIn).isValid() ? dayjs(result.checkIn).format("YYYY-MM-DD") : "",
        checkOut: result.checkOut && dayjs(result.checkOut).isValid() ? dayjs(result.checkOut).format("YYYY-MM-DD") : "",
    });
    const [tempFormData, setTempFormData] = useState({ ...formData });

    useEffect(() => {
        axios
            .get("http://localhost:8040/api/v1/MakeYourTrip")
            .then((data) => setYourTrip(data.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [result]);

    const handleUpdate = () => {
        setFormData({ ...tempFormData });
        // sendDataToParent(yourTrip)
        if (typeof setResult === "function") {
            setResult({ ...tempFormData });
        } else {
            console.error("setResult is not a function. Ensure it's passed correctly.");
        }
    };
    const {
        adults,
        children,
        // city,
        // nights,
        // days,
        // checkIn,
        // checkOut
    } = formData;
    const filteredData = yourTrip.filter(
        (value) => Number(value.Adults) === Number(adults) && Number(value.Child) === Number(children) && value.Category === "Hotels"
    );
    // const [inputValue, setInputValue] = useState("");

    return (
        <section className="SearchWidgetUIstyles__OuterWrapDiv-sc-1x37qbj-0 edQnfF">
            <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 SearchWidgetUIstyles__WrapperStyle-sc-1x37qbj-1 buWWlt bFIqAi">
                <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPd">
                    <div className="SearchWidgetUIstyles__SearchWrapperArea-sc-1x37qbj-2 gfWNJG">
                        <div aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label" className="SearchWidgetAutosuggeststyles__AutocompleteWrapperStyles-sc-1lizu4w-0 iGTTep">
                            <label id="downshift-1-label" htmlFor="downshift-1-input" className="SearchWidgetAutosuggeststyles__SearchLabelStyles-sc-1lizu4w-2 cZkTVY">AREA, LANDMARK OR PROPERTY NAME</label>
                            <input
                                aria-autocomplete="list"
                                aria-labelledby="downshift-1-label"
                                autoComplete="off"
                                id="downshift-1-input"
                                placeholder="LOCATION NAME"
                                className="SearchWidgetAutosuggeststyles__SearchInputStyles-sc-1lizu4w-1 cGELZI"
                                value={tempFormData.city}
                                onChange={(e) => setTempFormData((prev) => ({ ...prev, City: e.target.value }))}
                            />
                            <ul id="downshift-1-menu" role="listbox" aria-labelledby="downshift-1-label" top="6rem" left="0" data-testid="autosuggest-suggestions-container" className="HomePageAutosuggeststyles__SearchMenuStyles-sc-tk3iiv-3 dHsxlv">
                            </ul>
                        </div>
                    </div>
                    <div id="search-widget-calendar-element" className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
                        <div>
                            <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECK-IN</label>
                            <input
                                type="date"
                                id="search-widget-checkin-input"
                                className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                                value={tempFormData.checkIn}
                                onChange={(e) => setTempFormData((prev) => ({ ...prev, checkIn: e.target.value }))}
                            />
                        </div>
                    </div>
                    <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
                        <div>
                            <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECK-OUT</label>
                            <input
                                type="date"
                                className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                                value={tempFormData.checkOut}
                                onChange={(e) => setTempFormData((prev) => ({ ...prev, checkOut: e.target.value }))}
                            />
                        </div>
                    </div>
                    <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf/">
                        <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">GUEST &amp; ROOMS</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div className="adultsChildRoom SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS">
                                <div className="adultsChildRoomBox">
                                    <input
                                        type="number"
                                        min="1"
                                        max="3"
                                        className="adultsChildRoomInput"
                                        value={tempFormData.adults}
                                        onChange={(e) => setTempFormData((prev) => ({ ...prev, adults: Math.max(1, parseInt(e.target.value) || 1) }))}
                                    />
                                    <label className="adultsChildRoomLebel" >Adult,</label>
                                </div>
                                <div className="adultsChildRoomBox">
                                    <input
                                        type="number"
                                        min="0"
                                        max="2"
                                        className="adultsChildRoomInput"
                                        value={tempFormData.children}
                                        onChange={(e) => setTempFormData((prev) => ({ ...prev, children: Math.max(0, parseInt(e.target.value) || 0) }))}
                                    />
                                    <label className="adultsChildRoomLebel" >Child,</label>
                                </div>
                                <div className="adultsChildRoomBox">
                                    <input
                                        type="number"
                                        className="adultsChildRoomInput"
                                        value='1'
                                    />
                                    <label className="adultsChildRoomLebel" >Room</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleUpdate} className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 hDRTlP">
                    Update Search
                </button>
            </div>
        </section>
    )
}

export default HotelSearchNav