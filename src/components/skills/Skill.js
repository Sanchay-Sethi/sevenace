import React, {useEffect} from "react";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skill = ({skillvalue,skillcolor,skillsub,skilldesc}) => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    return (
        <Flex data-aos = "flip-left" my = {2}>
            <Flex justify="center" align="center" >
                <Flex className="skillContainer" mx = {3} >
                    <CircularProgressbar
                    value={skillvalue}
                    text={`${skillvalue}%`}
                    
                    styles={buildStyles({
                        path: {
                            // Path color
                          
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Customize transition animation
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            // Rotate the path
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                          },
                          trail: {
                            // Trail color
                            stroke: '#d6d6d6',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Rotate the trail
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                          },
                        strokeLinecap: 'butt',
                        textColor: `${isDark ? "cyan" : "black"}`,
                        pathColor: `${skillcolor}`,
                    })}
                    />
                </Flex>

                <div className="mlr-10">
                    <p className="font-16 bold-500 textColor mtb-10">{skillsub}</p>
                    <p className="font-14 bold-500 grey mtb-10">{skilldesc}</p>
                </div>
                </Flex>
            
        </Flex>
    )
}

export default Skill
