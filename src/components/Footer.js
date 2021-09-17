import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack justifyContent = "center" align="center" className="footeredit" w = "100%" h = "300px" bg = {isDark ? "gray.700" : "cyan.500"} borderRadius = "20" mb = {12} overflow = "hidden">
            <Flex   w = "100%" alignItems="center" justifyContent = "center" direction="column" overflow = "hidden">
                <Text mt = {12}>Designed and Developed by </Text>
                <Text
                fontSize="4xl"
                fontWeight="bold"
                bgGradient="linear(to-r, cyan.100, blue.100, purple.100)"
                bgClip="text"
                >
                    Sanchay Sethi
                </Text>
                <Flex >
                    <IconButton   icon={<FaLinkedin />} isRound='true' onClick={() =>window.open("https://www.linkedin.com/in/sanchay-sethi/")}></IconButton>
                    <IconButton  ml={2} icon={<FaInstagram />} isRound='true' onClick={() =>window.open("https://www.instagram.com/sethi.sanchay/")}></IconButton>
                    <IconButton  ml={2} icon={<FaGithub />} isRound='true' onClick={() =>window.open("https://github.com/Sanchay-Sethi/")}></IconButton>
                    <IconButton  ml={2} icon={<FaWhatsapp />} isRound='true' onClick={() =>window.open("https://wa.me/+919210748848")}></IconButton>
                </Flex>

                <Text mb = {1} fontSize="sm">All Right Reserved 2021-22</Text>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style = {{
                    position: 'absolute',
                    bottom : 0,
                    left:0,
                    width :"100%",
                    zIndex:-1,
                    borderRadius : 20
                }}>
                    <path fill="#0099ff" fill-opacity="1" d="M0,256L34.3,250.7C68.6,245,137,235,206,229.3C274.3,224,343,224,411,197.3C480,171,549,117,617,128C685.7,139,754,213,823,218.7C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,245.3C1302.9,245,1371,171,1406,133.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>                </svg>
            </Flex>
           
        </Stack>
    )
}

export default Footer
