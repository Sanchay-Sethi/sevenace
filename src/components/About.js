import React, {useState,useEffect} from 'react'

import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Circle, Stack, } from '@chakra-ui/layout';

import { useColorMode } from '@chakra-ui/color-mode'
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import Typewriter from 'typewriter-effect'
import Lottie from "react-lottie";
import about from "../images/about";


const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: about,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    const [terminalLineData2, setTerminalLineData2] = useState([
        {type: LineType.Output, value: '<JavaScript/>'},
        {type: LineType.Output, value: '<C/C++/>'},
        {type: LineType.Output, value: '<Python/>'},
        {type: LineType.Output, value: '<Java/>'},
        {type: LineType.Output, value: <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
              onInit = {(typewriter)=>{
                typewriter.pauseFor(300)
                .typeString('<strong>Technologies in Web...</strong>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
        />},
        {type: LineType.Output, value: 'React, Next, Angular'},
        {type: LineType.Output, value: 'Advance C++/Javascript'},
        {type: LineType.Output, value: 'ChakraUI/MaterialUI/Bootstrap'},
        {type: LineType.Output, value: 'NodeJS, MongoDB, SocketIO'},
        
    ])

    const [terminalLineData, setTerminalLineData] = useState([
        {type: LineType.Output, value: 'Welcome to SevenAceGroup'},
        {type: LineType.Output, value: ''},
        {type: LineType.Output, value: 'SEVEN ACE Construction Management is an intergrated residential'},
        {type: LineType.Output, value: 'and commercial construction management firm with'},
        {type: LineType.Output, value: 'vast experience in to manage and supervise construtions projects.'},
        {type: LineType.Output, value: ''},
        {type: LineType.Output, value: 'SACM specialises in undertaking major industrial,'},
        {type: LineType.Output, value: 'residential and commercial projects.'},
        {type: LineType.Output, value: 'We deliver :'},
        
        {type: LineType.Input, value: <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
              onInit = {(typewriter)=>{
                typewriter.pauseFor(600)
                .typeString('<strong>Integrated Engineering</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Procurement')
                .pauseFor(600)
                .deleteAll()
                .typeString('<strong>Construction (EPC) services for civil construction</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>Infrastructure sector projects.</strong>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
        />},
        {type: LineType.Output, value: ''}, 
        {type: LineType.Output, value: 'Along with our clients, we deliver projects'}, 
        {type: LineType.Output, value: 'that create : '}, 
        {type: LineType.Input, value: <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
              onInit = {(typewriter)=>{
                typewriter.pauseFor(4000)
                .typeString('<strong>Long-term development</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Economic growth for our country.')
                .pauseFor(600)
                .deleteAll()
                .start();
            }}
        />},
      ]);

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Stack justifyContent = "flex-start" alignItems = "center"  id="aboutsection" style={{overflow: 'hidden'}}  direction={isNotSmallerScreen ? "row" : "column-reverse"} w="100%">
                <Box  style={{borderRadius : "10px"}} position="relative" bg = {isDark? "white" : "black"} w = "500" h = {isNotSmallerScreen ? "600" : "700"}> 
                    <Terminal  className = "setTerminal"  name='About Us:' colorMode={isDark ? ColorMode.Dark : ColorMode.Light }  lineData={ terminalLineData } onInput={ terminalInput => console.log(`What are you doing here, Get back to my website, lol `) }/>
                </Box>
                
               
 
                    <Lottie style = {isNotSmallerScreen ? {position : "relative", right : "10%"} : {position : "relative", right : "0"}} options={defaultOptions} height={isNotSmallerScreen ? 500 : 300} width={isNotSmallerScreen ? 600 : 350} />

        </Stack>
    )
}

export default About
