import React,{useEffect} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text, Heading} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode, useColorModeValue} from "@chakra-ui/color-mode";
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

import Lottie from "react-lottie";
import underline from "../images/underline"


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
    return (
        <Stack p = {5} style = {{outline :"none"}} justifyContent = "flex-start" alignItems = "center"  id="project" style={{overflow: 'hidden'}}  direction={isNotSmallerScreen ? "row" : "column-reverse"} >
                <Tabs 
                // onChange={(index) => setTabIndex(index)} bg={bg} 
                variant="soft-rounded" colorScheme="blue">
                    <TabList>
                        <Tab  size="2xl">Our Projects</Tab>
                        <Tab  size="2xl">Commercial projects</Tab>
                        <Tab  size="2xl">Residential projects</Tab>
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
