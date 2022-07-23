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
import About from "./components/About"
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import { useMediaQuery } from '@chakra-ui/media-query';
import {Helmet} from "react-helmet"
import Lottie from "react-lottie";
import loadingcons from "./images/logo3.png";
import "./App.css"
import ClientGrid from './components/ClientGrid';

function App() {
  const [loadingAnim, setLoadingAnim] = useState(false)
  const [alert, setAlert] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingcons,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(()=>{
    setLoadingAnim(true);
    setTimeout(()=>{
      setLoadingAnim(false)
    },2000)

    Aos.init({duration:2000});


    // setTimeout(() => {
    //   setAlert(true);
    // }, 6000);
  },[])

 

  return (
    <>
    <Helmet>
      <title>SevenAceGroup</title>
      <meta name = "description" content = "Seven Ace Group Construction Management is an intergrated residential and commercial construction management firm with vast experience in to manage and supervise construtions projects"/>
      <meta name = "keywords" content = "SevenAceGroup, SevenAceGroupConstruction, Seven Ace"/>
    </Helmet>
   
    {/* <Stack justifyContent = "center" alignItems="center">
       <Text className="" fontWeight="bold" fontSize="2xl">Error 404 Unavailable</Text>
       <Text className="" fontSize="1xl">Try Again Later</Text>
    </Stack> */}
     {
      loadingAnim ? 
      <Flex w= "100%" h = "100vh" justifyContent = "center" alignItems = "center" direction="column">
            {/* <Lottie className = "animatelogo"   alignSelf="center" options={defaultOptions} height={isNotSmallerScreen ? 200 : 100} width={isNotSmallerScreen ? 300 : 200} /> */}
            <img className = "animatelogo" src = {loadingcons} style = {isNotSmallerScreen ? {height : 300, width : 300} : {height : 200, width : 200}}/>
            {/* <ClimbingBoxLoader

                    size = {isNotSmallerScreen ? "30" : "20"}
                    color = {'#1F73D4'}
                    loading = {loadingAnim}
                  /> */}
      </Flex>
      
      : 
    <>
<ScrollToTop style = {isNotSmallerScreen ?  isDark? {padding:"10px", backgroundColor : "#192436", marginBottom :"20px", marginRight : "-10px"} : {padding:"10px", backgroundColor : "#c7e5ff", marginBottom :"20px", marginRight : "-10px" } : isDark? {padding:"10px", backgroundColor : "#192436", marginBottom :"50px", marginRight : "-10px"} : {padding:"10px", backgroundColor : "#c7e5ff", marginBottom :"50px", marginRight : "-10px" }} smooth color={isDark ? "#fff" : "#000"} />
    
    <VStack p={5} id = "homesection">

    

    {/* {alert && 
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
                      <img src = {man} />
                 
                </Flex>
              </ModalBody>

            </ModalContent>
          </Modal>
      </Stack>
    } */}





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
              <DrawerHeader><a href="tel:+91-7011228278">✆ +91 7011228278</a></DrawerHeader>
    
              <DrawerBody>
              <Flex  flexDirection = "column" alignItems="center" justifyContent = "center">
              <Button size="lg"    aria-label = "Home" icon={<FaLinkedin />} isRound='true' ><Link onClick={onClose} activeClass="active" to="homesection" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Button>
              <Button size="lg"  variant="ghost" my={4} ml={2} icon={<FaInstagram />} isRound='true' ><Link onClick={onClose} activeClass="active" to="aboutsection" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Button>
              <Button size="lg"  variant="ghost" mt={4} ml={2} icon={<FaGithub />} isRound='true' ><Link onClick={onClose} activeClass="active" to="projectsection" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></Button>
              <Button size="lg" variant="ghost" mt={4} ml={2} icon={<FaGithub />} isRound='true' ><Link onClick={onClose} activeClass="active" to="skillsection" spy={true} smooth={true} offset={-70} duration={500}>Clients</Link></Button>
              <Button size="lg"  variant="ghost" my={4} ml={2} icon={<FaGithub />} isRound='true' ><Link onClick={onClose} activeClass="active" to="contactsection" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></Button>
              </Flex>
              </DrawerBody>
    
              <DrawerFooter>
              <IconButton  mx={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

                <Spacer/>
                <Button colorScheme="blue" 
                onClick={() =>window.open("https://drive.google.com/file/d/1ObxQtotVitATtL-l4GTpNIrqcSuKWsoH/view?usp=drivesdk")}
                    > <FaDownload/> &nbsp;Brochure</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
          }
        
      </Flex>
      <Header />
      <Social/>
      <Profile />
      {!isNotSmallerScreen?<BottomNav/>:null}
      {isNotSmallerScreen?<SideNav/>:null}
      <About/>
      <Projects/>
      {/* <Skills/> */}
      <Clients/>
      <ClientGrid/>
      <Contact/>
      <Footer2/>
    </VStack>
    </>
    }


    
    </>

  );
}

export default App;
