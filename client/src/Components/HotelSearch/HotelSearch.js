import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./HotelSearch.css"; // Import the external CSS file
import ResultPage from "./DisplayPage"; // Import the result page component

import Advertisement from '../Home-Section/Home'
import BackgroundBG from '../../Assets/header-bg.svg';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function HotelSearch() {

  const { cat } = useParams()

  const [yourTrip, setYourTrip] = useState([]);
  console.log(yourTrip);

  useEffect(() => {

    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(

      data => setYourTrip(data.data)
    )

  }, [cat])

  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [adults, setAdults] = useState(1); // Default 1 adult
  const [children, setChildren] = useState(0); // Default 0 children
  const [city, setCity] = useState(""); // City/Location input
  const [nightStatus, setNightStatus] = useState({ nights: 0, days: 0 });

  const [result, setResult] = useState(null); // Result object to pass to ResultPage
  const [showResultPage, setShowResultPage] = useState(false); // State to toggle between pages

  // Function to get the day of the week from a date
  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return dateString ? days[date.getDay()] : "";
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate > checkInDate) {
        const timeDifference = checkOutDate - checkInDate;
        const nights = timeDifference / (1000 * 60 * 60 * 24);
        // const days = nights + 1; 

        // setNightStatus({ nights, days });
        setNightStatus({ nights });
      } else {
        setNightStatus({ nights: 0 }); // Reset result if invalid dates are selected
        alert("Check-out date must be after check-in date.");
      }
    } else {
      setNightStatus({ nights: 0 }); // Reset result if dates are cleared
    }
  }, [checkIn, checkOut]); // Recalculate when checkIn or checkOut changes

  const handleSearch = () => {
    if (checkIn && checkOut && city.trim()) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate > checkInDate) {
        const timeDifference = checkOutDate - checkInDate;
        const days = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
        const nights = days - 1; // Subtract 1 day for the last day not being a night

        setResult({
          city,
          adults,
          children,
          nights,
          days,
          checkIn,
          checkOut,
        });
        setShowResultPage(true); // Navigate to the result page
      } else {
        alert("Check-out date must be after check-in date.");
      }
    } else {
      alert("Please fill out all fields (Check-in, Check-out, and City).");
    }
  };

  if (showResultPage && result) {
    return <ResultPage result={result} />;
  }

  return (
    <>
      <img src={BackgroundBG} className='background-bg' alt="background-bg" />
      <div className="hotelSearch-container">
        <div className='CategoryHead'>
          {yourTrip.filter((value) => (value.ID === '1') && (value.Category === cat)).map((val, index) => (
            <h2 className='mainCategory' key={index} >
              {val.CategoryHead}
            </h2>
          ))}
        </div>
        <div className="container">
          <div className="input-box">
            <div className="input-group">
              <TextField
                id="outlined-multiline-flexible"
                label="Where to"
                maxRows={4}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter Location or city"
              />
            </div>
            <div className="input-group LocalizationProvider">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    label="Check-in Date"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e)}
                  />

                  <DatePicker
                    label="Check-out Date"
                    // defaultValue={dayjs('2022-04-17')}
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="input-group">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Adults</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={adults}
                    label="Adults"
                    defaultValue="1"
                    onChange={(e) => setAdults(e.target.value)}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="input-group">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Children</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={children}
                    label="Children"
                    defaultValue="0"
                    onChange={(e) => setChildren(e.target.value)}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="extra-section">
            <Box></Box>
            {checkIn && (
              <Box className="checkIn" component="section">
                <strong>{getDayOfWeek(checkIn)}</strong>
              </Box>
            )}
            {checkOut && (
              <Box className="checkOut" component="section" >
                <strong>{getDayOfWeek(checkOut)}</strong>
              </Box>
            )}
            {checkOut && (
              <Box className="nightStatus" component="section">
                <strong> Nights: {nightStatus.nights} </strong>
              </Box>
            )}
          </div>
          <br />
          <div className="hotelSearch">
            <button className="hotelSearchButton" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <Advertisement />
      </div>
    </>
  );
}

export default HotelSearch;