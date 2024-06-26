import IntroBG from '../Images/Home pg.png';
import SpaceBG from '../Images/mission space.jpg';
import TechBG from '../Images/mission tech.png';
import FeaturedOnLogo from '../Featured on/suntv.png';
import BlogBG from '../Blog Images/bg1.jpg';
import '../CSS/Home.css';
// import ContactCard from './ContactCard';
import Think from '../Asset/think.svg'
import Innovate from '../Asset/innovate.svg'
import Explore from '../Asset/explore.svg'
// import ServicesTicker from './OverflowComponent';
// import OverflowComponent from './SmoothScroll';
import SmoothScroll from '../Component/SmoothScroll';
import { Tilt } from 'react-tilt'

function Home() {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (<div>
        <div className='Home'>

            <div className='Intro'>
                <div className="cardHM text-white">
                    <img className="card-img img-fluid" src={IntroBG} alt="" id='HomeBG' ></img>
                    <div className="card-img-overlay">
                        <p className='HomeText'>
                            Think Beyond Imagination <br>
                            </br>
                            with <span className='brandcolor'>Aero2Astro</span>
                        </p><br></br>
                        <a href="/" className="btn btn-primary btn-lg button1 " role="button" aria-pressed="true">Know more about Us</a>
                    </div>
                </div>
            </div>
            <div className='Tiles'>
                <div className="container">

                    <div className="row">
                        <div className="col tiles_title">
                            <Tilt options={defaultOptions} >

                                <img className='image_tops' src={Think} alt=''></img><br></br>
                            </Tilt>
                            Think<span className='brandcolor fullstop'>.</span><br></br><div className='TilesContent'>Whether you think you can,
                                or you think you can't--you're right.</div>
                        </div>
                        <div className="col tiles_title">
                            <Tilt options={defaultOptions} >
                                <img className='image_tops' src={Innovate} alt=''></img><br></br>

                            </Tilt>

                            Innovate<span className='brandcolor fullstop'>.</span><br></br><div className='TilesContent'>Creative thinking to solve a
                                problem and to make complex to simple.</div>
                        </div>
                        <div className="col tiles_title">
                            <Tilt options={defaultOptions}>

                                <img className='image_tops' src={Explore} alt=''></img><br></br>
                            </Tilt>
                            Explore<span className='brandcolor fullstop'>.</span><br></br><div className='TilesContent'>Our innovation helps you to explore the
                                inside atmosphere and outside atmosphere.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MissionSpace'>
                <div className="card bg-dark text-white">
                    <img className="card-img SpaceBG" src={SpaceBG} alt="Card" ></img>
                    <div className="card-img-overlay">
                        <div className="container mission_layout">
                            <div className="row">
                                <div className="col mission_title">Mission <br id='breaker'></br><span className='brandcolor'>Space</span></div>
                                <div className="w-100"></div>
                                <div className="col mission_content">Aero2Astro Research Platform's motive is to become the first Indian private organization to establish itself as an aerospace manufacturer and to operate a private rocket launch platform.
                                    <br></br>
                                    <br></br>
                                    Established in 2017, Aero2Astro is located at HTBI & HEIC, Hindustan University, Chennai. A team of innovators and enthusiasts united with the intention of developing groundbreaking ideas to revolutionize the fields of aeronautics and astronautics.</div>
                            </div>
                            <div className="col mission_button">
                                <a href="/" className="btn btn-primary btn-lg button2 " role="button" aria-pressed="true">More on Mission Space</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MissionTech'>
                <div className="card text-white">
                    <img className="card-img TechBG" src={TechBG} alt="Card" ></img>
                    <div className="card-img-overlay">
                        <div className="container mission_layout">
                            <div className="row">
                                <div className="col mission_title_2">Mission <br id='breaker'></br><span className='brandcolor'>Tech</span></div>
                                <div className="w-100"></div>
                                <div className="col mission_content_2">The Aero2Astro team is currently engaged in the FLYALOT DRONEAID project, aimed at developing a UAV (Unmanned Aerial Vehicle) designed to provide aid to soldiers stationed at our borders and in war zones.
                                    <br></br>
                                    <br></br>
                                    This innovative drone is intended to assist soldiers who are affected by climatic changes, sustain injuries, or become unconscious while on duty.</div>
                            </div>
                            <div className="col mission_button_2">
                                <a href="/" className="btn btn-primary btn-lg button2 " role="button" aria-pressed="true">More on Mission Tech</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='SuccessYrs'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='seven'>7</p>
                        </div>
                        <div className="col">
                            <p className='years'>Years of Successful Work in this Fields</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <OverflowComponent></OverflowComponent> */}
            <SmoothScroll></SmoothScroll>

            {/* <div className='FeaturedOn'>
                <p className='FeaturedOn_Title'>Feartured <span className='brandcolor'>on</span></p>
                <div className="row FeaturedOn_Grid">
                    <div className="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div className="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div className="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div className="w-100"></div>
                    <div className="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div className="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>
                    <div className="col"><img src={FeaturedOnLogo} alt='Sun TV Logo'></img></div>

                </div>
            </div> */}
            <div className='BlogSection'>
                <p className='Blog_Title'>Read <span className='brandcolor'>Our</span> Blogs</p>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 BlogBG" src={BlogBG} alt="First slide"></img>
                            <div className="carousel-caption d-none d-md-block Blog_content">
                                <h5>AERODYNAMICS OF A ROCKET</h5>
                                <p>Talks about the aerodynamics of rockets</p>
                                <a href="https://aero2astro.com/home/blog/aerodynamics-of-a-rocket" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 BlogBG" src={BlogBG} alt="Second slide"></img>
                            <div className="carousel-caption d-none d-md-block Blog_content">
                                <h5>AERODYNAMICS OF A ROCKET</h5>
                                <p>Talks about the aerodynamics of rockets</p>
                                <a href="https://aero2astro.com/home/blog/aerodynamics-of-a-rocket" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 BlogBG" src={BlogBG} alt="Third slide"></img>
                            <div className="carousel-caption d-none d-md-block Blog_content">
                                <h5>AERODYNAMICS OF A ROCKET</h5>
                                <p>Talks about the aerodynamics of rockets</p>
                                <a href="https://aero2astro.com/home/blog/aerodynamics-of-a-rocket" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read More</a>
                            </div>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div >
            {/* <ContactCard></ContactCard> */}

        </div>
    </div >)
}

export default Home