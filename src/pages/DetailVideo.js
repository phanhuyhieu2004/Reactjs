import "../style/detail.css";
import "../video/video1.mp4";
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
function DetailVideo() {

    const [videoInfo, setVideoInfo] = useState(null);
    const {id} = useParams();

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/'+id)
            .then(response => {
                setVideoInfo(response.data);
            })

    }, []);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1')
            .then(response => {
                setVideos(response.data);
            })

    }, []);
    return (
        <>
            <main className="single_pages">
                <section className="video_items flex">
                    <div className="left">
                        <div className="left_content">
                            {videoInfo && (
                                <>
                                    <video controls>
                                        <source
                                            src={"http://localhost:8080/video/" + videoInfo.url}
                                            type="video/mp4"
                                            poster={"http://localhost:8080/video/" + videoInfo.thumbnail}
                                        />
                                    </video>
                                    <div className="tag">
                                        <label className="tags"></label>
                                        <p></p>
                                    </div>
                                    <div className="view flex2 border_bottom">
                                        <div className="view-text">
                                            <span>693,348 view Premiered 53 minutes ago</span>
                                        </div>
                                        <div className="flex">
                                            <div className="icon">
                                                <i className="fa fa-thumbs-up"/>
                                                <label>225k</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-thumbs-down"/>
                                                <label>DISLIKE</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-share"/>
                                                <label>SHARE</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-scissors"/>
                                                <label>CLIP</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-bookmark"/>
                                                <label>SAVE</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-ellipsis"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details flex border_bottom">
                                        <div className="img">
                                            <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" alt=""/>
                                        </div>
                                        <div className="heading">
                                            <h4>
                                                HieuPhan <i className="fa fa-circle-check"/>{" "}
                                            </h4>
                                            <span>15M Subscribers</span>
                                            <h5>{videoInfo.title} </h5>
                                            <h5>
                                                {videoInfo.description}
                                            </h5>
                                            <span>Show More</span>
                                        </div>
                                    </div>
                                </>

                            )}

                            <div className="comment">
                                <div className="comment-heading flex">
                                    <h4>120 Comments</h4>
                                    <h4>
                                        {" "}
                                        <i className="fa fa-list-ul"/> <label>SORT BY</label>{" "}
                                    </h4>
                                </div>
                            </div>
                            {/*        video comment  by self           */}
                            <div className="details comment_self flex">
                                <div className="img">
                                    <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" alt=""/>
                                </div>
                                <div className="heading">
                                    <input type="text" placeholder="Add a comment...."/>
                                </div>
                            </div>
                            {/*        video comment  by other           */}
                            <div className="details_Comment">
                                <div className="details flex">
                                    <div className="img">
                                        <img
                                            src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"/>
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            HieuPhan<span>2 months ago</span>{" "}
                                        </h4>
                                        <p>
                                            {" "}
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <div className="comment-like flex">
                                            <div className="icon">
                                                <i className="fa fa-thumbs-up"/>
                                                <label>5</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-thumbs-down"/>
                                                <label>DISLIKE</label>
                                            </div>
                                            <div className="icon">
                                                <label>REPLY</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*        video comment  by other           */}
                            <div className="replay">
                                <label className="tags">
                                    {" "}
                                    <i className="fa fa-caret-up"/> Hide Reply{" "}
                                </label>
                                <div className="replay-details flex">
                                    <div className="img">
                                        <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h4>
                                            {" "}
                                            <label>HieuPhan</label> <span>2 months ago</span>{" "}
                                        </h4>
                                        <p>Thanks You</p>
                                    </div>
                                </div>
                            </div>

                            <div className="details_Comment no-replay">
                                <div className="details flex">
                                    <div className="img">
                                        <h1>M</h1>
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            HieuPhan <span>2 months ago</span>{" "}
                                        </h4>
                                        <p>
                                            {" "}
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <div className="comment-like flex">
                                            <div className="icon">
                                                <i className="fa fa-thumbs-up"/>
                                                <label>5</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-thumbs-down"/>
                                                <label>DISLIKE</label>
                                            </div>
                                            <div className="icon">
                                                <label>REPLY</label>
                                            </div>
                                        </div>
                                        <label className="tags">
                                            {" "}
                                            <i className="fa fa-caret-down"> </i> View Replay From HieuPhan{" "}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="details_Comment no-replay">
                                <div className="details flex">
                                    <div className="img background1">
                                        <h1>A</h1>
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            HieuPhan <span>2 months ago</span>{" "}
                                        </h4>
                                        <p>
                                            {" "}
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <div className="comment-like flex">
                                            <div className="icon">
                                                <i className="fa fa-thumbs-up"/>
                                                <label>5</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-thumbs-down"/>
                                                <label>DISLIKE</label>
                                            </div>
                                            <div className="icon">
                                                <label>REPLY</label>
                                            </div>
                                        </div>
                                        <label className="tags">
                                            {" "}
                                            <i className="fa fa-caret-down"> </i> View Replay From HieuPhan{" "}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="details_Comment no-replay">
                                <div className="details flex">
                                    <div className="img background2">
                                        <h1>S</h1>
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            HieuPhan <span>2 months ago</span>{" "}
                                        </h4>
                                        <p>
                                            {" "}
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <div className="comment-like flex">
                                            <div className="icon">
                                                <i className="fa fa-thumbs-up"/>
                                                <label>5</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-thumbs-down"/>
                                                <label>DISLIKE</label>
                                            </div>
                                            <div className="icon">
                                                <label>REPLY</label>
                                            </div>
                                        </div>
                                        <label className="tags">
                                            {" "}
                                            <i className="fa fa-caret-down"> </i> View Replay From HieuPhan{" "}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="details_Comment no-replay">
                                <div className="details flex">
                                    <div className="img background3">
                                        <h1>Q</h1>
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            HieuPhan <span>2 months ago</span>{" "}
                                        </h4>
                                        <p>
                                            {" "}
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                        <div className="comment-like flex">
                                            <div className="icon">
                                                <i className="fa fa-thumbs-up"/>
                                                <label>5</label>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-thumbs-down"/>
                                                <label>DISLIKE</label>
                                            </div>
                                            <div className="icon">
                                                <label>REPLY</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="replay">
                                <label className="tags">
                                    {" "}
                                    <i className="fa fa-caret-up"/> Hide Reply{" "}
                                </label>
                                <div className="replay-details flex">
                                    <div className="img">
                                        <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h4>
                                            {" "}
                                            <label>HieuPhan</label> <span>2 months ago</span>{" "}
                                        </h4>
                                        <p>Thanks You</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_content">
                            <button className="chat">Show Chat Replay</button>
                            <div className="tags">
                                <label className="tags-bg">All</label>
                                <label className="tags-bg">Web Design</label>
                                <label className="tags-bg">Frontend</label>
                                <label className="tags-bg">Backend</label>
                            </div>
                            {videos.map(video => (
                                <div className="video_items vide_sidebar flex" key={video.video_id}>
                                    <Link to={"/detail/" + video.video_id }>
                                    <a href={"http://localhost:8080/video/" + videoInfo.url}>
                                        <img src={"http://localhost:8080/video/" + videoInfo.thumbnail} alt="" />
                                    </a>
                                    </Link>
                                    <div className="details">
                                        <p>{video.title}</p>
                                        <span>
                                    {video.description} <i className="fa fa-circle-check"></i>{" "}
                                </span>
                                        <span>23.4k {video.upload_date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

        </>
    )


}
export default DetailVideo