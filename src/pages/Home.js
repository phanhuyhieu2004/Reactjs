import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/home.css';
import {Link} from "react-router-dom";

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1');
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            <main>
                <section className="video_content grid">
                    {videos.map((video, index) => (
                        <div className="video_items" key={index}>
                            <Link to={"/detail/" + video.video_id }>
                            <a href="">
                                <img src={"http://localhost:8080/video/"+ video.thumbnail}alt="" />
                            </a>
                            </Link>
                            <div className="details flex">
                                <div className="img">
                                    <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"
                                         alt=""/>
                                </div>
                                <div className="heading">
                                    <p>{video.title}</p>
                                    <span>
                                        {video.description} <i className="fa fa-circle-check" />{' '}
                                    </span>
                                    <span>56.7M .1  {video.upload_date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </main>
        </>
    );
}

export default Home;
