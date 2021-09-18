import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin,FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';

const SideNav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <VStack  p={5} style={{position:"fixed",top:"30%",right:"0px",borderTopLeftRadius:"30px",borderBottomLeftRadius:"30px",zIndex: "3"}}  bg = {isDark ? "rgba(34, 41, 59, 0.815)" : "blue.100"}>
      
        <Flex  flexDirection = "column" alignItems="center" justifyContent = "center">  
            <IconButton  mt={5} icon={<FaFacebook />} isRound='true' onClick={() =>window.open("https://www.facebook.com/people/Seven-Ace/100010327681528/")}></IconButton>
            <IconButton mt={5} icon={<FaInstagram />} isRound='true' ></IconButton>
            {/* <IconButton mt={5} icon={<FaGithub />} isRound='true' onClick={() =>window.open("https://github.com/Sanchay-Sethi/")}></IconButton> */}
            <IconButton  mt={5} icon={<FaWhatsapp />} isRound='true'  onClick={() =>window.open("https://wa.me/+917011228278")}></IconButton>
            <IconButton  my={5} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
        </VStack>
    )
}

export default SideNav
