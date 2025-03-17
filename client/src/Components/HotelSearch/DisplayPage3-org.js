import React, { useEffect, useState } from "react";
import "./DisplayPage.css";
import "./HotelSearch.css";
import axios from "axios";
import { Link } from "react-router-dom";

function DisplayPage({ result }) {
  const [yourTrip, setYourTrip] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8040/api/v1/MakeYourTrip")
      .then((data) => setYourTrip(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { adults, children, location, nights, days, checkIn, checkOut } = result;
  
  if (adults < 1) {
    return <h1>At least one Adult needs to be selected...</h1>;
  }

  const filteredData = yourTrip.filter(
    (value) => value.Adults === adults && value.Child === children && value.Category === "Hotels"
  );

  // ✅ Format Dates from result (if provided)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
  };

  return (
    <>
      <div className="displayHotelsContainer">
        <section className="SearchWidgetUIstyles__OuterWrapDiv-sc-1x37qbj-0 edQnfF">
          <div className="dwebCommonstyles__CenteredSpaceWrap-sc-112ty3f-0 SearchWidgetUIstyles__WrapperStyle-sc-1x37qbj-1 buWWlt bFIqAi">
            <div className="dwebCommonstyles__FlexItem-sc-112ty3f-4 gwpVPd">
              <div className="SearchWidgetUIstyles__SearchWrapperArea-sc-1x37qbj-2 gfWNJG">
                <label htmlFor="downshift-1-input" className="SearchWidgetAutosuggeststyles__SearchLabelStyles-sc-1lizu4w-2 cZkTVY">
                  AREA, LANDMARK OR PROPERTY NAME
                </label>
                <input
                  id="downshift-1-input"
                  placeholder="LOCATION NAME"
                  className="SearchWidgetAutosuggeststyles__SearchInputStyles-sc-1lizu4w-1 cGELZI"
                  value={location}
                  readOnly
                />
              </div>
            </div>

            {/* ✅ Check-in Date from result */}
            <div id="search-widget-calendar-element" className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
              <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECK-IN</label>
              <input
                type="text"
                placeholder="Travel Dates"
                className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                value={checkIn ? formatDate(checkIn) : "Not Selected"}
                readOnly
              />
            </div>

            {/* ✅ Check-out Date from result */}
            <div className="SearchWidgetUIstyles__CheckinCheckoutWrapper-sc-1x37qbj-3 fsTdCE">
              <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">CHECK-OUT</label>
              <input
                type="text"
                placeholder="Travel Dates"
                className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS"
                value={checkOut ? formatDate(checkOut) : "Not Selected"}
                readOnly
              />
            </div>

            <div className="SearchWidgetUIstyles__PaxWrapperStyle-sc-1x37qbj-4 idfXAf">
              <label className="SearchWidgetUIstyles__SearchLabelStyle-sc-1x37qbj-5 dhbsSR">GUEST &amp; ROOMS</label>
              <input type="text" className="SearchWidgetUIstyles__SearchInputStyle-sc-1x37qbj-6 kNWLrS" value={`${adults} Adults . 1 Room`} readOnly />
            </div>

            <button className="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 cYhrVX hDRTlP">
              Update Search
            </button>
          </div>
        </section>
      </div>

      <div className="result-container">
        <h1 className="result-heading">Thank You!</h1>
        <p className="result-text">Your booking details are as follows:</p>
        <div className="result-box">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Adults:</strong> {adults}</p>
          <p><strong>Children:</strong> {children}</p>
          <p><strong>Nights:</strong> {nights}</p>
          <p><strong>Days:</strong> {days}</p>
          <p><strong>Check-in:</strong> {checkIn ? formatDate(checkIn) : "Not Selected"}</p>
          <p><strong>Check-out:</strong> {checkOut ? formatDate(checkOut) : "Not Selected"}</p>
        </div>

        <div className="result-box">
          <h2>Data from Server:</h2>
          {filteredData.length > 0 ? (
            filteredData.map((val, index) => (
              <Link key={index} target="_blank" to={`/article/${val.Category}/${val.ID}`}>
                <div>
                  <img src={val.Image1} className="introImg1" alt={val.Title} />
                  <div>
                    <p>{val.Title}</p>
                    <p>
                      {val.Category} / {val.Date}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No hotels found for your selection.</p>
          )}
        </div>
        <p className="result-message">We hope you enjoy your stay in {location}!</p>
      </div>
    </>
  );
}

export default DisplayPage;
