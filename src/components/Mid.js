import React from 'react'
import comp from '../images/Component 27.png'
import { BsSearch } from "react-icons/bs";


const Mid = () => {
    return (
        <section>
            <br></br>
            <br></br>
        <div class="container">
       
	<div class="row">
        
		<br></br>
	</div>
	
	<div class="block">
        
      <div class="row">
          
        <div class="col">
          <img alt="img" class="img-right" src={comp} />
         
          <div class="content-heading">
              <br></br><br></br><br></br><br></br>
              <h1 style={{ marginLeft:"100px" , zIndex:"1" , color:"darkblue"}}>Become a true  <span style={{color:'lightblue'}} >SUPERFAN</span> </h1></div>
          <p style={{ marginLeft:"100px"}}>Support your favourite creator by sharing their #TweetsFromHome wall with<br></br> your loved ones and grow their community.
          <br/>
          <br/>
          <span style={{display:"flex" ,width:"400px",backgroundColor:"white"}} class="input-group-text " id="search-addon">
          <BsSearch />&nbsp;&nbsp;
           <br></br><span>
               <input  id="searchbar" type="search" style={{backgroundColor:"transparent",width:"300px"}} 
           placeholder="Search your favourite creator" aria-describedby="button-addon2" class="form-control border-0 bg-light"></input></span>
  </span>
          
          <br/>
          <br/><button style={{borderRadius:"25px", paddingLeft:"60px",paddingRight:"60px", marginRight:"60px"}} 
    class="btn btn-primary btn-lg float-right">View Tweets from Home</button>

          </p>
          
        </div>
        

     </div>
     
     <br/>
     
    </div>
    
</div>
</section>
    )
}

export default Mid
