import React from 'react';
import '../CSS/Footer.css';

function Footer() {
    return (
        <div>
            <div className='Footer'>

                <div className="footer-gradient">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>

                    <section id="contacts" className="contacts section start-holder">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div id="horizon">
                                        <div className="glow"></div>
                                    </div>
                                    <div id="earth"></div>
                                    <div id="title">
                                        AERO2ASTRO
                                    </div>
                                    <div id="subtitle">
                                        <span>Think<span className='brandcolor'>.</span></span>
                                        <span>Innovate<span className='brandcolor'>.</span></span>
                                        <span>Explore<span className='brandcolor'>.</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container footer_texts">
                            <div className="section-content">
                                <div className="row-base row text-left">
                                    <div className="col-address col-base col-md-3">
                                        <p>
                                            <a href="/" className="brand">
                                                #aero<span className="text-primary brandcolor">2</span>astro
                                            </a>
                                            <br />Think<span className="text-primary brandcolor">.</span> Innovate<span className="text-primary brandcolor">.</span> Explore<span className="text-primary brandcolor">.</span>
                                            <br /><br />
                                            "Outstanding people have one thing in common: an absolute sense of mission <br /> <em>-Zig Ziglar</em>"
                                        </p>
                                    </div>
                                    <div className="col-address col-base col-md-3">
                                        <span className="section-title text-left">CORPORATE</span>
                                        <br />
                                        <a className="author-link" href="https://aero2astro.com/home/contact">Contact Us</a><br />
                                        <a className="author-link" href="https://aero2astro.com/home/corporate/Careers">Careers</a><br />
                                        <a className="author-link" href="https://aero2astro.com/home/corporate/Internship">Internships</a><br />
                                        <a className="author-link" href="https://aero2astro.com/home/contact/appointment">Schedule an appointment</a><br />
                                    </div>
                                    <div className="col-address col-base col-md-3">
                                        <span className="section-title text-left">INNOVATION LABZ</span>
                                        <br />
                                        <a className="author-link" href="https://aero2astro.com/home/soon">Shop</a><br />
                                        <a className="author-link" href="https://www.aero2astro.com/soon">Mayvi</a><br />
                                        <a className="author-link" href="https://aero2astro.com/home/soon">Learn to fly</a><br />
                                        <a className="author-link" href="https://aero2astro.com/home/soon">Aeromodelling Club</a><br />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <footer id="footer" className="footer">
                        <div className="container dev_sec">
                            <div className="row-base row dev_sec_content">
                                <div className="col-base text-left-md col-md-4">
                                    <a href="https://krishundre.vercel.app/" className="author-link">
                                        Made by Krish Undre <img className='indianflag' src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt='Indian Flag'></img>
                                    </a>                                </div>
                                <div className="section-content col-address col-base col-md-4 text-center">
                                    <h6>
                                        <a href="mailto://flywithus@aero2astro.com" className="brand"><i className="fa fa-envelope"></i></a>&nbsp;&nbsp;&nbsp;
                                        <a href="https://www.facebook.com/Aero2AstroRnD" className="brand"><i className="fa fa-facebook"></i></a> &nbsp;&nbsp;&nbsp;
                                        <a href="https://twitter.com/Aero2Astro_A2A" className="brand"><i className="fa fa-twitter"></i></a> &nbsp;&nbsp;&nbsp;
                                        <a href="https://instagram.com/aero2astro" className="brand"><i className="fa fa-instagram"></i></a> &nbsp;&nbsp;&nbsp;
                                        <a href="https://aero2astro.com/home/blog" className="brand"><i className="fa fa-blog"></i></a> &nbsp;&nbsp;&nbsp;

                                    </h6>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div >
            </div >
        </div >
    );
}

export default Footer;
