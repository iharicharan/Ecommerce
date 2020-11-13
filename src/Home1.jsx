import React from 'react'
import {useMediaQuery} from 'react-responsive'
import Carousel from 'react-bootstrap/Carousel'

const Home1=()=>{
    const div1={
        textAlign:'center',marginBottom:'40px',marginTop:'30px'
    };
    const div2={
        width:'80%',textAlign:'center',marginLeft:'95px'
    };
    const div3={
        color:'white',backgroundColor: 'rgb(32, 102, 32)',fontSize:'30px',padding:'25px',borderRadius: '50%',textAlign: 'center'
    ,marginBottom:'15px',marginLeft:'50px'
    };
    const Desktop=({children})=>{
        const isDesktop=useMediaQuery({minWidth:992})
        return isDesktop?children:null
      }
      const Mobile=({children})=>{
        const isMobile=useMediaQuery({maxWidth:766})
        return isMobile?children:null
      }
      const div4={
        color:'white',backgroundColor: 'rgb(32, 102, 32)',fontSize:'60px',padding:'20px',borderRadius: '50%'
      ,marginBottom: '15px'
      };
    return(
        <>
        
        <Desktop>
            <section>
                <div style={div1}>
                <h4>#HowToLearnCode</h4>
                <h4>Simple Learning Strategy</h4>
                </div>
                <div style={div2}>
                    
                    <p>It is easy to see that somebody types code, but 
                        if you write code or build something then things 
                        are completely different. We prepare students 
                        for the battle against the real world.</p>
                        
                </div>
                <article id='a2' style={{marginTop:'40px'}}>
                <div>
                <i className="fa fa-video-camera" style={div3}></i>
                <h5>Watch Video Carefullly</h5>
                <p>The first step to watch video carefully without forward or skip 
                    any seconds. Every second with watching the video is very 
                    important for your programming skills.</p>
                </div>
                <div><i className="fa fa-code" style={div3}></i>
                <h5>Write & Execute Your Code</h5>
                <p>Just watching video is not enought for your programming skills. Now write that every 
                    single line of code and execute that. Remember, 
                    don't expect your every code will run first time.</p>
                </div>
                <div><i className="fa fa-trophy" style={div3} ></i>
                <h5>Now develop that stuff</h5>
                <p>Just learning the syntax is not enough. Important step is to 
                    Take some time and develop something and Don't worry about 
                    version 1. Because it is never great but without version 1, 
                    there is no chance to build version 2.</p>
                </div>
</article>
            </section>
            </Desktop>
            
            <Mobile>
<div>
  <center>
  <h3><b>#HowToLearnCode</b></h3>
   <h4><b>Simple Learning Strategy</b></h4>
   </center>
  </div>
<Carousel style={{backgroundColor:'white', height:'430px',display:'flex'}}>
  
<Carousel.Item>
  <center>
    <p style={{color:'white'}}>jdd</p>
  <i className="fa fa-code" style={div4}></i></center>
<div style={{color:'white',height:'270px'}}>jdkdj</div>
    <Carousel.Caption style={{color:'black'}}>
     
      <h3>Write & Execute Your Code</h3>
      <p>Just watching video is not enought for your programming skills. Now write that every 
                    single line of code and execute that. Remember, 
                    don't expect your every code will run first time.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <p style={{color:'white'}}>jdd</p>
  <center><i className="fa fa-video-camera" style={div4}></i></center>
  <div style={{color:'white',height:'270px'}}>jdkdj</div>
    <Carousel.Caption style={{color:'black'}}>
    <h3>Watch Video Carefullly</h3>
      <p>The first step to watch video carefully without forward or skip 
                    any seconds. Every second with watching the video is very 
                    important for your programming skills.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <p style={{color:'white'}}>jdd</p>
  <center> <i className="fa fa-trophy" style={div4} ></i></center>
  <div style={{color:'white',height:'230px'}}>jdkdj</div>
    <Carousel.Caption style={{color:'black'}}>
    <h3>Now develop that stuff</h3>
                <p>Just learning the syntax is not enough. Important step is to 
                    Take some time and develop something and Don't worry about 
                    version 1.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Mobile>
        </>
    );
}
export default Home1;