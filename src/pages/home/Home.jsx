import Featured from "../../components/featured/Featured"
import Slide from "../../components/slide/Slide"
import TrustedBy from "../../components/trustedBy/TrustedBy"
import "./Home.scss"
import {cards} from "./../../data"
import CatCard from "../../components/catCard/CatCard"

export default function Home() {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card =>(
          <CatCard item={card} key={card.id}/>
        ))}
      </Slide>
    </div>
  )
}
