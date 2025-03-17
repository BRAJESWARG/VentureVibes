import React, { useEffect, useState } from "react";
import "./DisplayPage.css"; // Use the same CSS file for styling
import "./HotelSearch.css"; // Use the same CSS file for styling
import axios from "axios";
import { Link } from "react-router-dom";

function DisplayPage({ result }) {

  const [yourTrip, setYourTrip] = useState([]);
  // const [adults, setAdults] = useState(result.adults);
  let adultsCount = (result.adults);
  let childrenCount = (result.children);

  useEffect(() => {

    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
      data => setYourTrip(data.data)
    )

  }, [])

  const DisplayHotels = () => {
    if (adultsCount === 1 && childrenCount === 0) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>City:</strong> {result.city}</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 1) && (value.Child === 0) && (value.Category === "Hotels")).map((val, index) => (
              <Link target="_blank" to={`/article/${val.Category}/${val.ID}`}>

                <div key={index} >

                  <img src={val.Image1} className='introImg1' alt="" />
                  <div className=''>
                    <p className=''>{val.Title}</p>
                    <p className=''>{val.Category} / {val.Date}</p>
                  </div>
                </div>
              </Link>
            ))
            }
          </div>
          <p className="result-message">We hope you enjoy your stay in {result.city}!</p>
        </div>
      )

    } else if (adultsCount === 1 && childrenCount === 1) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>City:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 1) && (value.Child === 1) && (value.Category === "Hotels")).map((val, index) => (

              <div key={index} >

                <img src={val.Image1} className='introImg1' alt="" />
                <div className=''>
                  <p className=''>{val.Title}</p>
                  <p className=''>{val.Category} / {val.Date}</p>
                </div>
              </div>

            ))
            }
          </div>
          <p className="result-message">We hope you enjoy your stay in {result.city}!</p>
        </div>
      )

    } else if (adultsCount === 1 && childrenCount === 2) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>City:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 1) && (value.Child === 2) && (value.Category === "Hotels")).map((val, index) => (

              <div key={index} >

                <img src={val.Image1} className='introImg1' alt="" />
                <div className=''>
                  <p className=''>{val.Title}</p>
                  <p className=''>{val.Category} / {val.Date}</p>
                </div>
              </div>

            ))
            }
          </div>
          <p className="result-message">We hope you enjoy your stay in {result.city}!</p>
        </div>
      )

    } else if (adultsCount === 2 && childrenCount === 0) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>City:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 2) && (value.Child === 0) && (value.Category === "Hotels")).map((val, index) => (

              <div key={index} >

                <img src={val.Image1} className='introImg1' alt="" />
                <div className=''>
                  <p className=''>{val.Title}</p>
                  <p className=''>{val.Category} / {val.Date}</p>
                </div>
              </div>

            ))
            }
          </div>
          <p className="result-message">We hope you enjoy your stay in {result.city}!</p>
        </div>
      )

    } else if (adultsCount === 2 && childrenCount === 1) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>City:</strong> { }</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 2) && (value.Child === 1) && (value.Category === "Hotels")).map((val, index) => (

              <div key={index} >

                <img src={val.Image1} className='introImg1' alt="" />
                <div className=''>
                  <p className=''>{val.Title}</p>
                  <p className=''>{val.Category} / {val.Date}</p>
                </div>
              </div>

            ))
            }
          </div>
          <p className="result-message">We hope you enjoy your stay in {result.city}!</p>
        </div>
      )

    } else if (adultsCount === 2 && childrenCount === 2) {

      return (
        <div className="result-container">
          <h1 className="result-heading">Thank You!</h1>
          <p className="result-text">Your booking details are as follows:</p>
          <div className="result-box">
            <p><strong>City:</strong> {result.city}</p>
            <p><strong>Adults:</strong> {adultsCount} </p>
            <p><strong>Children:</strong> {childrenCount}</p>
            <p><strong>Nights:</strong> {result.nights}</p>
            <p><strong>Days:</strong> {result.days}</p>
          </div>
          <div className="result-box">
            <h2>Data from Server:</h2>
            {yourTrip.filter((value) => (value.Adults === 2) && (value.Child === 2) && (value.Category === "Hotels")).map((val, index) => (

              <div key={index} >

                <img src={val.Image1} className='introImg1' alt="" />
                <div className=''>
                  <p className=''>{val.Title}</p>
                  <p className=''>{val.Category} / {val.Date}</p>
                </div>
              </div>

            ))
            }
          </div>
          <p className="result-message">We hope you enjoy your stay in {result.city}!</p>
        </div>
      )

    }

    else {
      return (
        <h1>At least one Adult need to select...</h1>
      )
    }
  }

  return (

    <>
      <div className="displayHotelsContainer">
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
                    value="Bengaluru"
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
            <button class="dwebCommonstyles__ButtonBase-sc-112ty3f-14 SearchWidgetUIstyles__UpdateSearchBtn-sc-1x37qbj-7 cYhrVX hDRTlP">Update Search</button>
          </div>
        </section>
      </div>
      <div>
        <DisplayHotels />
      </div>
    </>

  );
}

export default DisplayPage;
