import React from 'react';
import './about.css';
import STS_LOGO from './Images/sts_logo.png';
import C1 from './Images/c1.png';
import C2 from './Images/c2.png';
import C3 from './Images/c3.png';
import Footer_logo from './Images/Footer_Logo.png';
import member from './Images/member.png';
import Footer_Gmail from './Images/Footer_Gmail.png';
import Footer_Facebook from './Images/Footer_Facebook.png';
import Footer_Instagram from './Images/Footer_Instagram.png';
import Footer_Twitter from './Images/Footer_Twitter.png';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import bn from './Images/bg.png';

class about extends React.Component{
render(){
  const BackgroundImage={
      backgroundImage:`url(${bn})`,
      
      backgroundSize:'cover'
  };


    return(
        <div>
           <div style={BackgroundImage}>

        
<nav class="navbar navbar-custom navbar-light navbar-expand-lg fixed-top">
    <a class="navbar-brand" href={""}></a>
    <img src={STS_LOGO} width="100" height="80"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item">
                <a class="nav-link" href={"index.html"}>Home</a>
                
            </li>
            <li class="nav-item">
                {/* <a class="nav-link" href={"blog.html"}>Blog</a> */}
                 <NavLink   to="/blog" class="nav-link"> Blog</NavLink> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href={"registration.html"}>Partner & Volunteer</a>
            </li>
            <li class="nav-item">
                {/* <a class="nav-link" id="active" href={"about.html"}>About Us</a> */}
                <NavLink   to="/about" class="nav-link"> About Us</NavLink> 
            </li>
            <li class="nav-item">
                <a class="nav-link" href={"contact.html"}>Contact Us</a>
            </li>
            <li class="nav-item">
                <a class="btn nav-link donate-btn" href={"donate.html"} id="donate">Donate</a>
            </li>
        </ul>
    </div>
</nav>


<div id="carouselExampleControls" class="carousel slide justify-content-center align" data-bs-ride="carousel">
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


<div class="about-us-body">
<div class="container-md">
    <div class="row">
        <div class="col-md-3">
            <div class = "flex-container">
                <img id="aboutus-img" src={Footer_logo}/>
                 
            </div>
        </div>
        <div class="col-md-9">
            <div class="text">
                <p style={{fontSize:"20px"}}><b>Streets to Schools</b> is a youth organization actively bridging children and youth in street situations by amplifying the Global Goals for Sustainable Development and UN Convention on the Rights of the Child. Investing in the young to achieve 2030 and beyond.</p>
        </div>
        </div>
    </div>  
</div>


<div class = "container-md">
    <div class="col-md-12">
        <div class="text">  <br/>
        <h1 class="title" >OUR MISSION</h1><br/>
        <p style={{fontSize:18}} >Showcase the significance of quality education and highlight the value of lifelong learning by giving out-of-school youth the invaluable opportunity to learn. By valuing rights-based and needs-based approaches, Streets to Schools enables out-of-school youth to go back to schools through the implementation of the United Nations Sustainable Development Goals.</p>
    </div>
    </div>
</div>
<div class = "container-md">
    <div class="col-md-12">
        <div class="text"><br/>
        <h1 class="title" >OUR VISION</h1> <br/>
        <p style={{fontSize:18}}>Streets to Schools envisions itself as an avenue for all stakeholders and beneficiaries to be in a continued co-learning process where education is given paramount importance. Furthermore, Streets to Schools hopes to go beyond the sustainable development goals, highlighting partnership through the SDGs to contribute to the 2030 agenda, and branch out from Metro Manila by sharing its advocacy to young leaders.</p>
    </div>
    </div>
</div>




<div class="container-md">
<div class="row">
    <div class="col-xs-12 center-block text-center">
        <div class="text">
        <h1 class="title"><b>MEET THE TEAM</b></h1><br/><br/>
        </div>
    </div>
    <div class="col">
        <div class="img-container">
            <img id="team-img" src={member} style={{width:'100%'}}/>
        </div>
        <div class="text-team">
        <br/><p style={{fontSize:'22px'}}><b>Qjiel Mariano</b></p>
            <p style={{fontSize: '18px'}}><i>Founder & Executive Director</i></p>
        </div>
    </div>
    <div class="col">
        <div class="img-container">
            <img id="team-img" src={member} style={{width:'100%'}}/>
        </div>
        <div class="text-team">
        <br/><p style={{fontSize: '22px'}}><b>Qjiel Mariano</b></p>
            <p style={{fontSize: '18px'}}><i>Advocacy Coordinator</i></p>
        </div>
    </div>
    <div class="col">
        <div class="img-container">
            <img id="team-img" src={member} style={{width:'100%'}}/>
        </div>
        <div class="text-team">
            <br/><p style={{fontSize: '22px'}}><b>Qjiel Mariano</b></p>
            <p style={{fontSize: '18px'}}><i>Founder & Executive Director</i></p>
        </div>
    </div>
    <div class="col">
        <div class="img-container">
            <img id="team-img" src={member} style={{width:'100%'}}/>
        </div>
        <div class="text-team">
            <br/><p style={{fontSize: '22px'}}><b>Qjiel Mariano</b></p>
            <p style={{fontSize: '18px'}}><i>Advocacy Coordinator</i></p>
        </div>
    </div>
    
</div>
</div>

<div class="container-md">
<div class="col-md-12">
    <div class="text">
        <h1 class="title">AWARDS & RECOGNITIONS</h1><br/>
    </div>  

    <ul style={{fontSize: '18px'}} class="aboutus-recognitions">
            <li>Winner, ESD Okayama Awards 2021</li>
            <li>Outstanding GYS Alumni Safe Space Heroes 2021 [Karapatan at Kabataan Paligsahan ng Mga Maikling Pelikula]</li>
            <li>2nd Place, Harvard Innovation Challenge Southeast Asia Well-Being and Equity Track</li>
            <li>United Nations Population Fund Kabayani Challenge Fund Winner</li>
            <li>Advocates' Choice Award (Inter-Pillar Category) of the SDG Youth Awards in the Asia Pacific 2020</li>
            <li>Outstanding GYS Alumni Safe Space Heroes 2020</li>
            <li>People Defender of the Year, Global Institute for Youth Development NYLC</li>
            <li>Winner, Jesse M. Robredo Foundation Be Like Jesse Youth Grant Competition [Ladders to Literacy]</li>
            <li>National Finalist, 18th Ten Accomplished Youth Organization (TAYO) Awards [PelikuLansangan]</li>
            <li>National Finalist, 17th Ten Accomplished Youth Organization (TAYO) Awards [Ladders to Literacy]</li>
            <li>Top 5, Global Youth Summit Seed Grant Competition</li>
            <li>Finalist, Jesse M. Robredo Foundation Be Like Jesse Youth Grant Competition (Alitaptap)</li>
            <li>Live Screening Qualifiers, Ideas Positive 10</li>
            <li>Shortlisted, Ten Accomplished Youth Organization Awards (Alitaptap)</li>
            <li>Finalist, Sikhay Youth Community Service Awards</li>
    </ul>
</div>
</div>
</div>


<footer class="footer">
<div class="row d-flex justify-content-center align-items-center text-center">

    <div class="col-md">
        <img src={Footer_logo} style={{width:'100%'}} class="responsive"/>
    </div>

    <div class="d-flex flex-column col-md" id="footer">
        <h1>STREETS TO SCHOOLS</h1>
        <div class="box d-flex flex-row justify-content-center">
            <a href={"mailto:streetstoschools.org@gmail.com"} target="_blank"><img src={Footer_Gmail} class="img-fluid mx-1 rounded"/></a>
            <a href={"https://www.facebook.com/StreetstoSchoolsProject/"} target="_blank"><img src={Footer_Facebook} class="img-fluid mx-1 rounded"/></a>
            <a href={"https://www.instagram.com/streetstoschools.project/"} target="_blank"><img src={Footer_Instagram} class="img-fluid mx-1 rounded"/></a>
            <a href={""} target="_blank"><img src={Footer_Twitter} class="img-fluid mx-1 rounded"/></a>
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
        </div>
    );
    }
}

export default about;