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

     
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "5"}
        alignSelf="flex-start"
      >
        <Box data-aos = "fade-right" mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold" color = {isDark ? "gray.200" : "gray.800"}>
            Welcome<span className="wave">🔨</span>
          </Text>
          <Text
          
            fontSize={isNotSmallerScreen ? "7xl" : "7xl"}
            fontWeight="bold"
            bgGradient={isDark ?  "linear(to-r, cyan.600, blue.400, purple.300)" :  "linear(to-r, cyan.800, blue.500, purple.400)"} 
            bgClip="text"
            style = {isNotSmallerScreen ? null : {lineHeight : "70px"}}
          >
            SevenAce Group
          </Text>
          <Text fontSize={isNotSmallerScreen ? "4xl" : "2xl"} my={5}fontWeight="semibold" color = {isDark ? "gray.200" : "gray.100"}>
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
                    .deleteAll()
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
                Address - Plot no. 166, Sec-8 Gurugram<br/>
                Contact no - 7011228278, 8800159998<br/>
                Email - sevenace.group@gmail.com
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
            onClick={() =>window.open("https://drive.google.com/file/d/1ObxQtotVitATtL-l4GTpNIrqcSuKWsoH/view?usp=drivesdk")}
          >
            {" "}
            <FaDownload /> &nbsp;Brochure
          </Button>
        </Box>

        <Lottie   alignSelf="center" options={defaultOptions} height={isNotSmallerScreen ? 550 : 400} width={isNotSmallerScreen ? 550 : 400} />
      </Flex>
     
    </Stack>
  );
}

export default Header;
