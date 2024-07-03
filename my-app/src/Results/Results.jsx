import React, { useEffect, useState } from 'react';
import { VuesaxLinearSend2 } from "../VuesaxLinearSend2/VuesaxLinearSend2.jsx";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Main } from "../Main/Main";
import { Home } from '../Home/Home';
import { Link } from 'react-router-dom';
import "./index.css";
// import "../Main/Main.css"

export const Results = ({ className, ...props }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState('Results');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [resData,setData] = useState([])  
  const handleBackToMain = () => {
    // console.log(setCurrentPage);
      setCurrentPage('Main'); 
    };
    const homeButtonClick = () => {
      // console.log(setCurrentPage);
      setCurrentPage('Home'); 
    };

  // const handleButtonClick = () => {
  //   setCurrentPage('Main'); 
  // };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const getData=()=>{
    fetch('api-response.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      Object.values(myJson.data).map((item,index)=>console.log(item.title,index))

      });
  }
  useEffect(()=>{
    getData()
  },[])
    return (
    <>
    <nav>
    <div className={` ${isMobileMenuOpen? 'mobile-menu-open' : 'nav'} `}>
      
      <div className="nav-top">
        <img className="intaste_logo" src=" intaste_logo.png" alt="Intaste logo"/>
        
        <div className="button_group">
          {/* {currentPage === 'Results' && ( */}
          <Link to='/chat' className='link'>
        <button className="rectangle-8" onClick={handleBackToMain}>
          <div className="new-chat">New Chat</div>
          <div><img className="plus" src=" plus0.svg" alt="plus icon"/></div>
        </button>
        </Link>
        {/* )} */}
        {/* {currentPage === 'Results' && ( */}
        <Link to="/" >
        <button className="home_button" onClick={homeButtonClick}>
          <img className="home_logo" src=" home_button_white.png" alt="Home logo"/>
        </button>
        </Link>
        {/* )} */}
        </div>
      </div>
        
        <div className="line"></div>
        <div className="line2"></div>
        <div className="frame-1437252835">
          <button className="clear-conversations">
            <img className="delete" src=" delete0.svg" alt="delete icon"/>
            <div className="clear-conversations2">Clear conversations </div>

          </button>
          <button className="updates">
            <img className="enlarge" src=" enlarge0.svg" alt="enlarge icon"/>
            <div className="updates2">Updates &amp; FAQ </div>

          </button>
          <button className="logout">
            <img className="logout2" src=" logout1.svg" alt="logout icon"/>
            <div className="log-out">Log out </div>

          </button>
          <div>
          <button className="frame-1437252837">
          <img className="ellipse-517" src=" ellipse-5170.png" alt="profile"/>
          <div className="austin-dsouza">Austin Dsouza </div>
          <img className="" src=" vuesax-linear-setting-20.svg" alt="settings icon"/>
        </button>
          </div>
        </div>
       
        {/* <button className="sign-up-button" onClick={handleLoginClick}>
          <div className="sign-up">Sign Up </div>
        </button> */}
      </div>

    </nav>

          {
            resData.data && (
              <div className='result_screen'>  
              <div className='ham-con'>
                <button onClick={toggleMobileMenu} 
                className={isMobileMenuOpen? 'hide-ham' : 'show-ham-res'}
                >
                <FaHamburger />
              </button>
              <button onClick={toggleMobileMenu} className={!isMobileMenuOpen? 'hide-ham' : 'show-ham'}>
                <IoClose />
              </button>
                </div>        
                  <div className="scearchbar_group">
                  <div className="div_text">
                    <div className="div_position">
                      <div className="div_position2">
                        <div className="emoji_2">🧠 <div className="emoji">🧠 </div></div>
                        
                      </div>
                    </div>
                    <div className="search_text">
                        Margherita Pizza
                    </div>
                  </div>
                  <div className="div_edit">
                    <img className="edit" src=" edit0.svg" />
                  </div>
                </div>
        
                <div className="frame-1437252854">
                  <button className="filter_button">
                    <img className="img" src=" img0.svg" />
                    <div className="filters">Filters </div>
                  </button>
                  <button className="rating_button">
                    <div className="rating-4-0">Rating: 4.0+ </div>
                  </button>
                  <button className="filter_button">
                    <div className="pure-veg">Fried Chicken </div>
                  </button>
                  <button className="filter_button">
                    <div className="nov-veg">Tikka </div>
                  </button>
                </div>
        
                <div className="cards-list">
        {
          Object.values(resData.data).map((item,index)=> (
            <div className="bg">
            <div className="card">
              {/* <div className="frame-3009"> */}
                <div className="frame-3010">
                  <div className="best-match">Best match </div>
                  <div>          
                    <img className="shop_logo" src={` ${item.link.includes("swiggy") ? 'swiggy':'zomato'}.png`}/>
                  </div>
                </div>
                <div className="frame-3006">
                  <img className="rest-img" src={item.img_src} />
                  <div className="frame-3005">
                  
                    <div className="frame-3013">
                      <div className="margherita-pizza">{item.title} </div>
                    </div>
                    <div className="card_title_text">
                        <h6 className="rest_title">{item.restaurant}</h6>
                      </div>
                    <div className="frame-3007">
                      <div className="star-2">
                        <img className="star_img" src=" _21.svg" />
                      </div>
                      <div className="_4-4-11186-reviews">
                      {item.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description">
                    <p className="description-span">
                     {item.description.substring(0,95)}
                    </p>
                    <p className="description-span2">
                      {" "}read more]
                    </p>
                    <div className="frame-3008">
                  <div className="more-details"><a  className="more-details" href={item.link}>More details </a></div>
                  <div className="frame-2999">
                    <div className="cost">₹{item.price} </div>
                  </div>
                {/* </div> */}
              </div>
                </div>
               
              </div>
            </div>
          ))
        }
                 
        
             </div>
        
                  <div className="textbox_group">
                  <div className="textbox_group2">
                    <div className="div_position">
                      <div className="div_position2">
                       
                        <div className="emoji_2">🧠  <div className="emoji">🧠 </div></div>
                      </div>
                    </div>
                    <input type="text" 
                            className="what-s-in-your-mind2" 
                            placeholder="What’s in your mind?..."/>
                             <button className="send_button">
                    <VuesaxLinearSend2 className="send_img"></VuesaxLinearSend2>
                  </button>
                </div>
                  </div>
                 
              </div>
            )
          }
     
      {/* {currentPage === 'Main' && (
        <Main />
      )}
      {currentPage === 'Home' && (
        <Home setCurrentPage={setCurrentPage}/>
      )} */}
      </>

    );
};

export default Results;