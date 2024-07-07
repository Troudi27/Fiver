import { useState } from "react"
import "./Gigs.scss"
import GigCard from "../../components/gigCard/GigCard"
import {gigs} from "./../../data"

export default function Gigs() {

  const [open,setOpen] = useState(false)
  const [sort,setSort] = useState("sales")

  const resort = (type) =>{
    setSort(type)
    setOpen(false)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR - GAPHICS & DESIGN -</span>
        <h1>AI Artists</h1>
        <p> Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min"/>
            <input type="text" placeholder="max"/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            {open && (<div className="rightMenu">
              {sort === "sales" ?(
                <span onClick={()=>resort("createdAt")}>Newest</span>
              ):(
              <span onClick={()=>resort("sales")}>Best Selling</span>
              )}
            </div>)}
          </div>
        </div>
            <div className="cards">
              {gigs.map(gig =>(
                <GigCard key={gig.id} item={gig}/>
              ))}
            </div>
      </div>
    </div>
  )
}
