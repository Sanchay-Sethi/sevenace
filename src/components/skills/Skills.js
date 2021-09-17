import React from "react";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Stack, Circle, Flex, Box, Text, Heading } from "@chakra-ui/layout";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Skill from './Skill'
import Lottie from 'react-lottie';
import skillsimage from "../../images/Blogging"



const Skills = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: skillsimage,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack w = "100%" p = {6}  direction="row" id="skillsection" m = {0} position="relative" top="-5" >
           
          <Flex w={isNotSmallerScreen ? "60%" : "100%"} bg = {isDark ? "gray.600" : "cyan.100"}  borderRadius = "30" 
          direction={isNotSmallerScreen ? "row" : "column"}

          p={isNotSmallerScreen ? "25" : "0"}
          alignSelf="flex-start"
        //   alignItems="center"
          flexWrap={isNotSmallerScreen ? "wrap" : null}
          mb = {12}>
              <Box alignSelf="flex-start" mx = "10" position = "relative" top = {isNotSmallerScreen ? "0" : "0"} my = {4}>
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                        Skills...
                    </Heading>
                    <Text fontSize="2xl" color="gray.400">Skills that i have opted in past few years : </Text>
                </Box>
                <Skill
                    skillvalue = {95}
                    skillcolor = "#a903fc"
                    skillsub = "HTML/CSS"
                    skilldesc = "Handsome Experience in HTML/CSS"
                />
                <Skill
                    skillvalue = {85}
                    skillcolor = "#fcba03"
                    skillsub = "ReactJS/NextJS"
                    skilldesc = "Handsome Experience in ReactJS"
                />
              
                <Skill
                    skillvalue = {90}
                    skillcolor = "red"
                    skillsub = "JavaScript"
                    skilldesc = "Handsome Experience in Javascript"
                />
                <Skill
                    skillvalue = {75}
                    skillcolor = "#6203fc"
                    skillsub = "NodeJS/Express"
                    skilldesc = "Handsome Experience in NodeJS"
                />
                <Skill
                    skillvalue = {80}
                    skillcolor = "#048725"
                    skillsub = "MongoDB"
                    skilldesc = "Handsome Experience in MongoDB"
                />
                <Skill
                    skillvalue = {85}
                    skillcolor = "#b87c06"
                    skillsub = "Bootstrap"
                    skilldesc = "Handsome Experience in Bootstrap"
                />
               
          </Flex> 
          {isNotSmallerScreen ?  
          <Lottie style = {{position:"absolute", top: "50", left:"50%",cursor : "not-allowed"}}
                options={defaultOptions}
                height={450}
                width={650}
                />
           : null } 
         
        </Stack>
    )
}

export default Skills
