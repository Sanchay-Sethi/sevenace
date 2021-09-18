import React from 'react'
import { Image } from "@chakra-ui/image";
import Icon from '@chakra-ui/icon'
import { Stack, Circle, Flex, Box, Text, Heading,VStack} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode, useColorModeValue} from "@chakra-ui/color-mode";
import Lottie from "react-lottie";
import { FaInstagram,FaYoutube, FaFacebook,FaWhatsapp} from 'react-icons/fa'

import logo from "../images/logo2.jpg"

const Footer2 = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: plane,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice",
    //     },
    //   };
        const { colorMode } = useColorMode();
        const isDark = colorMode === "dark";
        const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack style = {isNotSmallerScreen ? null : {marginBottom : "100px"}} direction = "column">
        <Stack  className = {isNotSmallerScreen ? "footer2" : null} py = {5} p = {10} w = "100vw"  justifyContent = "space-between" alignItems="center" direction = {isNotSmallerScreen ? "row" : "column"} bg = {isDark? "blue.800" : "blue.100"}>
            {isNotSmallerScreen ? <>
                <Stack className="editfoot"></Stack>
            <Stack className="editfoot2"></Stack>
            </> : null}
            
            <Flex direction = {isNotSmallerScreen ? "column" : "row"}  bg = {isDark? "blue.800" : "blue.100"}  w = {isNotSmallerScreen ? "20%" : "100%"} alignItems = {isNotSmallerScreen ? null : "center"}>
                <Image src ={logo} w = {20} h = {20} borderRadius = "50%" mr={4}/>
                <Flex w = "100%">
                    <Text fontSize={13} mt = {4} >
                        SACM has a diverse portfolio spread across various industries like IT Campuses, Commercial Spaces, Hotels, Residential Complexes, Factories and Manufacturing Facilities. SACM has created landmark edifices across the nation.
                    </Text>
                </Flex>
            </Flex>
            {isNotSmallerScreen ? null : <Text style = {{position:"relative", top : "20px", left:"-20px"}}
             alignSelf = "flex-start"
                fontSize=  {isNotSmallerScreen ? "5xl" : "4xl"}
                fontWeight="bold"
                bgGradient={isDark ?  "linear(to-r, cyan.600, blue.400, purple.300)" :  "linear(to-r, cyan.800, blue.500, purple.400)"} 
                bgClip="text"
                >
                SevenAce Group
            </Text>}
            
            <Flex p = {isNotSmallerScreen ? 0 : 5} direction = {isNotSmallerScreen ? "row" : "row-reverse"} w ={isNotSmallerScreen ? "70%" : "100vw"} justifyContent = {isNotSmallerScreen ? "center" : "space-around"} alignItems = {isNotSmallerScreen ? "center" : "flex-start"}>
            <Flex direction = "column" w ={isNotSmallerScreen ? "40%" : "100vw"} >
           
                <Flex w = "100%" direction="column">
                    <Text fontSize={20} fontWeight="bold">
                        Contact Us
                    </Text>
                    <Text fontSize={15} fontWeight="bold">
                        <a href="tel:+91-7011228278">✆ +91 7011228278</a><br/>
                    </Text>
                    <Text mt = {5} fontSize={14} fontWeight="bold">
                        Email
                    </Text>
                    <Text fontSize={15} fontWeight="bold">
                        <a href="mailto:sevenace.group@gmail.com" target = "_blank">sevenace.group@gmail.com</a><br/>
                    </Text>
                    <Text mt = {5} fontSize={14} fontWeight="bold">
                        Locate us
                    </Text>
                    <Text fontSize={15} fontWeight="bold">
                        <a href="https://goo.gl/maps/9G3Xi6dvJU8f36QJ8" target = "_blank">Plot no. 166, Sec-8 Gurugram</a><br/>
                    </Text>
                    
                </Flex>
            </Flex>
            <Flex direction = "column" w ={isNotSmallerScreen ? "40%" : "100vw"} >
                {isNotSmallerScreen ?  <Text
                fontSize=  {isNotSmallerScreen ? "5xl" : "2xl"}
                fontWeight="bold"
                bgGradient={isDark ?  "linear(to-r, cyan.600, blue.400, purple.300)" :  "linear(to-r, cyan.800, blue.500, purple.400)"} 
                bgClip="text"
                >
                SevenAce Group
            </Text> :null}
           
                <Flex w = "100%" direction="column">
                    <Text fontSize={20} fontWeight="bold">
                        Social Medias
                    </Text>
                    <Flex direction="column" py = {4} justifyContent = "flex-start">
                        <span><Icon as={FaFacebook} boxSize="5" onClick={() =>window.open("https://www.facebook.com/people/Seven-Ace/100010327681528/")}/> Facebook</span>
                        <span><Icon as={FaInstagram} boxSize="5" onClick={() =>window.open("https://www.instagram.com/sethi.sanchay/")}/> Instagram</span>
                        <span><Icon as={FaWhatsapp} boxSize="5"  onClick={() =>window.open("https://wa.me/+917011228278")}/> Youtube</span>
                    </Flex>
                    
                </Flex>
            </Flex>
            </Flex>
           
         
        </Stack>
        <Flex w = "100vw" height = "80px" bg = {isDark? "blue.900" : "cyan.100"} justifyContent = "space-evenly" alignItems = "center" direction="column">
                    <Text fontSize={15} fontWeight="bold">
                        © copyright 2021-22 SevenAceGroup
                    </Text>
                    <Text fontSize={12} fontWeight="bold">
                        Designed and Developed by <a href="https://www.instagram.com/sethi.sanchay/" target="_blank" style = {{fontSize: "15px"}}>💜 Module Wrapper</a>
                    </Text>
            </Flex>
        </Stack>
    )
}

export default Footer2
