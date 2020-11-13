import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import twitter from './twitter.jpg'
const Nav=()=>{
  
    function click(){
        var x=document.getElementById('form')
        if(x.style.display==='none'){
          x.style.display='block'        
        }
           else{
          x.style.display='none'
        }
       }
       
      function side(){
          document.getElementById('resposiveright').style.display='flex'
          document.getElementById('resposiveright').style.flexDirection='column'
          document.getElementById('open').style.display='none'
document.getElementById('close').style.display='flex'
document.getElementById('close').style.justifyContent='flex-end'
          }
      function side1(){
        document.getElementById('resposiveright').style.display='none'
        document.getElementById('open').style.display='block'
        document.getElementById('close').style.display='none'
      
      }
      const Desktop=({children})=>{
        const isDesktop=useMediaQuery({minWidth:992})
        return isDesktop?children:null
      }
      const Mobile=({children})=>{
        const isMobile=useMediaQuery({maxWidth:766})
        return isMobile?children:null

      }
     const twt={
       width:'130px',
       borderRadius:'50%',
       padding:'20px'
     }
    function fbook(){
     window.location.replace('https://facebook.com/programmer.me1')
    
    }
    function lbook(){
    window.location.replace('https://linkedin.com/iharicharan')
   
    }
    function tbook(){
     window.location.replace('https://twitter.com/iharicharan')
    
    }
  const h1=()=>{
    document.getElementById('resposiveright').style.display='none'
    document.getElementById('close').style.display='none'
    document.getElementById('open').style.display='block'
  }
  
    return(
        <>
     <Desktop>
        <section className='navbar'>
            <div className='navbar1'>
                <a href='http://localhost:3000/' style={{textDecoration:'none',color:'black',fontSize:'30px'}}>HariCharan</a>
            </div>
            <div className='navbar2'>
             <span><i className='fa fa-home' style={{fontSize:'25px'}}></i>
         <NavLink to ='/' style={{textDecoration:'none',color:'rgb(85, 17, 85)',marginRight:'20px',fontSize:'17px'}} >HOME</NavLink></span> 
         
        <span><i className='fa fa-address-card'></i>
         <NavLink to ='/About'  style={{textDecoration:'none',color:'rgb(85, 17, 85)',marginRight:'20px',fontSize:'17px'}}>ONLINECOURSES</NavLink></span>
         
         <span><i className='fa fa-car'></i>
 <NavLink to ='/Service' style={{textDecoration:'none',color:'rgb(85, 17, 85)',marginRight:'20px',fontSize:'17px'}}>ABOUT</NavLink></span>
 <span><i className='fa fa-address-book'></i>
 <NavLink to ='/Contact' style={{textDecoration:'none',color:'rgb(85, 17, 85)',fontSize:'17px'}}>CONTACT</NavLink></span>
            </div>
           
          <div className='navbar3'>
        <button onClick={click} className='login'>Login/Signup</button>
            </div>
          
        </section>
      </Desktop>
      
      <Mobile>
      <section className='resposive'>
            <div className='resposive-center'>
                  <i className="fa fa-bars" onClick={side} id='open'></i>
                <i className="fa fa-close" id='close' onClick={side1}></i>
             <center> <a href='http://localhost:3000/' style={{textDecoration:'none',color:'black',fontSize:'25px',marginLeft:'10px'}} >HariCharan</a>
            
               </center>

            </div>
          <div className='resposive-button'>
        
        </div>
        </section>
        <section>
        <div id='resposiveright'>

<p style={{borderBottom:'1px solid rgba(255, 255, 255, 0.17)'}}>
 
  <img src={twitter} style={twt} alt='twitter'/>
  
  
 <i className="fa fa-facebook-square"  id='fbook' onClick={fbook}/>
 <i className="fa fa-twitter-square"  id='tbook' onClick={tbook}/>
 <i className="fa fa-linkedin-square"  id='lbook' onClick={lbook}/>
 
 
</p><section id='center'>
  <div><i className='fa fa-home' ></i>
      <NavLink to ='/' style={{textDecoration:'none',color:'white'}}  onClick={h1}>HOME</NavLink></div>
      <div><i className='fa fa-address-card' ></i>
         <NavLink to ='/About'  style={{textDecoration:'none',color:'white'}} onClick={h1}>ONLINECOURSES</NavLink></div>
         <div><i className='fa fa-car' ></i>
 <NavLink to ='/Service' style={{textDecoration:'none',color:'white'}} onClick={h1}>ABOUT</NavLink></div>
 <div><i className='fa fa-address-book' ></i>
 <NavLink to ='/Contact' style={{textDecoration:'none',color:'white'}} onClick={h1}>CONTACT</NavLink></div>
</section>
            </div>
        </section>
      </Mobile>
       
       
        
       </> 
          
    );
}
export default Nav;