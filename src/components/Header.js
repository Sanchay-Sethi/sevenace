import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text,} from "@chakra-ui/layout";
import { FaDownload } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import emailjs from 'emailjs-com';
import Lottie from "react-lottie";
import avatarhead from "../images/avatarhead";
import Aos from 'aos'
import 'aos/dist/aos.css'
import avatar from "../images/man.png"


import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,

  NumberInputStepper,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/media-query";
import Typewriter from "typewriter-effect";
import React, { useEffect, useState } from "react";

function Header() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const [loading,setLoading] = useState(false)
  const { addToast } = useToasts();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: avatarhead,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const hireMeSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_ti2qqg7', 'template_x64byns', e.target, 'user_eKunwGoAq2HrE9Eav4u9O')
      .then((result) => {
          setLoading(false);
          addToast("Request Sent Successfully", { appearance: "success" });
          console.log(result.text);
      }, (error) => {
        setLoading(false);
          addToast("Something Went Wrong", { appearance: "error" });
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    
    <Stack className="headerstack" overflow="hidden">

      {/* <div className = "bgvid"></div> */}
      {/* <video id="background-video" loop autoplay>
        <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4">
        <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg">
        Your browser does not support the video tag.
      </video> */}

      {/* <video
        id="background-video" 
        loop 
        autoplay
      >
         <source src={bgvid} type="video/mp4"/>  
         Your browser does not support the video tag.
         
      </video> */}

      

      {/* <Circle
        className="animateme1"
        zIndex="-1"
        position="absolute"
        bg="blue.100"
        opacity={isDark ? "0.1" : "0.4"}
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Circle
        className="animateme2"
        zIndex="-1"
        position="absolute"
        bg="blue.100"
        opacity={isDark ? "0.1" : "0.4"}
        w="100px"
        h="100px"
        alignSelf="flex-end"
      /> */}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box data-aos = "fade-right" mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold" color = {isDark ? "gray.200" : "gray.800"}>
            Welcome<span className="wave">🔨</span>
          </Text>
          <Text
          
            fontSize="7xl"
            fontWeight="bold"
            bgGradient={isDark ?  "linear(to-r, cyan.600, blue.400, purple.300)" :  "linear(to-r, cyan.800, blue.500, purple.400)"} 
            bgClip="text"
          >
            SevenAce Groups
          </Text>
          <Text fontSize="4xl" fontWeight="semibold" color = {isDark ? "gray.200" : "gray.100"}>
            <span >
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(600)
                    .typeString("<strong>Construction Management</strong>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("we deliver projects")
                    .pauseFor(600)
                    .deleteChars(9)
                    .typeString("creates longterm fix")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<strong>and economic growth</strong>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<strong>undertake turnkey projects </strong>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<strong>Residential building</strong>")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </span>{" "}
          </Text>
          <br/>
          <br/>
          <Text data-aos = "fade-right"  color={isDark ? "gray.100" : "gray.100"}>
                Address - Plot no 166 ,sec-8 Gurugram<br/>
                Contact no - 7011228278, 8800159998<br/>
                Email - SEVENACE.GROUP@GMAIL.COM
          </Text>
          <Button data-aos = "fade-right" mt={8} colorScheme="blue" onClick={onOpen}>
            Contact Us
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} className="modaldesign">
            <ModalOverlay />
            <ModalContent className="modaldesign">
              <ModalHeader fontSize="4xl" fontWeight="bold">
                Contact Us
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Circle
           
                  zIndex="-1"
                  position="absolute"
                  top="-30%"
                  right="-30%"
                  bg="blue.100"
                  opacity={isDark ? "0.1" : "0.4"}
                  w="300px"
                  h="300px"
                  alignSelf="flex-end"
                />
                <Circle

                  zIndex="-1"
                  position="absolute"
                  top="-30%"
                  left="30%"
                  bg="blue.100"
                  opacity={isDark ? "0.1" : "0.4"}
                  w="200px"
                  h="200px"
                  alignSelf="flex-end"
                />
                <Flex
                  direction="column"
                  spacing="30px"
                  alignSelf="center"
                  w="95%"
                >
                  <Text mb={9} color={isDark ? "gray.200" : "gray.500"}>
                    Add your details below, will send an email for the contact or query.
                  </Text>

                  <form onSubmit={hireMeSubmit}>
                  <FormControl id="email">
                    <FormLabel>Your Email address</FormLabel>
                    <Input type="email" placeholder="Enter your email" name = "email" required />
                  </FormControl>

                  <Flex
                    my={2}
                    direction="row"
                    spacing="30px"
                    alignSelf="center"
                    w="100%"
                  >
                    <FormControl id="name" mx={1}>
                      <FormLabel>Your Good Name</FormLabel>
                      <Input type="text" placeholder="Enter Name" name = "name"  required/>
                    </FormControl>
                    <FormControl id="phone" mx={1}>
                      <FormLabel>Phone Number</FormLabel>
                      <NumberInput max={10}>
                        <Input placeholder="+91-987***" name = "phone" required/>
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </Flex>
                  <FormControl id="message" mx={1}>
                    <FormLabel textSize="small">Enter Message</FormLabel>
                    <Textarea placeholder="Enter details/message" size="sm" name = "message" required/>
                  </FormControl>
                  <Button isLoading = {loading} variant="solid" type = "submit" my = {3}>Send Request</Button>
                </form>
                </Flex>
              </ModalBody>

            </ModalContent>
          </Modal>
          <Button
          data-aos = "fade-right"
            mt={8}
            mx={3}
            colorScheme="blue"
            variant="outline"
            // onClick={() =>
            //   window.open(
            //     "https://drive.google.com/uc?id=1sedPMVH_rEYEnKQFWTLvtnNN-2pK4-Ep&export=download"
            //   )
            // }
          >
            {" "}
            <FaDownload /> &nbsp;Brochure
          </Button>
        </Box>

        {/* <Image
          m="50"
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          // borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={avatar}
        /> */}
        <Lottie   alignSelf="center" options={defaultOptions} height={isNotSmallerScreen ? 550 : 400} width={isNotSmallerScreen ? 550 : 400} />
      </Flex>
      {/* <Circle
        className="animateme4"
        zIndex="-1"
        position="absolute"
        bg="blue.100"
        opacity={isDark ? "0.1" : "0.4"}
        top="280"
        left="-250"
        w="600px"
        h="600px"
        alignSelf="flex-start"
      /> */}
      {/* {isNotSmallerScreen ? (
        <Circle
          className="animateme3"
          zIndex="-1"
          position="absolute"
          bg="blue.100"
          opacity={isDark ? "0.1" : "0.4"}
          top="200"
          left="500"
          w="200px"
          h="200px"
          alignSelf="flex-start"
        />
      ) : null} */}
    </Stack>
  );
}

export default Header;
