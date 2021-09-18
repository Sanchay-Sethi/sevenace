import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa'


const BottomNav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
        <VStack p={5} style={{
            position:"fixed",
            bottom:"0px",
            left:"0",
            width:"100%",
            borderTopLeftRadius:"30px",
            borderTopRightRadius:"30px",
            zIndex : "1"

        }}
        bg = {!isDark?"blue.100":"rgba(17, 15, 32)"}
        >
        <Flex w="100%">

          <IconButton   icon={<FaFacebook />} isRound='true' onClick={() =>window.open("https://www.facebook.com/people/Seven-Ace/100010327681528/")}></IconButton>
          <IconButton  ml={2} icon={<FaInstagram />} isRound='true' ></IconButton>
         
          <IconButton  ml={2} icon={<FaWhatsapp />} isRound='true' 
            onClick={() =>window.open("https://wa.me/+917011228278")}
            ></IconButton>
          <Spacer/>
          <IconButton  ml={12} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
      </VStack>
    )
}

export default BottomNav
