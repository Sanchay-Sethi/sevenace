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
   
    <Stack justifyContent = "center" alignItems="center">
       <Text className="" fontWeight="bold" fontSize="2xl">Error 404 Unavailable</Text>
       <Text className="" fontSize="1xl">Try Again Later</Text>
    </Stack>
    
    </>

  );
}

export default App;
