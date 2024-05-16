import '../CSS/AboutUs.css';
// import React, { Component } from 'react'
import TeamImg from '../Team Photo/img1.jpg'
import AboutUsStats from './AboutUsStats'

function AboutUs() {
    return (
        <div>
            <div className='AboutUs'>
                <p className='AboutUsTitle'>About <spam className='brandcolor'>Us</spam></p>
                <div className='AboutUsContent'>
                    <img src={TeamImg} alt="team" className='AboutUsImg'></img>
                    <div className='AboutUsText'>
                        <p>Aero2Astro is a research and education-focused startup founded by a group of student innovators. Established in 2017, our headquarters are located at HTBI & HEIC, Hindustan University, Chennai. Our team consists of 12 passionate members who have come together with a shared vision: to pioneer groundbreaking ideas in the fields of aeronautics and astronautics. Fueled by creativity and innovation, we are dedicated to leveraging future technologies to advance the application of UAVs and contribute to space missions aimed at serving humanity and catalyzing positive change in our world. </p>
                    </div>
                </div>
                <div className='AboutUsCard'>
                    <div className="content">
                        <div className="cardAU">
                            <p className="title">Research & <br></br> Development</p>
                            <p className="text">It is one of major wing under aero2astro, in this we focus towards the research on UAV technology and space technology which can serve the humanity of the world and our country.</p>
                        </div>
                        <div className="cardAU">
                            <p className="title">INNOVATION LABZ</p>
                            <p className="text">Our innovation labz is one wing under aero2astro, the main aim of this to create a platform for everyone to bring there ideas to real, by the way of conducting various Workshops, Competition, Training program, enineering projects etc.</p>
                        </div>
                        <div className="cardAU">
                            <p className="title">ONE STOP <br></br>HOBBY NEEDS</p>
                            <p className="text">This wing of aero2astro is an electronics store which came with an intension of providing everyone with there electronics, materials needs to bring there ideas to real with there innovation.</p>
                        </div>
                    </div>
                </div>
                <AboutUsStats></AboutUsStats>
                <div className='AboutUsTimeline'>
                    <div className="timeline">
                        <div className="containerTL left">
                            <div className="date">5-10-19</div>
                            <i className="icon fa fa-home"></i>
                            <div className="content">
                                <h2>Mayvi 2019 at Hindustan University, Chennai</h2>
                                <p>
                                    Make Your Vimana 2019 was hosted at Hindustan University. Like the previous year, Mayvi 2k19 was also a huge success.
                                </p>
                            </div>
                        </div>
                        <div className="containerTL right">
                            <div className="date">5-10-19</div>
                            <i className="icon fa fa-home"></i>
                            <div className="content">
                                <h2>Mayvi 2019 at Hindustan University, Chennai</h2>
                                <p>
                                    Make Your Vimana 2019 was hosted at Hindustan University. Like the previous year, Mayvi 2k19 was also a huge success.
                                </p>
                            </div>
                        </div>
                        <div className="containerTL left">
                            <div className="date">5-10-19</div>
                            <i className="icon fa fa-home"></i>
                            <div className="content">
                                <h2>Mayvi 2019 at Hindustan University, Chennai</h2>
                                <p>
                                    Make Your Vimana 2019 was hosted at Hindustan University. Like the previous year, Mayvi 2k19 was also a huge success.
                                </p>
                            </div>
                        </div>
                        <div className="containerTL right">
                            <div className="date">5-10-19</div>
                            <i className="icon fa fa-home"></i>
                            <div className="content">
                                <h2>Mayvi 2019 at Hindustan University, Chennai</h2>
                                <p>
                                    Make Your Vimana 2019 was hosted at Hindustan University. Like the previous year, Mayvi 2k19 was also a huge success.
                                </p>
                            </div>
                        </div>
                        <div className="containerTL left">
                            <div className="date">5-10-19</div>
                            <i className="icon fa fa-home"></i>
                            <div className="content">
                                <h2>Mayvi 2019 at Hindustan University, Chennai</h2>
                                <p>
                                    Make Your Vimana 2019 was hosted at Hindustan University. Like the previous year, Mayvi 2k19 was also a huge success.
                                </p>
                            </div>
                        </div>
                        <div className="containerTL right">
                            <div className="date">5-10-19</div>
                            <i className="icon fa fa-home"></i>
                            <div className="content">
                                <h2>Mayvi 2019 at Hindustan University, Chennai</h2>
                                <p>
                                    Make Your Vimana 2019 was hosted at Hindustan University. Like the previous year, Mayvi 2k19 was also a huge success.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
                <p className='AboutUsTMTitle'>Our Team</p>
                <div className='AboutUsTM'>
                    <div className="containerTC">
                        <div className="box">
                            <div className="imgBox">
                                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""></img>
                            </div>
                            <div className="contentTC">
                                <h2>Krish Undre<br></br>
                                    <span>Website Developer</span></h2>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBox">
                                <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt=""></img>
                            </div>
                            <div className="contentTC">
                                <h2>Krish Undre<br></br>
                                    <span>Website Developer</span></h2>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBox">
                                <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt=""></img>
                            </div>
                            <div className="contentTC">
                                <h2>Krish Undre<br></br>
                                    <span>Website Developer</span></h2>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >

    )
}


export default AboutUs
