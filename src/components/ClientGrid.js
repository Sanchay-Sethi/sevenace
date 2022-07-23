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
const images = [one, two, eight, three, four, six,five, seven, nine]

const ClientGrid = () => {
  return (
    <div style = {{
        width: "100%",
        margin : "20px",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap"
    }}>
        {
          images?.map((data, index)=>(
            <div key = {index} style = {{
              width : "200px",
              margin : "10px",
              borderRadius : "20px"
            }}>
              <img src = {data} style = {{objectFit : "center", width : "100%", borderRadius : "10px"}}/>
            </div>
          ))
        }
        
    </div>
  )
}

export default ClientGrid