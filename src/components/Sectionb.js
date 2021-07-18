import React from 'react'
import { BsSearch } from "react-icons/bs";

const Sectionb = () => {
    return (
        <>
        <div className="sectionb">
            <h1> With #TweetsFromHome, express your love <br></br>for your favourite creator.</h1>
        </div>
        <div className="sectionb1">
            <h3 className="section2" style={{marginLeft:"50px",textAlign:"center",marginBottom:"50px"}}> 
            Choose the top tweets that you absolutely admire to create your version of their #TweetsFromHome wall and<br></br> simply share on Twitter. 
            </h3>
            <span style={{marginLeft:"40%",marginBottom:"2%",display:"flex" ,width:"350px",backgroundColor:"white"}} class="input-group-text " id="search-addon">
          <BsSearch />&nbsp;&nbsp;
           <br></br><span>
               <input  id="searchbar" type="search" style={{backgroundColor:"transparent",width:"300px"}} 
           placeholder="Search your favourite creator" aria-describedby="button-addon2" class="form-control border-0 bg-light"></input></span>
  </span>

  <button style={{ borderRadius:"25px", paddingLeft:"60px",paddingRight:"60px",marginLeft:"42%" , marginRight:"60px"}} 
    class="btn btn-primary btn-lg ">Sign in to Continue</button>
        </div>
        </>
    )
}

export default Sectionb
