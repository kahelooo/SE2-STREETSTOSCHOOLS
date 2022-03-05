import React from 'react';
import './blog.css';
import STS_LOGO from './Images/sts_logo.png';
import C1 from './Images/c1.png';
import C2 from './Images/c2.png';
import C3 from './Images/c3.png';
import featured_image from './Images/featured_image.png'; 
import featured_image2 from "./Images/featured_image2.png";
import featured_image3 from "./Images/featured_image3.jpg";
import forward_Arrow from "./Images/forward_arrow.svg";
import Footer_Logo from "./Images/Footer_Logo.png";
import Footer_Gmail from  "./Images/Footer_Gmail.png";
import Footer_Facebook from "./Images/Footer_Facebook.png";
import Footer_Instagram from "./Images/Footer_Instagram.png";
import Footer_Twitter from "./Images/Footer_Twitter.png";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import bn from './Images/bg.png';

class blog extends React.Component{
    render(){
        /* const BackgroundImage={
            backgroundImage:`url(${bn})`,
            backgroundSize:'cover',
        }; */
      

        return(
            <div>
       <div class="backgroundimage">
    
            

<nav class="navbar navbar-custom navbar-light navbar-expand-lg fixed-top">
    <a class="navbar-brand" href={"#"}></a>
    <img src={STS_LOGO} width="100" height="80"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent" >
        <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item">
                <a class="nav-link" href={"index.html"}>Home</a>
            </li>
            <li class="nav-item">
                {/* <a class="nav-link" id="active" href={"blog.html"}>Blog</a> */}
            <NavLink   to="/blog" class="nav-link"> Blog</NavLink> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href={"registration.html"}>Partner & Volunteer</a>
            </li>
            <li class="nav-item">
                {/* <a class="nav-link" href={"about.html"}>About Us</a> */}
                <NavLink   to="/about" class="nav-link"> About Us</NavLink> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href={"contact.html"}>Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="btn nav-link donate-btn" href={"donate.html" }id="donate">Donate</a>
            </li>
        </ul>
    </div>
</nav>


<div id="carouselExampleControls" class="carousel slide justify-content-center align" data-bs-ride="carousel" >
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src={C1} class="d-block w-100 h-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src={C2} class="d-block w-100 h-100" alt="..."/>
        </div>
        <div class="carousel-item">
            <img src={C3} class="d-block w-100 h-100" alt="..."/>
        </div>
    </div>
</div>
<br/>




<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Filter
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" >Action</a></li>
      <li><a class="dropdown-item">Another action</a></li>
      <li><a class="dropdown-item" >Something else here</a></li>
    </ul>
  </div>


<br/>

<section class="blog col-md">
            <div class="blog-container" > 
              
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image2} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image3} />
                </div>
          
                <div class="blog-text" >
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image2} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image3} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image2} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image3} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image2} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
          
              </div>
          
              <div class="blog-box zoom">
          
                <div class="blog-img">
                <img src={featured_image3} />
                </div>
          
                <div class="blog-text">
                <a href={"content.html"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"content.html"}>Read More</a>
                </div>
              </div>
            </div>
            <a href={"blog.html"}><button id="more_btn"><p>More Posts</p><img src={forward_Arrow} style={{width: '30px', height: '20px' }}/></button></a>
                            
          </section>
          </div>
    

<footer class="footer">
<div class="row d-flex justify-content-center align-items-center text-center">

    <div class="col-md">
        <img src={Footer_Logo} style={{width:'100px'}} class="responsive"/>
    </div>

    <div class="d-flex flex-column col-md" id="footer">
        <h1>STREETS TO SCHOOLS</h1>
        <div class="box d-flex flex-row justify-content-center">
            <a href={"mailto:streetstoschools.org@gmail.com"} target="_blank"><img src={Footer_Gmail} class="img-fluid mx-1 rounded"/></a>
            <a href={"https://www.facebook.com/StreetstoSchoolsProject/"} target="_blank"><img src={Footer_Facebook} class="img-fluid mx-1 rounded"/></a>
            <a href={"https://www.instagram.com/streetstoschools.project/"} target="_blank"><img src={Footer_Instagram} class="img-fluid mx-1 rounded"/></a>
            <a href={"#"} target="_blank"><img src={Footer_Twitter} class="img-fluid mx-1 rounded"/></a>
        </div>
    </div>

    <ul class="r-footer col-md">
        <li id="footer1">
            <h2>SUPPORT</h2>
            <ul class="box">
                <li><a href={"donate.html"}>Donate Now</a></li>
                <li><a href={"registration.html"}>Partner</a></li>
                <li><a href={"registration.html"}>Volunteer</a></li>
            </ul>
        </li>
        <li id="footer1">
            <h2>CONNECT</h2>
            <ul class="box" >
                <li><a href={"about.html"}>About Us</a></li>
                <li><a href={"contact.html"}>Contact Us</a></li>
                <li><a href={"contact.html"}>FAQ</a></li>
            </ul>
        </li>
        <li id="footer1">
            <h2>DISCOVER</h2>
            <ul class="box">
                <li><a href={"index.html"}>Latest Stories</a></li>
                <li><a href={"index.html"}>Upcoming Events</a></li>
            </ul>
        </li>
    </ul>
</div>
<div class="b-footer">
    <p>©2022 Streets to Schools. All rights reserved.</p>
</div>
</footer>
         
</div>
      
        );
    }

}

export default blog;