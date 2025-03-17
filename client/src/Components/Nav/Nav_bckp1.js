import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// import { useContext } from "react";
// import { ArrayofyourTrip } from "../ArrayOfBlog/ArrayOfBlog";


const NavComponent = () => {
  // const [yourTrip] = useContext(ArrayofyourTrip)
  const [yourTrip, setYourTrip] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
      data => setYourTrip(data.data)
    )

  }, [])

  return (
    <div>
      <div className='heading'>
        <p className='siren'>make</p>
        <p className='the'>YOUR</p>
        <p className='siren'>trip</p>
      </div>

      <div className='navContainer' >
        <Link to="/" className='NavCategory'>Home</Link>
        {
          // <Link to="/hotelsearch" className='NavCategory'>Hotel</Link>
        }
        {yourTrip.filter((value) => value.ID === '1').map((val, index) => (

          <Link to={`/${val.Category}`} className='NavCategory' key={index} >{val.Category}</Link>

        ))}


      </div>
      {/* <hr className='navHr' /> */}


    </div>
  );
};


export default NavComponent;
