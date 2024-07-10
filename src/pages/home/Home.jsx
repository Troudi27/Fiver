import Featured from "../../components/featured/Featured"
import Slide from "../../components/slide/Slide"
import TrustedBy from "../../components/trustedBy/TrustedBy"
import "./Home.scss"
import {cards , projects} from "./../../data"
import CatCard from "../../components/catCard/CatCard"
import ProjectCard from "../../components/projectCard/projectCard"

export default function Home() {
  return (
    <div className="home">
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card =>(
          <CatCard item={card} key={card.id}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find hieh-quality services at every price point. No hourly rates, just project-based pricing.</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find hieh-quality services at every price point. No hourly rates, just project-based pricing.</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find hieh-quality services at every price point. No hourly rates, just project-based pricing.</p>
          </div>
          
          <div className="item">
            <video src="./img/VD.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for team</h1>
            <p>Upgrade to a curated experience packed with tools and benifits , dedicated to businesses</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(project =>(
          <ProjectCard item={project} key={project.id}/>
        ))}
      </Slide>
    

    </div>
  )
}
