import React,{useEffect, useState} from 'react';
import { VuesaxLinearSend2 } from "../VuesaxLinearSend2/VuesaxLinearSend2.jsx";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./index.css";
import { Link } from 'react-router-dom';

export const Home = ({ className, ...props }) => {

  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState('Results');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // console.log(currentPage);
  const [resData,setData] = useState([])
  
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

    return (

      <>
      <nav>
      <div className={`${isMobileMenuOpen? 'mobile-menu-open' : 'nav'}`}>
        
        <div className="nav-top">
          <img className="intaste_logo" src="../build/static/media/intaste_logo.png" alt="Intaste logo"/>
          
          <div className="button_group">
            {/* Add link to Main page with this button */}
          {/* <Link to="/chat" > */}  
          <button className="rectangle-8" onClick={homeButtonClick}>
            <div className="new-chat">New Chat</div>
            <div><img className="plus" src="../build/static/media/plus0.svg" alt="plus icon"/></div>
          </button>
          {/* </Link> */}
          <Link to="/chat" >
          <button className="home_button" onClick={homeButtonClick}>
            <img className="home_logo" src="../build/static/media/home_button_green.png" alt="Home logo"/>
          </button>
          </Link>
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
            <div >
            <button className="frame-1437252837">
            <img className="ellipse-517" src="../build/static/media/ellipse-5170.png" alt="profile"/>
            <div className="austin-dsouza">Austin Dsouza </div>
            <img className="" src="../build/static/media/vuesax-linear-setting-20.svg" alt="settings icon"/>
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
  <div className="home_screen">
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
        <div className="filter_list_2">
          <button className="filter_button_2">
            <img className="filter_img" src="../build/static/media/img0.svg" />
            <div className="filter_text">Filters </div>
          </button>
          <button className="rating_button_2">
            <div className="rating_text">Rating: 4.0+ </div>
          </button>
          <button className="filter_button_2">
            <div className="pure-veg_text">Margaretta Pizza </div>
          </button>
          <button className="filter_button_2">
            <div className="nov-veg_text">Tikka </div>
          </button>
        </div>

        <div className="cards-list_2">
          {
           Object.values(resData.data).map((item,index)=> (
              <div className="card_layout">
              <div className="cards">
                <div className="card_main">
                  <div className="card_main_text">
                    <div className="best-match_text">Best match </div>
                    <div className='shop-logo-con'>
                    <img className="shop_logo_2" src={`../build/static/media/${item.link.includes("swiggy") ? 'swiggy':'zomato'}.png`} />
                    </div>
    
                  </div>
                  <div className="card_title_group">
                    <img className="card_img" src={item.img_src}/>
                    <div className="card_title">
                   
                      <div className="card_title_text">
                        <p className="title_text">{item.title} </p>
                      </div>
                      <div className="card_title_text">
                        <h6 className="rest_title">{item.restaurant}</h6>
                      </div>
                      <div className="card_rating">
                        <div className="card_star">
                          <img className="card_star_img" src="../build/static/media/_20.svg" />
                        </div>
                        <div className="card_reviews">
                        {item.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="description-2">
                      <p className="description-2-span">
                        {item.description.substring(0,170)}
                      </p>
                      {/* <p className="description-2-span2">
                        {" "}read more]
                      </p> */}
                      <div className="card_footer">
                    <div className="more-details_text"><a className="more-details_text" href={item.link}>More details</a> </div>
                    <div className="price_tag">
                      <div className="price_text">₹{item.price}</div>
                    </div>
                  </div>
                  </div>
                 
                </div>
              </div>
              </div>
            ))
          }
      
         
          {/* <div className="card_layout">
          <div className="cards">
            
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>
              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card_layout">
          <div className="cards">
            <div className="card_main">
              <div className="card_main_text">
                <div className="best-match_text">Best match </div>
                <div className='shop-logo-con'>
                <img className="shop_logo_2" src="/images/image-760.png" />
                </div>

              </div>
              <div className="card_title_group">
                <img className="card_img" src="/images/bg1.png" />
                <div className="card_title">
                  <div className="card_title_text">
                    <div className="title_text">Margherita Pizza </div>
                  </div>
                  <div className="card_rating">
                    <div className="card_star">
                      <img className="card_star_img" src="/images/_20.svg" />
                    </div>
                    <div className="card_reviews">
                      4.4 (11186 reviews){" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-2">
                  <span className="description-2-span">
                    A classic cheesy Margherita. Cant go wrong.[Fat-14.3 per 100
                    g, Protein-12.6 per 100g , Carbohydrate -39.2 per g ...
                  </span>
                  <span className="description-2-span2">
                    {" "}read more]
                  </span>
              </div>
              <div className="card_footer">
                <div className="more-details_text">More details </div>
                <div className="price_tag">
                  <div className="price_text">₹182 </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          */}
         

        </div>
      </div>
        )
      }

      
</>
    );
};

export default Home;