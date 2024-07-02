import React, { useState } from 'react';
import "./main.css";
import { Results } from '../Results/Results';
import { Home } from '../Home/Home';
import Slider from '@material-ui/core/Slider';
import { VuesaxLinearSend2 } from "../VuesaxLinearSend2/VuesaxLinearSend2.jsx";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Main = ({ className, ...props }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState('Main');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const navigate = useNavigate();

  const handleButtonClick = () => {
    setCurrentPage('Results'); 
  };
  const homeButtonClick = () => {
    setCurrentPage('Home'); 
  };
  // const mainButtonClick = () => {
  //   setCurrentPage('Main'); 
  // };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // price range slider
  const [value, setValue] = React.useState([0, 500]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className="container">
        <button onClick={toggleMobileMenu} className={isMobileMenuOpen? 'hide-ham' : 'show-ham'}>
        <FaHamburger />
      </button>
      <button onClick={toggleMobileMenu} className={!isMobileMenuOpen? 'hide-ham' : 'show-ham'}>
        <IoClose />
      </button>
    <div className={` ${isMobileMenuOpen? 'mobile-menu-open' : 'nav'} hide`}>
      
    <div className="nav-top">
      <img className="intaste_logo" src="../build/static/media/intaste_logo.png" alt="Intaste logo"/>
      <div className="button_group">
        <Link to='/chat' className='link' >
        <button className="rectangle-8">
          <div className="new-chat">New Chat</div>
          <div><img className="plus" src="../build/static/media/plus0.svg" alt="plus icon"/></div>
        </button>
        </Link>
      
          <Link to='/'>
        <button className="home_button" onClick={homeButtonClick}>
          <img className="home_logo" src="../build/static/media/home_button_white.png" alt="Home logo"/>
        </button>
        </Link>
        {/* {currentPage === 'Home' && ( */}
        {/* <button className="home_button" onClick={mainButtonClick}>
          <img className="home_logo" src="images/home_button_white.png" alt="Home logo"/>
        </button> */}
        {/* )} */}
        </div>
      </div>

        <div className="line"></div>
        <div className="line2"></div>
        <div className="frame-1437252835">
          <button className="clear-conversations">
            <img className="delete" src="../build/static/media/delete0.svg" alt="delete icon"/>
            <div className="clear-conversations2">Clear conversations </div>

          </button>
          <button className="updates">
            <img className="enlarge" src="../build/static/media/enlarge0.svg" alt="enlarge icon"/>
            <div className="updates2">Updates &amp; FAQ </div>

          </button>
          <button className="logout">
            <img className="logout2" src="../build/static/media/logout1.svg" alt="logout icon"/>
            <div className="log-out">Log out </div>

          </button>
          <div>
          <button className="frame-1437252837">
          <img className="ellipse-517" src="../build/static/media/ellipse-5170.png" alt="profile"/>
          <div className="austin-dsouza">Austin Dsouza </div>
          <img className="vuesax-linear-setting-2" src="../build/static/media/vuesax-linear-setting-20.svg" alt="settings icon"/>
        </button>
          </div>
        </div>
       
        {/* <button className="sign-up-button" onClick={handleLoginClick}>
          <div className="sign-up">Sign Up </div>
        </button> */}
      </div>

      <div className={` ${isMobileMenuOpen? 'hidden' : 'mainframe'}`}>

        <div className="good-day-title">
          Good day! How may I assist you today?
        </div>
        <div className="buttons-list">
          <button className="button-emoji">
            <div className="smiley_emoji">😄</div>
            <div className="emoji-text">Happy</div>
          </button>
          <button className="button-emoji">
            <div className="smiley_emoji">😩</div>
            <div className="emoji-text">Famished</div>
          </button>
          <button className="button-emoji">
            <div className="smiley_emoji">🧐</div>
            <div className="emoji-text">Curious</div>
          </button>
        </div>
        <div className="price-range">
          <Slider
            className="slider"
            value={value}
            onChange={rangeSelector}
            min={0}
            max={5000}
            step={50}
            sx={{
              color: '#00c100',
              '& .MuiSlider-track': {
                backgroundColor: '#cccccc',
              },
              '& .MuiSlider-thumb': {
                color: '#00c100',
              }
            }}
          />
          <span className="price">₹{value[0]} - ₹{value[1]}</span>
        </div>
        <div className="rectangle-91908">
        <div className="frame-422">
          <div className="group-1437252826">
            <div className="group-1437252825">
              <div className="div3">🧠<div className="div2">🧠</div>
              </div>
            </div>
          </div>
          <input
            type="text"
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
            className="what-s-in-your-mind"
            placeholder="What’s in your mind?..."
          />
        </div>

      {/* {currentPage === 'Main' && ( */}
      <Link to='/results'>
        <button className="frame-39" onClick={handleButtonClick}>
          <VuesaxLinearSend2 className="vuesax-linear-send-2-instance"/>
        </button>
        </Link>
     {/* )} */}

        </div>

        <div className="frame-1">
          <div className="frame-2">
            <div className="frame-3">
              <img className="group-1437252828" src="../build/static/media/group-14372528280.svg" alt="icon"/>
              <div className="try-searching">Try searching</div>
            </div>
            <button className="suggestions">
              <div className="suggestions-text">
                🍕🏏 'Boundary Pizza' for Kohli's hits!
              </div>
            </button>
            <button className="suggestions">
              <div className="suggestions-text">
                🍟🏏 'Yorker Fries' for Bumrah's bowls!
              </div>
            </button>
          </div>
          {/* <button className="suggestions">
            <div className="suggestions-text">
              🍔 'Centurion Burger' for Dhoni's innings!
            </div>
          </button> */}

        </div>
      
        <div className="footer"> 
          <span className="footer-span">Aveo AI Mar 19 Version.</span> | Free Preview.{" "}
          <span className="footer-span2">
          Our goal is to make AI systems more natural and safe
          to interact with. Your feedback will help us improve.
          </span>
        </div>
      </div>
      {/* {currentPage === 'Results' && (
        <Results setCurrentPage={setCurrentPage}/>
      )}
      {currentPage === 'Home' && (
        <Home setCurrentPage={setCurrentPage}/>
      )}
      {/* {currentPage === 'Main' && (
        <Main setCurrentPage={setCurrentPage}/>
      )} */} 
      </div>
  );
};



