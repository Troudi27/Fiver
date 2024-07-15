// import { useEffect, useRef, useState } from "react"
// import "./Gigs.scss"
// import GigCard from "../../components/gigCard/GigCard"
// import { useQuery } from "@tanstack/react-query"
// import newRequest from "../../utils/newRequest"
// import { useLocation } from "react-router-dom"

// export default function Gigs() {

//   const [open,setOpen] = useState(false)
//   const [sort,setSort] = useState("sales")
//   const minRef = useRef();
//   const maxRef = useRef();

//   const {search} = useLocation()

//   const { isLoading, error, data, refetch } = useQuery({
//     queryKey: ["gigs"],
//     queryFn: () =>
//       newRequest
//         .get(
//           // `/gigs${search}`
//           `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
//         )
//         .then((res) => {
//           return res.data;
//         }),
//   });
//   console.log(data)

//   const reSort = (type) => {
//     setSort(type);
//     setOpen(false);
//   };

//   useEffect(() => {
//     refetch();
//   }, [sort]);

//   const apply =()=>{
//     refetch()
//   }
//   return (
//     <div className="gigs">
//       <div className="container">
//         <span className="breadcrumbs">FIVERR - GAPHICS & DESIGN -</span>
//         <h1>AI Artists</h1>
//         <p> Explore the boundaries of art and technology with Liverr's AI artists</p>
//         <div className="menu">
//           <div className="left">
//             <span>Budged</span>
//             <input ref={minRef} type="number" placeholder="min" />
//             <input ref={maxRef} type="number" placeholder="max" />
//             <button onClick={apply}>Apply</button>
//           </div>
//           <div className="right">
//             <span className="sortBy">SortBy</span>
//             <span className="sortType">
//               {sort === "sales" ? "Best Selling" : "Newest"}
//               </span>
//             <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
//             {open && (
//               <div className="rightMenu">
//                 {sort === "sales" ? (
//                   <span onClick={() => reSort("createdAt")}>Newest</span>
//                 ) : (
//                   <span onClick={() => reSort("sales")}>Best Selling</span>
//                 )}
//                 <span onClick={() => reSort("sales")}>Popular</span>
//               </div>
//             )}
          
//           </div>
//         </div>
//             <div className="cards">
//               {isLoading 
//               ? "loading" 
//               : error 
//               ? "Somthing went wrong"
//               : data.map((gig) =><GigCard key={gig._id} item={gig}/>)}
//             </div>
//       </div>
//     </div>
//   )
// }


import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

export default function Gigs() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs", search, sort],
    queryFn: () => {
      const queryParams = new URLSearchParams();
      if (search) {
        const params = new URLSearchParams(search);
        params.forEach((value, key) => {
          queryParams.append(key, value);
        });
      }
      queryParams.append("min", minRef.current.value);
      queryParams.append("max", maxRef.current.value);
      queryParams.append("sort", sort);

      return newRequest
        .get(`/gigs?${queryParams.toString()}`)
        .then((res) => res.data);
    },
  });

  useEffect(() => {
    refetch();
  }, [search, sort]);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const applyFilters = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">FIVERR - GRAPHICS & DESIGN -</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={applyFilters}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading ? (
            "Loading..."
          ) : error ? (
            "Something went wrong"
          ) : data && Array.isArray(data) ? (
            data.map((gig) => <GigCard key={gig._id} item={gig} />)
          ) : (
            "No data available"
          )}
        </div>
      </div>
    </div>
  );
}
