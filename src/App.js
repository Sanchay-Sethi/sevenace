import React from 'react'
import {useState, useEffect } from 'react';
import { IconButton } from "@chakra-ui/button";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { css } from "@emotion/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import BarLoader from "react-spinners/BarLoader";
import logo from "./images/022.png"
import man from "./images/man.png"




import { Link, animateScroll as scroll } from "react-scroll";import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,


} from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Circle,Stack,Text } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin ,FaBars, FaDownload} from 'react-icons/fa'
import ScrollToTop from "react-scroll-to-top";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import BottomNav from "./components/BottomNav"
import SideNav from "./components/SideNav"
import About from "./components/About2"
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useMediaQuery } from '@chakra-ui/media-query';
import "./App.css"

function App() {
  const [loadingAnim, setLoadingAnim] = useState(false)
  const [alert, setAlert] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  useEffect(()=>{
    setLoadingAnim(true);
    setTimeout(()=>{
      setLoadingAnim(false)
    },4000)

    Aos.init({duration:2000});
    // let progress = document.getElementById('progressbar');
    // let totalHeight =document.body.scrollHeight - window.innerHeight;

    //   window.onscroll = function () {
    //     let progressHeight = (window.pageYOffset / totalHeight) *100;
    //     progress.style.height = progressHeight + "%";
    //   }

    setTimeout(() => {
      setAlert(true);
    }, 6000);
  },[])

 

  return (
    <>
    {
      loadingAnim ? 
      <Flex w= "100%" h = "100vh" justifyContent = "center" alignItems = "center" direction="column">
            <ClimbingBoxLoader
                    size = {isNotSmallerScreen ? "30" : "20"}
                    color = {'#1F73D4'}
                    loading = {loadingAnim}
                  />
      </Flex>
      
      : 
    <>
<ScrollToTop style = {isNotSmallerScreen ?  isDark? {padding:"10px", backgroundColor : "#192436", marginBottom :"20px", marginRight : "-10px"} : {padding:"10px", backgroundColor : "#c7e5ff", marginBottom :"20px", marginRight : "-10px" } : isDark? {padding:"10px", backgroundColor : "#192436", marginBottom :"50px", marginRight : "-10px"} : {padding:"10px", backgroundColor : "#c7e5ff", marginBottom :"50px", marginRight : "-10px" }} smooth color={isDark ? "#fff" : "#000"} />
    {/* <div id = "progressbar"></div>
    <div id = "scrollpath"></div> */}
    <VStack p={5} id = "homesection">

    

    {alert && 
      <Stack >
        <Modal isOpen={alert} onClose={()=>setAlert(false)} className="modaldesign">
            <ModalOverlay />
            <ModalContent className="modaldesign">
              <ModalHeader fontSize="4xl" fontWeight="bold">
                Under Construction
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
               
              
                <Flex
                  direction="column"
                  spacing="30px"
                  alignSelf="center"
                  w="95%"
                >
                  {/* <Text mb={9} color={isDark ? "gray.200" : "gray.500"}>
                    Add your details below, will send an email for the contact or query.
                  </Text> */}
                      <img src = {man} />
                 
                </Flex>
              </ModalBody>

            </ModalContent>
          </Modal>
      </Stack>
    }





      <Flex w="100%"  style = {!isNotSmallerScreen ? {position:"fixed",top:0,left:0,padding:10,zIndex:5} : {position:"fixed",top:0,left:0,padding:10,zIndex:5}}    bg ={!isNotSmallerScreen ? !isDark?"rgba(255, 255, 255)":"rgba(34, 41, 59, 0.918)" : isDark ? "rgba(26,32,44,0.9)" : "rgba(255, 255, 255,0.9)" } >
        <Heading style={{cursor: "pointer"}}
          ml="8" size="md" alignSelf="center" fontWeight='semibold' color="cyan.400"><Link activeClass="active" to="homesection" spy={true} smooth={true} offset={-70} duration={500}>SevenAceGroup</Link>
        </Heading>
        <Spacer/>
        {isNotSmallerScreen ? 
          <>
        <Button aria-label = "Home" isRound='true'><Link activeClass="active" to="homesection" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Button>


        <Button variant="ghost" ml={2} icon={<FaInstagram />} isRound='true' ><Link activeClass="active" to="aboutsection" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Button>
        <Button variant="ghost" ml={2} icon={<FaGithub />} isRound='true'><Link activeClass="active" to="projectsection" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></Button>
        <Button variant="ghost" ml={2} icon={<FaGithub />} isRound='true' ><Link activeClass="active" to="skillsection" spy={true} smooth={true} offset={-70} duration={500}>Clients</Link></Button>
        <Button variant="ghost" ml={2} icon={<FaGithub />} isRound='true' ><Link activeClass="active" to="contactsection" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></Button>
        <IconButton  ml={7} mr={4} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
          </> : 
          <>
          <Button ref={btnRef} isRound='true' onClick={onOpen}>
            <FaBars/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            finalFocusRef={btnRef}

          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader><a href="tel:+91-9210748848">✆ +91-7814344020</a></DrawerHeader>
    
              <DrawerBody>
              <Flex  flexDirection = "column" alignItems="center" justifyContent = "center">
              <Button size="lg"    aria-label = "Home" icon={<FaLinkedin />} isRound='true' ><Link onClick={onClose} activeClass="active" to="homesection" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Button>
              <Button size="lg"  variant="ghost" my={4} ml={2} icon={<FaInstagram />} isRound='true' ><Link onClick={onClose} activeClass="active" to="aboutsection" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Button>
              <Button size="lg"  variant="ghost" mt={4} ml={2} icon={<FaGithub />} isRound='true' ><Link onClick={onClose} activeClass="active" to="projectsection" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></Button>
              <Button size="lg" variant="ghost" mt={4} ml={2} icon={<FaGithub />} isRound='true' ><Link onClick={onClose} activeClass="active" to="skillsection" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></Button>
              <Button size="lg"  variant="ghost" my={4} ml={2} icon={<FaGithub />} isRound='true' ><Link onClick={onClose} activeClass="active" to="contactsection" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></Button>
              </Flex>
              </DrawerBody>
    
              <DrawerFooter>
              <IconButton mx={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

                {/* <Button variant="outline" mr={3} onClick={()=>onOpen}>
                  Hire Me
                </Button> */}
                
                <Button colorScheme="blue"  onClick={() =>
                        window.open("https://drive.google.com/uc?id=1sedPMVH_rEYEnKQFWTLvtnNN-2pK4-Ep&export=download")
                    }> <FaDownload/> &nbsp;Resume</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
          }
        
      </Flex>
      <Header />
      {/* <Social/>
      <Profile /> */}
      {!isNotSmallerScreen?<BottomNav/>:null}
      {isNotSmallerScreen?<SideNav/>:null}
      {/* <About/> */}
      {/* <Projects/>
      <Skills/>
      <Contact/>
      <Footer/> */}
    </VStack>
    </>
    }
    
    </>

  );
}

export default App;