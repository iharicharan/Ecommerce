import React from 'react'
import './About.css'
import Form from './Form'

import node from './nodejs.png'
import react from './reactjs.png'
import python from './python.jpg'
import javascript from './javascript.png'
import graph from './graph.png'
import sql from './sql.jpeg'
import java from './java.jpeg'
import c from './c.jpg'
import vue from './vuejs.jpg'
import angular from './angularjs.png'
import php from './php.jpg'
import express from './express.jpg'
import {useMediaQuery} from 'react-responsive'
function About(){
 
  const  Desktop=({children})=>{
    const isDesktop=useMediaQuery({minWidth:922})
    return isDesktop?children:null
  }
  
    const flex={
display:'flex',
flexWrap:'wrap',
justifyContent:'space-around',

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
   
    return(
        <>
        
        
     <main style={flex} className='main'>
            
     <div id='form' style={{display:'none',marginTop:'140px'}}>
                <Form/>
    
           </div>
           <div className='fade-side'>
<section className='section1' style={{marginTop:'20px'}}>
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
<Desktop>
 <section className='section2'>
    <div id='vue'>
    <img src={vue} alt="Vuejs"/>
    <p>VueJs Complete Course For Beginners In Telugu
    </p>
    
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <button>Free</button>
    </div>
    <div id='angular'>
    <img src={angular} alt="Angular"/>
   <p>AngularJs Complete Course For Beginners In Telugu</p>
   <i className="fa fa-star" style={{color:'orange'}}></i>
   <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
   <button>Free</button>
    </div>
    
  <div id='php'>
    <img src={php} alt="PHP"/>
 
    <p>PHP Complete Course For Beginners In Telugu</p>
    
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <button>Free</button>
    
  </div>
   <div id='express'>
     <img src={express} alt="Express"/>
    
      <p>ExpressJs Complete Course For Beginners In Telugu</p>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
    <i className="fa fa-star" style={{color:'orange'}}></i>
       <button>Free</button>
   </div>
  </section>
  </Desktop>
  
  
</div>
</main>

        </>
    );
}
export default About;