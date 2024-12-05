import { useState } from "react"
import "./Navbar.scss"
import { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import newRequest from "../../utils/newRequest"


export default function Navbar() {
const [active,setActive]=useState(false)
const [open,setOpen]=useState(false)

const {pathname} =useLocation()

const isActive =()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
}

useEffect(()=>{
window.addEventListener("scroll",isActive);
return ()=>{
    window.removeEventListener("scroll",isActive)
}
},[])

const curentUser = JSON.parse(localStorage.getItem("curentUser"))

const navigate = useNavigate()

const handleLogout = async()=>{
  try {
    await newRequest.post("/auth/logout")
    localStorage.setItem("curentUser",null)
    navigate("/")
  } catch (error) {
    console.log(err)
  }
}
  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className="link">
                <span className="text">fiverr</span>
                </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {! curentUser ?.isSeller && <span>Become a seller</span>}
                {! curentUser && 
                <Link className="link" to="/register">
                  <button className="xx">Join</button>
                </Link>}
                {curentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src={curentUser.img || "/img/noavatar.jpg"} alt="" />
                        <span>{curentUser?.username}</span>
                        {open &&<div className="options">
                            {
                                curentUser.isSeller && (
                                    <>
                                    <Link className="link" to="/mygigs"> Gigs</Link>
                                    <Link  className="link" to="/add" >Add New Gig</Link>
                                    </>
                                )
                            }
                            <Link className="link" to="/orders" >Orders</Link>
                            <Link className="link" to="/messages" >Messages</Link>
                            <Link className="link" onClick={handleLogout} >Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/") && 
        <>
        <hr/>
        <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
        }
    </div>
  )
}
