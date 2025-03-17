import React, { useEffect, useState } from 'react';
import Intro from "./Intro/Intro"
import axios from 'axios';
import '../../App.css';
import Testimonials from './Testimonials/Testimonials';
import MultiCard from './MultiCarousel/MultiCard';

function Home() {

    const [yourTrip, setYourTrip] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8040/api/v1/VentureVibes`).then(
            data => setYourTrip(data.data)
        )

    }, [])

    return (

        <div>
            <MultiCard />
            <Testimonials />
            <Intro yourTrip={yourTrip} />
        </div>

    );
};

export default Home;
