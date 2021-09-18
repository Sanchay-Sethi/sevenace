import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

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
    return (
        <Stack id = "skillsection" position = "relative" alignSelf="center" p = {5} w = {isNotSmallerScreen ? "60%" : "100%"} >
            <Heading my = {5} fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                    Our Clients👷🏻‍♂️
           </Heading>
           <Lottie alignSelf = "flex-start" options={defaultOptions1} style={{position : "absolute", top :"10%",left : "-35%",opacity : "50%"}}
                 height={isNotSmallerScreen ? 500 : 400} width={isNotSmallerScreen ? 500 : 400} 
           />
           
            <Accordion  allowMultiple >
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    1. Shri ram associates .(mayfeild garden ggn)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    2. United one (gurugram)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    3. D-pal construction pvt ltd. (new delhi)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    4. Capstone polyvevie ltd.(Bhiwari)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    5. Membrane group pvt ltd. (udhyog vihar)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    6. N.VEE.N Constructions pvt ltd.
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    7. Bali & sons cycles.(gurugram)
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                    8. Puneet khanna & associates. Dlf phase 2
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <Heading alignSelf = "center" my = {10} fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} style = {{fontSize: "30px"}}>
                                   Our Associated Partners
           </Heading>
            <Stack mt = {5} alignSelf = "center" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "row"} w = "60%">
                <Stack borderRadius = {30} p = {isNotSmallerScreen ? 5 : 4} bg = {isDark? "blue.800" : "blue.100"} justifyContent = "center" alignItems = "flex-start" direction= "column" w ="200px">
                    <Image src={cl1} w = "100%" style ={{borderRadius : "20px", borderBottom : "2px solid black"}}/>
                    <Text px = {isNotSmallerScreen ? 5 : 0} fontSize={isNotSmallerScreen ? 17 : 12}>
                            AbhishekVashist <br/>
                            +917011228278             
                    </Text>
                </Stack>
                <Stack  borderRadius = {30} p = {5} bg = {isDark? "blue.800" : "blue.100"} justifyContent = "center" alignItems = "flex-start" direction= "column" w = "200px">
                    <Image src={cl2} w = "100%" style ={{borderRadius : "20px", borderBottom : "2px solid white"}}/>
                    <Text px = {isNotSmallerScreen ? 5 : 0} fontSize={isNotSmallerScreen ? 17 : 12}>
                            Akash Arora <br/>
                            +918800159998  
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Clients
