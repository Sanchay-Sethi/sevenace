import React, {useEffect} from 'react'

import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Circle } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform,DiReact} from 'react-icons/di'
import { ImEarth } from "react-icons/im";
import { useColorMode } from '@chakra-ui/color-mode'
import logo from "../images/logo2.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Lottie from "react-lottie";
import work from "../images/work";
import time from "../images/time";
import thumb from "../images/thums";


function Profile() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: work,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: thumb,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: time,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    return (
        <Flex style={{overflow: 'hidden'}} justifyContent="center" alignItems="center"  direction={isNotSmallerScreen ? "row" : "column"} w="100%"
           >
                <Circle className="" zIndex = "-1"  position="absolute" bg="blue.100" opacity={isDark?"0.1":"0.4"}
                w={isNotSmallerScreen?"1000px":"450px"} h={isNotSmallerScreen?"200px":"450px"} alignSelf={isNotSmallerScreen ? "center" : "flex-end"} />
                
                {/* <Icon as={FaGithub} boxSize="30" w="700px" h="700px" zIndex = "-1"  position="absolute" bg="blue.100" opacity={isDark?"0.1":"0.4"} alignSelf="flex-end"/> */}
            <Box data-aos = "zoom-in" alignSelf="center" px="45" py="45">
                <Heading fontWeight="extrabold" color="cyan.500" size="5xl">
                    <img src= {logo} style = {{borderRadius : "50%"}}/>
                </Heading>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Our three most important protocols : </Text>
                <Flex  direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex data-aos = "fade-right" rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        {/* <Icon color="white" p="4" as={ImEarth} w="24" h="24" /> */}
                        <Lottie options={defaultOptions1} height={150} width={150} />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Client Satisfaction
                        </Text>
                    </Flex>
                    <Flex data-aos = "fade-right" rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={isDark ? "gray.100" : "gray.300" } h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>

                        {/* <Icon color="black" p="4" as={DiReact} w="24" h="24" /> */}
                        <Lottie options={defaultOptions2} height={150} width={150} />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Perfect Work
                        </Text>
                    </Flex>
                    <Flex data-aos = "fade-right" rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                         bg={isDark ? "gray.100" : "gray.300" } h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        {/* <Icon as={DiAndroid} p="4" w="24" h="24" color="black" /> */}
                        <Lottie options={defaultOptions3} height={150} width={150} />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Long term development
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile
