import React from 'react'
import tweet from '../images/Component 14.png'

const Section = () => {
    return (
        <section className="section">
        <div >
            <h1 style={{marginBottom:"-120px", color:'darkblue',textAlign:'center'}}><span style={{color:"lightblue"}}>Creators</span> are powerful</h1>
        </div>
        <div className="rows">
            
            <div class="column1" >
            <img alt="img" src={tweet}/>
            </div>
            <div class="column2">
                <h5>CREATORS SHAPE CULTURE.</h5>
                <h2 style={{color:"darkblue"}}>2 in 3 twitter users agree that<br></br> creators change and shape culture </h2><br></br>
                <button style={{ backgroundColor:"pink",borderRadius:"25px", marginBottom:"10px" ,paddingLeft:"60px",paddingRight:"60px", marginRight:"60px"}} 
                    class="btn btn-lg float-right">#HiArmy</button>
                    <button style={{ backgroundColor:"#c9ffe5",borderRadius:"25px", marginBottom:"10px",paddingLeft:"60px",paddingRight:"40px", marginRight:"10px"}} 
                    class="btn btn-lg float-right">#everydays</button><br></br>
                    <button style={{ backgroundColor:"#ffdead",borderRadius:"25px",marginBottom:"10px", paddingLeft:"60px",paddingRight:"60px", marginRight:"60px"}} 
                    class="btn btn-lg float-right">#teamtrees</button>
                    <button style={{ backgroundColor:"#08e8de",borderRadius:"25px", marginBottom:"10px",paddingLeft:"60px",paddingRight:"40px", marginRight:"10px"}} 
                    class="btn btn-lg float-right">#BTS</button><br></br>
                    <button style={{ backgroundColor:"#87cefa",borderRadius:"25px", paddingLeft:"60px",paddingRight:"40px", marginRight:"10px"}} 
                    class="btn btn-lg float-right">#botArmy</button>
                    
            </div>
            </div>
        </section>
    )
}

export default Section
