import { useState } from "react"
import "./Navbar.scss"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
const [active,setActive]=useState(false)
const [open,setOpen]=useState(false)

const isActive =()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
}

useEffect(()=>{
window.addEventListener("scroll",isActive);
return ()=>{
    window.removeEventListener("scroll",isActive)
}
},[])

const curentUser ={
    id:1,
    username:"houssem",
    isSeller:true,
}
  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <span className="text">fiverr</span>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {! curentUser ?.isSeller && <span>Become a seller</span>}
                {! curentUser && <button>Join</button>}
                {curentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://3dmodels.org/wp-content/uploads/2018/06/25/ivysaur_pokemon_600_lq_0001.jpg" alt="" />
                        <span>{curentUser?.username}</span>
                        {open &&<div className="options">
                            {
                                curentUser.isSeller && (
                                    <>
                                    <span>Gigs</span>
                                    <span>Add New Gig</span>
                                    </>
                                )
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {active &&
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
