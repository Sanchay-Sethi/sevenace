import React,{useEffect, useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text, Heading} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode, useColorModeValue} from "@chakra-ui/color-mode";
import SimpleImageSlider from "react-simple-image-slider";
import ImageGallery from 'react-image-gallery';
import Aos from 'aos'
import 'aos/dist/aos.css'
import pr1 from "../images/projects/pr1.png"
import pr2 from "../images/projects/pr2.png"
import pr3 from "../images/projects/pr3.png"
import pr4 from "../images/projects/pr4.png"
import pr5 from "../images/projects/pr5.png"
import pr6 from "../images/projects/pr6.png"
import pr7 from "../images/projects/pr7.png"
import pr8 from "../images/projects/pr8.png"

// Latest pr

import la1 from "../images/projects/latest/1.jpg"
import la2 from "../images/projects/latest/2.jpeg"
import la3 from "../images/projects/latest/3.jpeg"
import la4 from "../images/projects/latest/4.jpeg"
import la5 from "../images/projects/latest/5.jpeg"
import la6 from "../images/projects/latest/6.jpeg"
import la7 from "../images/projects/latest/7.jpeg"
import la8 from "../images/projects/latest/8.jpeg"
import la9 from "../images/projects/latest/9.jpeg"


import Lottie from "react-lottie";
import underline from "../images/underline"

const images = [
    {
      original: la1,
      thumbnail: la1,
    },
    {
      original: la2,
      thumbnail: la2,
    },
    {
      original: la3,
      thumbnail: la3,
    },
    {
      original: la4,
      thumbnail: la4,
    },
    {
      original: la5,
      thumbnail: la5,
    },
    {
      original: la6,
      thumbnail: la6,
    },
    {
      original: la7,
      thumbnail: la7,
    },
    {
      original: la8,
      thumbnail: la8,
    },
    {
        original: la9,
        thumbnail: la9,
    },
    
];

const smimages = [
    { url: la1 },
    { url: la2 },
    { url: la3 },
    { url: la4 },
    { url: la5 },
    { url: la6 },
    { url: la7 },
    { url: la8 },
    { url: la9 },
    
  ];


