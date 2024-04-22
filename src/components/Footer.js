import App from "../App";

function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="col1">
                        <a href="#" className="brand">
                            Connect with us{" "}
                        </a>
                        <ul className="media-icons">
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-youtube"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-discord"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-github"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col2">
                        <ul className="menu">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Exercitationem excepturi ipsam unde obcaecati iusto velit labore
                                consequuntur officiis aut neque?
                            </p>
                        </ul>
                    </div>
                    <div className="col3">
                        <p>Subscribe to our videos</p>
                        <form>
                            <div className="input-wrap">
                                <input type="email" placeholder="ex@gmail.com"/>
                                <button type="submit">
                                    <i className="fa-solid fa-paper-plane"/>
                                </button>
                            </div>
                        </form>
                        <ul className="services-icons">
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-cc-paypal"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-cc-apple-pay"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-google-pay"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-cc-amazon-pay"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="mekk">
                        <p>@MeTube 2024 - All Rights Reserved</p>
                    </div>
                </div>
            </footer>

        </>
    )

}
export default Footer;
