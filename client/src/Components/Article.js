import React, { useEffect, useState } from 'react';
// import { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { BsHandThumbsUp } from "react-icons/bs";
import axios from 'axios';
// import ControlledCarousel from './HotelSearch/HotelCarousel';
import InsideHotel from './InsideHotel/InsideHotel';
// import { ArrayofyourTrip } from './ArrayOfBlog/ArrayOfBlog';
// import MoreFromSiren from './MoreFromSiren';



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
                // <div key={index} className='articleContainer'>
                //     <p className='articleTitle'>{val.Title}</p>
                //     <div className='articleProfileBox'>
                //     </div>
                //     <img src={val.Image1} alt='' className='articleImg' />
                //     <img src={val.Image1} alt='' text="First slide" />
                //     <ControlledCarousel yourTrip={yourTrip} />
                //     <p>{val.Body}{val.Body}</p>
                //     <p><BsHandThumbsUp />  <b>8.4k Like</b></p>
                //     <p>Rating: {val.Rating} </p>
                //     <p>Reviews: {val.Reviews} </p>
                //     <hr />
                //     <div className='articleProfileBox'>
                //         <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
                //         <div>
                //             <p>Owned By</p>
                //             <p><b>{val.Author}</b></p>
                //             <p>{val.Date}</p>
                //         </div>
                //     </div>
                //     <hr />
                // </div>
                <InsideHotel val={val} />
            ))}
            {
                // <MoreFromSiren yourTrip={yourTrip} />
            }
        </div>
    );
};

export default Article;