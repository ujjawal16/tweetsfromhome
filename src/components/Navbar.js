import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import nav from  '../images/nav.png'

const Navbar = () => {
    return (
        <>
 <nav className="navbar navbar-light bg-light">

  <img clasName="nav-image" alt="tweets from home" src={nav} />
  <form className="form-inline">
    <button style={{color:'deepskyblue'}} class="btn btn-lg float-right">Signin</button>
    <button style={{ borderRadius:"25px", paddingLeft:"60px",paddingRight:"60px", marginRight:"60px"}} 
    class="btn btn-primary btn-lg float-right">Home</button>
    
  </form>
</nav>
</>

    )
}

export default Navbar
