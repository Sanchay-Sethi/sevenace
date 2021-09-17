import React, {useEffect} from 'react'

import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Circle } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform,DiReact} from 'react-icons/di'
import { ImEarth } from "react-icons/im";
import { useColorMode } from '@chakra-ui/color-mode'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Profile() {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex style={{overflow: 'hidden'}} justifyContent="center" alignItems="center"  direction={isNotSmallerScreen ? "row" : "column"} w="100%"
           >
                <Circle className="" zIndex = "-1"  position="absolute" bg="blue.100" opacity={isDark?"0.1":"0.4"}
                w={isNotSmallerScreen?"1000px":"450px"} h={isNotSmallerScreen?"200px":"450px"} alignSelf={isNotSmallerScreen ? "center" : "flex-end"} />
                
                {/* <Icon as={FaGithub} boxSize="30" w="700px" h="700px" zIndex = "-1"  position="absolute" bg="blue.100" opacity={isDark?"0.1":"0.4"} alignSelf="flex-end"/> */}
            <Box data-aos = "zoom-in" alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    Newbie
                </Heading>
                <Text fontSize="2xl" color="gray.400">In field of development</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Web Designer and Developer, Expert and surgeon in mobile app development.</Text>
                <Flex  direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex data-aos = "fade-right" rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={ImEarth} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Web Developer
                        </Text>
                    </Flex>
                    <Flex data-aos = "fade-right" rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg={isDark ? "gray.100" : "gray.300" } h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={DiReact} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React Native Apps
                        </Text>
                    </Flex>
                    <Flex data-aos = "fade-right" rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                         bg={isDark ? "gray.100" : "gray.300" } h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }}

                    >
                        <Icon as={DiAndroid} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Android Apps
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile
