import CatCard from "../catCard/CatCard"
import "./Slide.scss"
import { Slider } from "infinite-react-carousel"

export default function Slide({children, slidesToShow , arrowsScroll}) {
  return (
    <div className="slide">
        <div className="container">
            <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                {children}
            </Slider>
        </div>
    </div>
  )
}
