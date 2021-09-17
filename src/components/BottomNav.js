import React from 'react'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'


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

          <IconButton   icon={<FaLinkedin />} isRound='true' onClick={() =>window.open("https://www.linkedin.com/in/sanchay-sethi/")}></IconButton>
          <IconButton  ml={2} icon={<FaInstagram />} isRound='true' onClick={() =>window.open("https://www.instagram.com/sethi.sanchay/")}></IconButton>
          <IconButton  ml={2} icon={<FaGithub />} isRound='true' onClick={() =>window.open("https://github.com/Sanchay-Sethi/")}></IconButton>
          <IconButton  ml={2} icon={<FaWhatsapp />} isRound='true' onClick={() =>window.open("https://wa.me/+919210748848")}></IconButton>
          <Spacer/>
          <IconButton  ml={12} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
        </Flex>
      </VStack>
    )
}

export default BottomNav
