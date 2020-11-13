import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav1 from './Nav'
import Home from './Home'
import About from './About'
import Service from './Service'
import Footer from './Footer'
import Contact from './Contact'
import './index.css'
import {useMediaQuery} from 'react-responsive'
import './footer.css'
function App() {
  const Mobile=({children})=>{
    const isMobile=useMediaQuery({maxWidth:766})
    return isMobile?children:null
}
const Desktop=({children})=>{
  const isDesktop=useMediaQuery({minWidth:992})
   return isDesktop?children:null
}

  return (
   
      <>
    <header>
     <Nav1/>
     
     <Switch>
       
    <Route exact path='/' component={Home}/>
    <Route exact path='/About' component={About}/>
    <Route exact path='/Service' component={Service}/>
    <Route exact path='/Contact' component={Contact}/>
   <Redirect to ='/' />
    </Switch> 
    </header>
    <Desktop>
            <div className='footer'>
                <Footer/>
            </div>
       </Desktop>
   
   
    <Mobile>
        <div className='Mobile'>
          
        <Footer/>
       
        </div>
        </Mobile>
          
    </>
    
  );
}

export default App;
