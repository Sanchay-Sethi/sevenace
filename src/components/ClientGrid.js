import React from 'react'
import  ImageGrid  from  "react-image-grid-animator";
import one from "../images/clientsLogo/one.png"
import two from "../images/clientsLogo/two.jpeg"
import three from "../images/clientsLogo/three.png"
import four from "../images/clientsLogo/four.jpeg"
import five from "../images/clientsLogo/five.png"
import six from "../images/clientsLogo/six.jpeg"
import seven from "../images/clientsLogo/seven.png"
import eight from "../images/clientsLogo/eight.png"
import nine from "../images/clientsLogo/nine.jpeg"
import "./common.css"
const images = [one, two, three, four, five, six, seven, eight, nine]

const ClientGrid = () => {
  return (
    <div style = {{
        width: "100%"
    }}>
        <ImageGrid
            images={images}
            visibleCount={10}
            interval={2000}
            animationItemcount={0}
            transitionType={"SCALE"}
            transitionDuration={200}
            isActive={true}
        />
    </div>
  )
}

export default ClientGrid