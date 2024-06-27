import { useState } from "react"
import "./Navbar.scss"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

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

const curentUser ={
    id:1,
    username:"houssem",
    isSeller:true,
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
                {! curentUser && <button>Join</button>}
                {curentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://3dmodels.org/wp-content/uploads/2018/06/25/ivysaur_pokemon_600_lq_0001.jpg" alt="" />
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
                            <Link className="link" to="/" >Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/") && 
        <>
        <hr/>
        <div className="menu">
            <span>test1</span>
            <span>test2</span>
            <span>test3</span>
        </div>
        </>
        }
    </div>
  )
}
