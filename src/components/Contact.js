import React, { useState,useEffect } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Terminal, { ColorMode, LineType } from "react-terminal-ui";
import Lottie from "react-lottie";
import contactimg from "../images/contactimg";
import { useToasts } from "react-toast-notifications";
import emailjs from 'emailjs-com';
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
  Input,
  FormControl,
  FormLabel,
  NumberInputStepper,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
    const [loading,setLoading] = useState(false)
  const { addToast } = useToasts();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactimg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [terminalLineData2, setTerminalLineData2] = useState([
    { type: LineType.Output, value: "Company : SevenAceGroup" },
    { type: LineType.Output, value: "Phone no.: 7011228278, 8800159998" },
    { type: LineType.Output, value: "Location : Plot no. 166, Sec-8" },
    { type: LineType.Output, value: "City : Gurugram" },
    { type: LineType.Output, value: "State : Haryana" },

    { type: LineType.Output, value: "Country : India" },
    { type: LineType.Output, value: "Email : sevenace.group@gmail.com" },
  ]);
  const [hiremeData, setHiremeData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const gethiremedata = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setHiremeData({ ...hiremeData, [name]: value });
  };
  const hireMeSubmit = (e) => {

    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_ti2qqg7', 'template_x64byns', e.target, 'user_eKunwGoAq2HrE9Eav4u9O')
      .then((result) => {
          setLoading(false);
          addToast("Thank you for contacting", { appearance: "success" });
          console.log(result.text);
      }, (error) => {
          setLoading(false);
          addToast("Something Went Wrong", { appearance: "error" });
          console.log(error.text);
      });
      e.target.reset();
  }
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      w="100%"
      justifyContent="center"
      alignItems="center"
      id="contactsection"
    >
      <Flex
        w="95%"
        justifyContent="center"
        direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "25" : "0"}
        alignSelf="flex-start"
        alignItems="center"
        flexWrap={isNotSmallerScreen ? "wrap" : null}
        mb={12}
      >
        <Flex direction="column" alignItems="center" justify="center">
          {isNotSmallerScreen ? (
            <Lottie options={defaultOptions} height={350} width={350} />
          ) : null}
          <Flex
            mb={5}
            position="relative"
            top={isNotSmallerScreen ? "3" : "0"}
            left={isNotSmallerScreen ? "3" : "0"}
            zIndex={isNotSmallerScreen ? 1 : 0}
            height={isNotSmallerScreen ? "350px" : "400px"}
            bg={isDark ? "gray.600" : "gray.700"}
            position="relative"
            borderRadius="10px"
            overflow="hidden"
          >
            <Terminal
              className="setTerminal"
              name="Find Us..."
              colorMode={isDark ? ColorMode.Light : ColorMode.dark}
              lineData={terminalLineData2}
              onInput={(terminalInput) =>
                console.log(
                  `What are you doing here, Get back to my website, lol `
                )
              }
            />
          </Flex>
        </Flex>

        <Flex
          w={isNotSmallerScreen ? "60%" : "100%"}
          bg={isDark ? "gray.700" : "gray.600"}
          position="relative"
          borderRadius="10px"
          overflow="hidden"
        >
          <Flex
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="30px"
            bg={isDark ? "black" : "gray.700"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex width="100px" justifyContent="space-evenly">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: "#ee5050",
                }}
              ></div>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: "#ffc526",
                }}
              ></div>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: "#03df6a",
                }}
              ></div>
            </Flex>
            <Flex></Flex>
          </Flex>
          <Flex direction="column" w="100%">
            <Box data-aos = "fade-up" alignSelf="flex-start" mx="5" my={9}>
              <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                Contact Us
              </Heading>
              <Text fontSize="1xl" mx="5" color="gray.400">
                Contact directly with our team
              </Text>
            </Box>
            <Flex justifyContent="center" align="center" w="100%">
              <Flex
                direction="column"
                spacing="30px"
                alignSelf="center"
                w="95%"
              >
                  <form onSubmit={hireMeSubmit}>
                <FormControl data-aos = "fade-up" id="email">
                  <FormLabel>Your Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </FormControl>

                <Flex
                  my={2}
                  direction="row"
                  spacing="30px"
                  alignSelf="center"
                  w="100%"
                >
                  <FormControl data-aos = "fade-up" id="name" mx={1}>
                    <FormLabel>Your Good Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      required
                    />
                  </FormControl>
                  <FormControl data-aos = "fade-up" id="phone" mx={1}>
                    <FormLabel>Phone Number</FormLabel>
                    <NumberInput max={10}>
                      <Input
                        placeholder="+91-987***"
                        name="phone"
                        required
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                </Flex>
                <FormControl data-aos = "fade-up" id="message" mx={1}>
                  <FormLabel textSize="small">Your Query</FormLabel>
                  <Textarea
                    placeholder="Enter details/message"
                    size="sm"
                    name="message"
                   required
                  />
                </FormControl>
                <Button
                data-aos = "fade-up"
                  alignSelf="center"
                  w="50%"
                  my={6}
                  variant="solid"
                  type="submit"
                  isLoading = {loading}
                >
                  Contact Us
                </Button>
                </form>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Contact;
