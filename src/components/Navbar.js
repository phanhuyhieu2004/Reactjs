import App from "../App";

function Navbar() {
    return(
        <>
            <section className="nav" id="navbar">
                <nav className="nav_container">
                    <div>
                        <a href="#" className="nav_link nav_logo ">
                            <i className="fa-solid fa-bars nav_icon"/>
                            <h2>
                                {" "}
                                <span className="logo_name">
            <img src="http://localhost:3000/Screenshot%202024-04-10%20193643.png" alt=""/>
                                    {/*                <img src="images/sex-position.png" alt="" style="max-width: 20%"*/}
                                    {/*                >*/}
                                    MeTube{" "}
          </span>
                            </h2>
                        </a>
                        <div className="nav_list">
                            <div className="nav_items navtop">
                                <a href="List3.html" className="nav_link navtop ">
                                    <i className="fa-solid fa-video nav_icon "/>
                                    <span className="nav_name">Home</span>
                                </a>
                                <a href="List4.html" className="nav_link navtop active">
                                    <i className="fa fa-compass nav_icon"/>
                                    <span className="nav_name">Explore</span>
                                </a>
                                <a href="List1" className="nav_link navtop">
                                    <i className="fa-brands fa-tiktok nav_icon"/>
                                    <span className="nav_name">Short Video</span>
                                </a>
                                <a href="#" className="nav_link navtop">
                                    <i className="fa-brands fa-tiktok nav_icon"/>
                                    <span className="nav_name">Channel</span>
                                </a>
                                <a href="List2.html" className="nav_link navtop">
                                    <i className="fa-solid fa-video nav_icon"/>
                                    <span className="nav_name">Library</span>
                                </a>
                                <a href="#" className="nav_link navtop">
                                    <i className="fa-solid fa-clock-rotate-left nav_icon"/>
                                    <span className="nav_name">History</span>
                                </a>
                                <a href="#" className="nav_link navtop">
                                    <i className="fa-solid fa-thumbs-up nav_icon"/>
                                    <span className="nav_name">Like</span>
                                </a>
                                <div className="nav_dropdown">
                                    <a href="#" className="nav_link">
                                        <i className="fa-solid fa-chevron-down nav_icon"/>
                                        <span className="nav_name">Show More</span>
                                    </a>
                                    <div className="nav_dropdown-collapse">
                                        <div className="nav_dropdown-content">
                                            <a href="#" className="nav_dropdown-item">
                                                Grid Box
                                            </a>
                                            <a href="#" className="nav_dropdown-item">
                                                Frontend Design
                                            </a>
                                            <a href="#" className="nav_dropdown-item">
                                                Backend Design
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="nav_link">
                                    <i className="fa-solid fa-comment nav_icon"/>
                                    <span className="nav_name">Messages</span>
                                </a>
                            </div>
                            <div className="nav_items subscribe-container">
                                <h3 className="nav_subititle">SUBSCRIPTIONS</h3>
                                <a href="#" className="nav_link">
                                    <img
                                        className="subscribe"
                                        src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-people-victoruler-flat-victoruler-5.png"
                                        alt=""
                                    />
                                    <span className="nav_name">Ngọc Trinh</span>
                                </a>
                                <a href="#" className="nav_link">
                                    <img
                                        className="subscribe"
                                        src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png"
                                    />
                                    <span className="nav_name">Lê Bống</span>
                                </a>
                                <a href="#" className="nav_link">
                                    <img
                                        className="subscribe"
                                        src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/000000/external-boy-children-avatar-victoruler-linear-colour-victoruler-2.png"
                                    />
                                    <span className="nav_name">Maria</span>
                                </a>
                                <a href="#" className="nav_link">
                                    <img
                                        className="subscribe"
                                        src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                                    />
                                    <span className="nav_name">Thúy Liễu</span>
                                </a>
                                <div className="nav_dropdown">
                                    <a href="#" className="nav_link">
                                        <i className="fa-solid fa-chevron-down nav_icon"/>
                                        <span className="nav_name">Show 3 More</span>
                                    </a>
                                    <div className="nav_dropdown-collapse nav_dropdown-second">
                                        <div className="nav_dropdown-content">
                                            <a href="#" className="nav_dropdown-items">
                                                <img
                                                    className="subscribe"
                                                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                                                />
                                                <span className="nav_name">Thúy Liễu</span>
                                            </a>
                                            <a href="#" className="nav_dropdown-items">
                                                <img
                                                    className="subscribe"
                                                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                                                />
                                                <span className="nav_name">Thúy Kiều</span>
                                            </a>
                                            <a href="#" className="nav_dropdown-items">
                                                <img
                                                    className="subscribe"
                                                    src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-children-avatar-victoruler-flat-victoruler-12.png"
                                                />
                                                <span className="nav_name">Ngọc Nữ</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

        </>
    )

}
export default Navbar;
