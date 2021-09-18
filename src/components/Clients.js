import React,{useEffect} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"
  import Aos from 'aos'
  import 'aos/dist/aos.css'
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text, Heading} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode, useColorModeValue} from "@chakra-ui/color-mode";
import Lottie from "react-lottie";
import sparkle from "../images/spark"
import plane from "../images/plane"
import cl1 from "../images/cl1.png"
import cl2 from "../images/cl2.png"

const Clients = () => {
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: plane,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    const defaultOptions2= {
        loop: true,
        autoplay: true,
        animationData: sparkle,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
    return (
        <Stack id = "skillsection" position = "relative" alignSelf="center" p = {5} w = {isNotSmallerScreen ? "60%" : "100%"} >
            <Heading data-aos = "fade-right" my = {5} fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                    Our Clients👷🏻‍♂️
           </Heading>
           <Lottie alignSelf = "flex-start" options={defaultOptions1} style={{position : "absolute", top :"10%",left : "-35%",opacity : "50%"}}
                 height={isNotSmallerScreen ? 500 : 400} width={isNotSmallerScreen ? 500 : 400} 
           />
           
            <Accordion  allowMultiple >
            <AccordionItem data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    1. Shri ram associates .(mayfeild garden ggn)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    2. United one (gurugram)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    3. D-pal construction pvt ltd. (new delhi)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    4. Capstone polyvevie ltd.(Bhiwari)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    5. Membrane group pvt ltd. (udhyog vihar)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    6. N.VEE.N Constructions pvt ltd.
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    7. Bali & sons cycles.(gurugram)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem  data-aos = "fade-up">
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    8. Puneet khanna & associates. Dlf phase 2
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
           
            
        </Stack>
    )
}

export default Clients
