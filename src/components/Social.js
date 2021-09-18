import Icon from '@chakra-ui/icon'
import { HStack,Text } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin ,FaBars, FaDownload, FaYoutube, FaFacebook, FaWhatsapp} from 'react-icons/fa'
import { useMediaQuery } from '@chakra-ui/media-query';
import Typewriter from 'typewriter-effect'
import { VStack } from '@chakra-ui/react';
import {Helmet} from "react-helmet"

function Social() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (

        <VStack>
           
            <Text className="" fontWeight="bold" fontSize="1xl">Connect With Us</Text>
        <HStack spacing={isNotSmallerScreen?"24":"10"} py = {4}>
            <Icon as={FaFacebook} boxSize="30" onClick={() =>window.open("https://www.facebook.com/people/Seven-Ace/100010327681528/")}/>
            <Icon as={FaInstagram} boxSize="30" onClick={() =>window.open("https://www.instagram.com/sethi.sanchay/")}/>
            <Icon as={FaWhatsapp} boxSize="30" onClick={() =>window.open("https://wa.me/+917011228278")}/>
        </HStack>
        </VStack>
    )
}

export default Social
