import './App.css';
import '../src/CSS/Navbar.css';
import logo from '../src/Images/Transparent-01.png';
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './Component/Home';
// import AboutUs from './Components/AboutUs';
// import ContactUs from './Components/ContactUs';
// import Career from './Components/Career';
// import Explore from './Components/Explore';
// import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-prop ">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className='Navlogo' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-set" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">About Us</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/Explore" className="nav-link">Explore</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/Career" className="nav-link">Career</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Missions
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/ContactUs" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
          {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
          {/* <Route path="/Career" element={<Career />} /> */}
          {/* <Route path="/Explore" element={<Explore />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
