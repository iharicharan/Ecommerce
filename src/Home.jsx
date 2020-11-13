import React from 'react'
import hari from './hari.png'
import node from './nodejs.png'
import react from './reactjs.png'
import python from './python.jpg'
import javascript from './javascript.png'
import graph from './graph.png'
import sql from './sql.jpeg'
import java from './java.jpeg'
import c from './c.jpg'
import Form from './Form.jsx'
import Home1 from './Home1'
import {Fade} from "react-reveal";

import {useMediaQuery} from 'react-responsive'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'

const Home=()=>{
  const div3={
    color:'white',backgroundColor: 'rgb(32, 102, 32)',fontSize:'30px',padding:'25px',borderRadius: '50%'
,textAlign: 'center',marginLeft: '20px',marginBottom: '15px'
};
const div4={
  color:'white',backgroundColor: 'rgb(32, 102, 32)',fontSize:'80px',padding:'20px',borderRadius: '50%'
,marginBottom: '15px'
};
  function click(){
   var x=document.getElementById('form')
   if(x.style.display==='none'){
     x.style.display='block'

   }
      else{
     x.style.display='none'
    
    
   }
  }
  
  function click1(){
    var x=document.getElementById('register')
    if(x.style.display==='none'){
      x.style.display='block'
      x.style.marginTop='80px'
     
      document.getElementsByClassName('course')[0].style.display='none'
   document.getElementById('course').style.display='none'
 
    }
       else{
      x.style.display='none'
      document.getElementsByClassName('course')[0].style.display='block'
      document.getElementById('course').style.display='block'
     
     
    }
   }
  
 const Desktop=({children})=>{
   const isDesktop=useMediaQuery({minWidth:992})
   return isDesktop?children:null
 }
 const Mobile=({children})=>{
  const isMobile=useMediaQuery({maxWidth:766})
  return isMobile?children:null
}
 const btn1=()=>{
   document.getElementById('javascript').style.display='block'
   document.getElementById('react').style.display='none'
   document.getElementById('node').style.display='none'
   document.getElementById('python').style.display='none'
 }
 const btn2=()=>{
  document.getElementById('javascript').style.display='none'
   document.getElementById('react').style.display='block'
   document.getElementById('node').style.display='none'
   document.getElementById('python').style.display='none'
}
const btn3=()=>{
  document.getElementById('javascript').style.display='none'
   document.getElementById('react').style.display='none'
   document.getElementById('node').style.display='none'
   document.getElementById('python').style.display='block'
}
const btn4=()=>{
  document.getElementById('javascript').style.display='none'
   document.getElementById('react').style.display='none'
   document.getElementById('node').style.display='block'
   document.getElementById('python').style.display='none'
}
const btn11=()=>{
  document.getElementById('graph').style.display='none'
  document.getElementById('sql').style.display='block'
  document.getElementById('c').style.display='none'
  document.getElementById('java').style.display='none'
}
const btn22=()=>{
  document.getElementById('graph').style.display='none'
  document.getElementById('sql').style.display='none'
  document.getElementById('c').style.display='block'
  document.getElementById('java').style.display='none'
}
const btn33=()=>{
  document.getElementById('graph').style.display='none'
  document.getElementById('sql').style.display='none'
  document.getElementById('c').style.display='none'
  document.getElementById('java').style.display='block'
}
const btn44=()=>{
  document.getElementById('graph').style.display='block'
  document.getElementById('sql').style.display='none'
  document.getElementById('c').style.display='none'
  document.getElementById('java').style.display='none'
}
function plus(){
 var x=document.getElementById('plus1')
 if(x.style.display==='none'){
   x.style.display='block'
   document.getElementById('on').style.color='red'
 }
 else{
   x.style.display='none'
   document.getElementById('on').style.color='black'
 }
}
function pluss(){
  var x=document.getElementById('pluss')
  if(x.style.display==='none'){
    x.style.display='block'
    document.getElementById('on1').style.color='red'
  }
  else{
    x.style.display='none'
    document.getElementById('on1').style.color='black'
  }
 }
 function plusss(){
  var x=document.getElementById('plusss')
  if(x.style.display==='none'){
    x.style.display='block'
    document.getElementById('on2').style.color='red'
  }
  else{
    x.style.display='none'
    document.getElementById('on2').style.color='black'
  }
 }
 function plussss(){
  var x=document.getElementById('plussss')
  if(x.style.display==='none'){
    x.style.display='block'
    document.getElementById('on3').style.color='red'
  }
  else{
    x.style.display='none'
    document.getElementById('on3').style.color='black'
  }
 }
    return(
      <>
 <Desktop>   
   
<main className='s4'> 
     <div id='form' style={{display:'none',marginTop:'70px'}} >
       <Form/>
     </div>
<div className='course' style={{animation:'animate 1s',marginTop:'200px'}}>
  <h1>TutorialsWebsite Courses</h1>
  <h3>Your Bright Future is Our Mission</h3>
  <p style={{marginTop:'20px'}}>India's best plateform to learn programming with high 
    quality videos from the comforts of your
     drawing rooms at your own place.</p>
     <button onClick={click} style={{padding:'5px',width:'100px'}}>Click Here</button>
</div>

<div>
    <img src={hari} className='fademove' alt="description "/>
</div>
</main>
</Desktop>



<Mobile> 
<main className='s4'> 
     <div id='register' style={{display:'none'}}>
       <Form/>
     </div>
<div className='course' style={{animation:'animate 1s'}}>
  <h1>TutorialsWebsite Courses</h1>
  <h3>Your Bright Future is Our Mission</h3>
  <p>India's best plateform to learn programming with high 
    quality videos from the comforts of your
     drawing rooms at your own place.</p>
    
</div>
<div id='course'>
    <img src={hari} className='fademove' alt="description" />
</div>
</main>
<center>
<div className='login1'>
<button onClick={click1}>Login/Signup</button>  
</div>
</center>

</Mobile>

<Desktop>

<section className='homepage1'>
<Fade left duration={1500} distance='35px'>
  <div style={{textAlign:'center',marginRight:'120px',marginTop:'40px',marginBottom:'50px'}}>
  <h4>#OnlineLearning</h4>
   <h4>Our Features</h4>
  </div>
  <article id='a2'>
    <div>
    <i className="fa fa-graduation-cap" style={div3}></i>
<h6>Multi-Tier Courses</h6>
<p>Explore your coding skills with our 
variety of fresh and popular topics.</p>
    </div>
    <div>
    <i className="fa fa-shopping-cart" style={div3}></i>
      <h6>100% Free for Everyone</h6>
      <p>Choose what you'd like to learn 
        from our library free of cost.</p>
    </div>
    <div>
    <i className="fa fa-clock-o" style={div3}></i>
      <h6>Lifetime access</h6>
      <p>Schedule your own time to 
        learn from our course library</p>
    </div>
  </article> 
  </Fade>
</section>

</Desktop>
<br></br>
<Mobile>
<div>
  <center>
  <h3><b>#OnlineLearning</b></h3>
   <h4><b>Our Features</b></h4>
   </center>
  </div>
  
<Carousel style={{backgroundColor:'white',height:'auto'}}>
  
<Carousel.Item>
  <center>
  <p style={{color:'white'}}>jdd</p>
<i className="fa fa-graduation-cap" style={div4}></i></center>
<div style={{color:'white',height:'150px'}}>jdkdj</div>
    <Carousel.Caption style={{color:'black'}}>
     
      <h3>Multi-Tier Courses</h3>
      <p>Explore your coding skills with our 
variety of fresh and popular topics.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <p style={{color:'white'}}>jdd</p>
  <center><i className="fa fa-clock-o" style={div4}></i></center>
  <div style={{color:'white',height:'150px'}}>jdkdj</div>
    <Carousel.Caption style={{color:'black'}}>
      <h3>Lifetime access</h3>
      <p>Schedule your own time to 
        learn from our course library</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <p style={{color:'white'}}>jdd</p>
  <center> <i className="fa fa-shopping-cart" style={div4}></i></center>
  <div style={{color:'white',height:'150px'}}>jdkdj</div>
    <Carousel.Caption style={{color:'black'}}>
      <h3>100% Free for Everyone</h3>
      <p>Choose what you'd like to learn 
        from our library free of cost.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Mobile>
<br></br>

<div className='fade-side' style={{marginTop:'30px'}}>
<Fade right duration={2000} distance='80px'>
<section className='section1'>
    <div id='node'>
      <img src={node} alt="Node"/><br/>
      <p>Nodejs Complete Course For Beginners In Telugu</p>
      <i className="fa fa-star" style={{color:'orange'}}></i> 
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
      <button>Free</button>
    </div>
    
    <div id='python'>
    <img src={python} alt="python"/>
       <p>python Complete Course For Beginners In Telugu</p>
       
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
       <button>Free</button>
    </div>
  <div id='react'>
  <img src={react} alt="react"/>
  <p> React Complete Course For Beginners In Telugu</p>
  
  
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
  <button>Free</button>
  </div>
  
  <div id='javascript'>
    <img src={javascript} alt="javascript"/>
  <p>
    javascript Complete Course For Beginners In Telugu
  </p>
  <i className="fa fa-star" style={{color:'orange'}}></i> 
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
  <button>Free</button>
  </div>
</section>
<center>
<article className='article1'>
  <button onClick={btn1}>1</button>
  <button onClick={btn2}>2</button>
  <button onClick={btn3}>3</button>
  <button onClick={btn4}>4</button>
</article>
</center>
  <section className='section2'>
    <div id='graph'>
    <img src={graph} alt="graph"/>
    <p>Graph Complete Course For Beginners In Telugu
    </p>
    
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <button>Free</button>
    </div>
    <div id='sql'>
    <img src={sql} alt="sql"/>
   <p>SQL Complete Course For Beginners In Telugu</p>
   <i className="fa fa-star" style={{color:'orange'}}></i>
   <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
   <button>Free</button>
    </div>
    
  <div id='c'>
    <img src={c} alt="c"/>
 
    <p>C  Complete Course For Beginners In Telugu</p>
    
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <button>Free</button>
    
  </div>
   <div id='java'>
     <img src={java} alt="java"/>
    
      <p>Java Complete Course For Beginners In Telugu</p>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
       <button>Free</button>
   </div>
  </section>
  <center>
  <article className='article2'>
  <button onClick={btn11}>1</button>
  <button onClick={btn22}>2</button>
  <button onClick={btn33}>3</button>
  <button onClick={btn44}>4</button>
</article>
</center>
</Fade>
</div>

<Fade left duration={2000} distance='40px'>
<section>
  <Home1/>
</section>
</Fade>
<Fade bottom duration={2000} distance='30px'>
<section style={{width:'50%',marginLeft:'25%',marginTop:'50px'}}>
  <div style={{borderBottom:'1px solid black'}}><span style={{display:'flex',justifyContent:'space-between'}}><h5>How can I reach you?</h5><i className='fa fa-plus-circle' id='on' onClick={plus}></i></span>
  <p id='plus1' style={{display:'none'}}>If you are reaching out for a technical problem related to course, 
    please post that in course discussion section only. 
Otherwise we are reachable at programmer.me@gmail.com We are also 
reachable at Instagram and Facebbok Messanger.</p>
  </div>
  <div style={{borderBottom:'1px solid black',marginTop:'40px'}}>
    <span style={{display:'flex',justifyContent:'space-between'}}><h5>Basic information about course that you should know?</h5><i className='fa fa-plus-circle' onClick={pluss} id='on1'></i></span>
    <p id='pluss' style={{display:'none'}}>All free courses are hosted on platform like youtube, 
      so all free courses is also availble on youtube.</p>
  </div>
  <div  style={{borderBottom:'1px solid black',marginTop:'40px'}}>
  <span style={{display:'flex',justifyContent:'space-between'}}><h5>Do you provide support in free courses?</h5><i className='fa fa-plus-circle' onClick={plusss} id='on2'></i></span>
  <p id='plusss' style={{display:'none'}}>As of now, i provide support to questions through facebbok chat or video comment 
section on youtube when i am free. 
I would also request you to please help other students.</p>
  </div>
  <div  style={{borderBottom:'1px solid black',marginTop:'40px'}}>
  <span style={{display:'flex',justifyContent:'space-between'}}><h5>Do you answer of every questions?</h5><i className='fa fa-plus-circle' onClick={plussss} id='on3'></i></span>
<p id='plussss' style={{display:'none'}}>Yes, I answer the every valid question. 
I don't answer those questions which answers 
is already in my video. But due to video forward you missed the point.</p>
  </div>
</section>
</Fade>


     </>

    );
}
export default Home;
