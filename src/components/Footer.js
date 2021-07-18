import React from 'react'
import footer from '../images/Group 4.png'
import { IoMdPaper } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
    return (
        <>
        <footer>
    <div class="container" style={{marginTop:"10%"}}>
        <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-4 col-xs-12">
            <img alt="img" src={footer}/>
            </div>
            
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h5 style={{fontWeight:"bolder" ,color:"darkblue"}}>Get early access for Bread<span ><AiOutlineArrowRight /></span></h5>
            </div>
       
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12" >
            <span style={{marginLeft:"60%"}}><IoMdPaper />&nbsp;&nbsp;Privacy Policy</span><br></br>
                 <span style={{marginLeft:"60%"}} ><IoMdPaper />&nbsp;&nbsp;Terms of Use</span>
            </div>
       </div> 
    </div>
</footer>






{/* 
        <div className="row" style={{marginTop:"8%"}}>
            <div className="col1">
            <img src={footer}/>
            </div>
               
                <div className="col2">
                 <h5 style={{fontWeight:"bolder" ,color:"darkblue",textAlign:"center"}}><a>Get early access for Bread-></a></h5>
                </div>
                <div className="col3" style={{marginBottom:"5%"}}>
                 <span style={{marginBottom:"0.5%",marginLeft:"85%"}}><IoMdPaper />&nbsp;&nbsp;Privacy Policy</span>
                 <span style={{marginBottom:"0.5%",marginLeft:"85%"}}><IoMdPaper />&nbsp;&nbsp;Terms of Use</span>
                 </div>
        
        </div> */}
        </>
    )
}

export default Footer
