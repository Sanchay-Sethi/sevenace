import React, {useState,useEffect} from 'react'

import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Circle, Stack, } from '@chakra-ui/layout';

import { useColorMode } from '@chakra-ui/color-mode'
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import Typewriter from 'typewriter-effect'



const About = () => {
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
        {type: LineType.Output, value: 'Welcome to my Arena'},
        {type: LineType.Output, value: 'My name is Sanchay Sethi'},
        {type: LineType.Output, value: 'I am in currently 3nd year of Engineering'},
        {type: LineType.Output, value: 'Obviously my work of domain is computer science'},
        {type: LineType.Output, value: ''},
        {type: LineType.Output, value: 'Failed to compile.😛'}, 
        {type: LineType.Output, value: './src/components/About.'}, 
        {type: LineType.Output, value: 'Tip Error : '}, 
        {type: LineType.Input, value: <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
              onInit = {(typewriter)=>{
                typewriter.pauseFor(600)
                .typeString('<strong>Dont ask any engineer to hack facebook 😆</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('I had a joke about variables but sadly I can’t remember it.')
                .pauseFor(600)
                .deleteAll()
                .typeString('Designer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>I have a CS joke but it doesn’t compute.</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>I have a joke about recursion, but I have a joke about recursion,</strong>...^c^c^c')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>An SQL query goes into a bar, walks up to two tables and asks, “Can I join you?”</strong>')
                .pauseFor(2000)
                .start();
            }}
        />},
        {type: LineType.Output, value: ''}, 
        {type: LineType.Output, value: 'Ok! Back to Introduction'}, 
        {type: LineType.Input, value: <Typewriter
            options={{
                autoStart: true,
                loop: true,
              }}
              onInit = {(typewriter)=>{
                typewriter.pauseFor(4000)
                .typeString('<strong>Amma Full Stack</strong> Developer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('My Domain of interest is Web Development')
                .pauseFor(600)
                .deleteAll()
                .typeString('Designer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>I too like to make Apps</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>I have some apps float on playstore</strong> Do check it out')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>Havent checked yet!</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>Offcourse how do you check! No link has given</strong>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<strong>App name : Sanmeets on playstore</strong>')
                .pauseFor(2000)
                .start();
            }}
        />},
        {type: LineType.Output, value: 'I have a strong hand in advance CSS/Javascript'}, 
        {type: LineType.Output, value: 'I love to play with React renderers DOM'}, 
        {type: LineType.Output, value: 'Compiled with warnings'}, 
        {type: LineType.Output, value: 'src/App.js'}, 
        {type: LineType.Output, value: 'Type any warning below if you want just for time pass😆'}, 
      ]);

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Stack  id="aboutsection" style={{overflow: 'hidden'}}  direction={isNotSmallerScreen ? "row" : "column"} w="100%">
                <Terminal  className = "setTerminal"  name='About me :' colorMode={isDark ? ColorMode.Dark : ColorMode.Light }  lineData={ terminalLineData } onInput={ terminalInput => console.log(`What are you doing here, Get back to my website, lol `) }/>
                
                <Flex flexDirection = "column">
                {isNotSmallerScreen ? 
                    <>
                    <Circle className = "aboutcircle1" position="relative" bg="blue.100" opacity={isDark?"0.1":"0.8"} top="10" left="-200"
                    w={isNotSmallerScreen?"400px":"450px"} h={isNotSmallerScreen?"100px":"450px"} alignSelf={isNotSmallerScreen ? "flex-start" : "flex-end"} />
                    <Circle  className = "aboutcircle2" position="relative" bg="blue.100" opacity={isDark?"0.1":"0.9"} top="65" left="-220"
                     w={isNotSmallerScreen?"300px":"450px"} h={isNotSmallerScreen?"100px":"450px"} alignSelf={isNotSmallerScreen ? "flex-start" : "flex-end"} /> </>
                     : null}
                    {isNotSmallerScreen ? 
                            <Box  style={{borderRadius : "10px"}} position="relative" bg = {isDark? "white" : "black"} w = "500" h = "500" top="20" left="-250">
                                {/* <div style={{position:"absolute", top:0, left:0, width:"100%", height : "40px", backgroundColor : "black"}}></div> */}
                                <Terminal className = "setTerminal"  name='CS Languages Known:' colorMode={isDark ? ColorMode.Light : ColorMode.dark }  lineData={ terminalLineData2 } onInput={ terminalInput => console.log(`What are you doing here, Get back to my website, lol `) }/>
                            </Box> : null}
                     
                </Flex>
        </Stack>
    )
}

export default About
