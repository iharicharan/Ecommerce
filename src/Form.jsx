
import React from 'react'

const Form=()=>{
    function login(){
        document.getElementById('box').style.display='none'
        document.getElementById('s3').style.display='block'
      }
      function signup(){
        document.getElementById('box').style.display='block'
        document.getElementById('s3').style.display='none'
      }
      
    return(
        <>
        <article id='s2'>
        <form id='box'>
        
        <br/>
          <figure>
        <i className="fa fa-facebook-official" id='icon'></i>
        <i className="fa fa-twitter-square" id='icon'></i>
        <i className="fa fa-instagram" id='icon'></i>
        <i className="fa fa-google-plus-square" id='icon'></i>
        <i className="fa fa-reddit-square" id='icon'></i></figure>
    <label>
    <p id='p'>UserName</p>
    <i className="fa fa-user" id="user"></i>
    <input type='text' 
    placeholder='Enter Name'  
    name='name' />
    </label>
    <label>
    <p>Email</p>
    <i className="fa fa-envelope" id='user'></i>
    <input type='email' 
    placeholder='Enter Email'  
    name='email'/>
    </label>
    <label>
    <p>Password</p>
    <i className="fa fa-key" id='user'></i>
    
    <input type='password' 
    placeholder='Enter Password' 
    name='psw'
    />
    </label>
    <label>
      <p>Confirm Password</p>
      <i className="fa fa-key" id='user'></i>
      <input type='password' 
      placeholder='Confirm Password'  
      name='psw1'/>
      </label>
    <br></br>
    
    <input type='submit' value='SignUp' id='btn'/>
    <center><p>Already have an account? <span href='#' onClick={login} style={{color:'blue',fontWeight:600,cursor:'pointer'}}>Login</span></p></center>
        </form>
      
    </article>
    <article id='s3'>
    
    <br/>
    <label>
    <p>Email</p>
    <i className="fa fa-envelope" id='user'></i>
    <input type='email' placeholder='Enter Email' />
    </label>
    <label>
    <p>Password</p>
    <i className="fa fa-key" id='user'></i>
    
    <input type='password' placeholder='Enter Password' />
    </label>
    <br></br>
    
    <input type='submit' value='Login' id='btn'/>
    <center><p>Don't have an account ? <span href='#' onClick={signup} style={{color:'blue',fontWeight:600,cursor:'pointer'}}>Sign up now</span></p></center>
    </article>
    </>
    );
}
export default Form;