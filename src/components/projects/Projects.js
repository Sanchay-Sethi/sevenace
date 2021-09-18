import React, {useEffect} from 'react'
import ProjectCard from './ProjectCard'
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex, Box, Text, Heading } from "@chakra-ui/layout";
import ProjectTab from '../ProjectTab';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack w = "100%" direction="column" id = "projectsection" justifyContent = "center" position="relative" top = {isNotSmallerScreen ? "-3" : "6"}>

            {!isNotSmallerScreen ?
            <Box  alignSelf="flex-start" mx = "10" position = "relative" top = {isNotSmallerScreen ? "100" : "0"}>
                <Heading data-aos = "zoom-in" fontWeight="extrabold" color="cyan.500" size="4xl">
                        Projects
                    </Heading>
                    <Text fontSize="2xl" color="gray.400">Carry on! exploring</Text>
            </Box> :  

             <Box alignSelf="flex-start" mx = "10" position = "relative" top = {isNotSmallerScreen ? "100" : "0"}>
                 <Flex>
                 <Flex direction="column" >
                    <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                        Projects
                    </Heading>
                    <Text fontSize="2xl" color="gray.400">Carry on! exploring</Text>
                 </Flex>
                
                <Flex direction="column">
                <Circle className = "aboutcircle1" position="relative" bg="blue.100" opacity={isDark?"0.1":"0.4"} top="0" left="-200"
                    w={isNotSmallerScreen?"500px":"450px"} h={isNotSmallerScreen?"100px":"450px"} alignSelf={isNotSmallerScreen ? "flex-start" : "flex-end"} />
                    <Circle  className = "aboutcircle2" position="relative" bg="blue.100" opacity={isDark?"0.1":"0.4"} top="-8" left="-230"
                     w={isNotSmallerScreen?"400px":"450px"} h={isNotSmallerScreen?"100px":"450px"} alignSelf={isNotSmallerScreen ? "flex-start" : "flex-end"} />
                </Flex>
                </Flex>
                
            </Box>
            }
            
        
            <Flex style={{
                width: '100%',
            }}
            direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px"
            justifyContent = "flex-start"
            p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start"
            alignItems="center"
            flexWrap={isNotSmallerScreen ? "wrap" : null}
            mb = {12}
            >
             
            {/* <ProjectCard 
                primage = "https://i.ytimg.com/vi/mbCpI766eC8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJQEQDifOFhnQCi089kK1xmGS7CQ"
                prtype1 = "APP"
                prtype2 = "Android App" 
                prname = "Sanmeets: Video Calling App"
                prdesc = "I have made a Best Video Calling App which provides all the features that another best video calling apps are providing using simple java, Firebase thats it."
                prtech = {["JAVA","Android", "Firebase"]}
                prlink = "https://play.google.com/store/apps/details?id=com.sanchaysethi.sanmeetss"
                />
            <ProjectCard 
                primage = "https://drive.google.com/uc?id=1WbVhxwAwtM9l_fNDlwc157L8YyN_R0az"
                prtype1 = "APP"
                prtype2 = "Android App" 
                prname = "Picmon: Photo Editing App"
                prdesc = "A Simple light weighted User interactive photo editing app. Many Filters are available which will enhance the quality of your photo. Different types of frames... "
                prtech = {["JAVA","Android", "Firebase"]}
                prlink = "https://play.google.com/store/apps/details?id=com.sanchay.picmon"
                />
            <ProjectCard 
                primage = "https://drive.google.com/uc?id=1ToBwmYvYkFsMYjvDGGo-rqSHBJfN1OkM"
                prtype1 = "WEB"
                prtype2 = "Website" 
                prname = "Advance GSAP Custom Portfolio"
                prdesc = "Its my portfolio that i have made this in my 2nd year of Btech, I use the oncept of advance CSS/ Javascript/ GSAP and many other libraries for design"
                prtech = {["GSAP","AdvanceCSS", "JS"]}
                prlink = "https://sanchaysethi.herokuapp.com/"
                />
            <ProjectCard 
                primage = "https://i.ytimg.com/vi/BDdabAsMNYY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_5n8TzBduCkGMcS1zLemcWpS9WQ"
                prtype1 = "Python"
                prtype2 = "Tkinter GUI" 
                prname = "Study Material Library"
                prdesc = "Python GUI project using python Tkinter. A student can find its study material for free of specific listed Course. Do check it out link given below"
                prtech = {["PYTHON","Tkinter"]}
                prlink = "https://youtu.be/BDdabAsMNYY"
                />
            <ProjectCard 
                primage = "https://i.ytimg.com/vi/6w3N300ENLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEaQzzUOqwoa17QN6ZX-QK7FDfyw"
                prtype1 = "Python"
                prtype2 = "Selenium" 
                prname = "Desi Whatsapp bot using selenium python"
                prdesc = "The desi bot made with selenium web auto library helps to make a browser controll in our motion and our own command, Do check it out, link given below"
                prtech = {["Python","Selenium",]}
                prlink = "https://youtu.be/6w3N300ENLU"
                />
            <ProjectCard 
                primage = "https://i.ytimg.com/vi/VncakCaBBbU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOwexjkWAWHKFNoaKP-56Fd5IsQw"
                prtype1 = "WEB"
                prtype2 = "Website" 
                prname = "Sports Club Website"
                prdesc = "A sports club website that i have made in my 1st year of my Btech with simple concept of DOM renderers like CSS, JS, HTML. Do check it out link given below"
                prtech = {["HTML","CSS","JS"]}
                prlink = "https://youtu.be/VncakCaBBbU"
                /> */}
                <ProjectTab/>


        </Flex>
        </Stack>
    )
}

export default Projects
