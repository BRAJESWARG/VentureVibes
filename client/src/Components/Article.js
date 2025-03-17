import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InsideHotel from './InsideHotel/InsideHotel';
// import { ArrayofyourTrip } from './ArrayOfBlog/ArrayOfBlog';

const Article = () => {

    // const [yourTrip] = useContext(ArrayofyourTrip)

    const [yourTrip, setYourTrip] = useState([]);
    const { Id } = useParams()
    const { cat } = useParams()

    useEffect(() => {

        axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
            data => setYourTrip(data.data)
        )

    }, [cat])

    return (
        <div>
            {yourTrip.filter((value) => ((value.ID === Id) && (value.Category === cat))).map((val, index) => (
                <InsideHotel val={val} />
            ))}
        </div>
    );
};

export default Article;