const ProjectTab = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: underline,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50"],
    ["red.900", "teal.900", "blue.900"],
  )
  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <Stack p = {5} style = {{outline :"none", overflow: 'hidden'}}  justifyContent = "flex-start" alignItems = "center"  id="project"  direction={isNotSmallerScreen ? "column" : "column"} >
                <Tabs 
                // onChange={(index) => setTabIndex(index)} bg={bg} 
                variant="soft-rounded" colorScheme="red">
                    <TabList>
                        <Tab className = "latestpr"  size="1xl">Latest Projects</Tab>
                    </TabList>

                    <TabPanels>

                    <TabPanel m = {5} style={{borderRadius : "30px"}} bg = {isDark? "blue.900" : "blue.50"}>
                            <Stack style = {{overflow: 'hidden'}}  data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "column" : "column"}>
                                {/* <Image src={pr2} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/> */}
                                <Stack direction = "column" variant = "bold" justifyContent = "flex-start" alignItems = "flex-start">
                                    <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                        Project Q 5/22
                                    </Heading>
                                </Stack>
                                {isNotSmallerScreen ? <ImageGallery items={images} /> : 
                                    <SimpleImageSlider
                                        width={width/1.2}
                                        height={400}
                                        images={smimages}
                                        showNavs={true}
                                        navSize	= {30}
                                />
                                }
                                
                            </Stack>


                    </TabPanel>



                    </TabPanels>
                </Tabs>
                <Tabs 
                // onChange={(index) => setTabIndex(index)} bg={bg} 
                variant="soft-rounded" colorScheme="blue">
                    <TabList>
                        <Tab  size="1xl">Our Projects</Tab>
                        <Tab  size="1xl">Commercial projects</Tab>
                        <Tab   size="1xl">Residential projects</Tab>
                    </TabList>

                    <TabPanels>


                    <TabPanel m = {5} style={{borderRadius : "30px"}} bg = {isDark? "blue.800" : "blue.100"}>
                            <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column"}>
                                <Image src={pr2} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                <Stack direction = "column" variant = "bold" justifyContent = "flex-start" alignItems = "flex-start">
                                    <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                    LVYUE Hotel
                                    </Heading>
                                    <Text fontSize={17}>
                                         LVYUE hotel management (India) Pvt Ltd A Hotel Project on Golf Course extension road Gurugram :-2.5CR (approx)
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>

                                
                            </Stack>
                            <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column-reverse"}>
                               
                                <Stack direction = "column" variant = "bold">
                                <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                Capstone Polyveive
                                </Heading>
                                    <Text fontSize={17}>
                                    Capstone Polyveive Pvt Limited 1.25 lakh sqft project in
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>
                                <Image src={pr1} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                
                            </Stack>
                            

                    </TabPanel>

                        <TabPanel m = {5} style={{borderRadius : "30px"}} bg = {isDark? "blue.800" : "blue.100"}>
                        <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column"}>
                                <Image src={pr3} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                <Stack direction = "column" variant = "bold" justifyContent = "flex-start" alignItems = "flex-start">
                                    <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                    Membrane india
                                    </Heading>
                                    <Text fontSize={17}>
                                    Membrane india Pvt Ltd
                                        Z L D project in
                                        *Nanauta Distillary Saharan pur *Sugar mill Bulandsher (up)
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>

                                
                            </Stack>
                            <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column-reverse"}>
                               
                                <Stack direction = "column" variant = "bold">
                                <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                Cherish gurugram
                                </Heading>
                                    <Text fontSize={17}>
                                    Cherish gurugram
                                        Recreational centre sec-70 ggm :-18.5cr (approx)
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>
                                <Image src={pr4} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                
                            </Stack>
                        </TabPanel>

                        <TabPanel m = {5} style={{borderRadius : "30px"}} bg = {isDark? "blue.800" : "blue.100"}>
                        <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column"}>
                                <Image src={pr5} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                <Stack direction = "column" variant = "bold" justifyContent = "flex-start" alignItems = "flex-start">
                                    <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                    Builder floor S
                                    </Heading>
                                    <Text fontSize={17}>
                                    Builder floor s
                                    495 sector 43
                                    Golf course road gurugram
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>

                                
                            </Stack>
                            <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column-reverse"}>
                               
                                <Stack direction = "column" variant = "bold">
                                <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                Studio flats
                                </Heading>
                                    <Text fontSize={17}>
                                    Studio flats by UNITED one Mahipalur delhi
                                    :-8.5cr (approx)
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>
                                <Image src={pr6} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                
                            </Stack>
                        <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column"}>
                                <Image src={pr7} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                <Stack direction = "column" variant = "bold" justifyContent = "flex-start" alignItems = "flex-start">
                                    <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                    Builder floor s Q-5/22
                                    </Heading>
                                    <Text fontSize={17}>
                                    Builder floor s Q-5/22
                                    Dlf phase 2 gurugram
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>

                                
                            </Stack>
                            <Stack data-aos = "fade-right" justifyContent = "space-evenly" alignItems = "center" direction={isNotSmallerScreen ? "row" : "column-reverse"}>
                               
                                <Stack direction = "column" variant = "bold">
                                <Heading fontWeight="extrabold" color= {isDark?"cyan.300" : "cyan.700"} size="2xl">
                                Residential building
                                </Heading>
                                    <Text fontSize={17}>
                                    Residential building 2074 sec 46 gurugram
                                    </Text>
                                    <Lottie alignSelf = "flex-start" options={defaultOptions} 
                                    height={isNotSmallerScreen ? 70 : 50} width={isNotSmallerScreen ? 400 : 300} 
                                    />
                                </Stack>
                                <Image src={pr8} w = {400} h = {300} borderRadius = {20} style={isDark ?{borderBottom : "3px solid white"} : {borderBottom : "3px solid #2f2f2f"}}/>
                                
                            </Stack>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
        </Stack>
    )
}

export default ProjectTab
