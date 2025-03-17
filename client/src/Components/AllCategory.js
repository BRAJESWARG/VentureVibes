import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { ArrayofyourTrip } from './ArrayOfBlog/ArrayOfBlog';
import axios from 'axios';
import HotelSearch from './HotelSearch/HotelSearch';

const AllCategory = () => {

    // const [yourTrip] = useContext(ArrayofyourTrip)

    const { cat } = useParams()

    const [yourTrip, setYourTrip] = useState([]);
    console.log(yourTrip);

    useEffect(() => {

        axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(

            data => setYourTrip(data.data)
        )

    }, [cat])

    return (

        <div className='blogBody'>
            <div className='contentForm'>
                {(() => {
                    if (cat === 'Hotels') {
                        return (
                            <HotelSearch yourTrip={yourTrip} />
                        );
                    } else if (cat === 'Flights') {
                        return (
                            "Oops! Yet to Development!"
                        );
                    } else if (cat === 'Trains') {
                        return (
                            "Oops! Yet to Development!"
                        );
                    } else if (cat === 'Bus') {
                        return (
                            "Oops! Yet to Development!"
                        );
                    } else if (cat === 'Cab') {
                        return (
                            "Oops! Yet to Development!"
                        );
                    } else {
                        return (
                            "Oops! Yet to Development!"
                        );
                    }
                })()}

            </div>
        </div>
    );

}

export default AllCategory;
