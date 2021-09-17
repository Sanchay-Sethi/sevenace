import React, {useState,useEffect} from 'react'

import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Circle, Stack, } from '@chakra-ui/layout';

import { useColorMode } from '@chakra-ui/color-mode'
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';
import Typewriter from 'typewriter-effect'
import house from "../images/house.png"



const About2 = () => {
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
        <section class="about-us">
        <div class="section-header">
          <h1 class="section-heading">About Us</h1>
          <div class="underline"></div>
        </div>
        <div class="services">
          <div class="service">
            <div class="service-header">
              <i class="fas fa-pen-nib"></i>
              <h3>Interior</h3>
            </div>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-paint-roller"></i>
              <h3>Exterior</h3>
            </div>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-pencil-alt"></i>
              <h3>Design</h3>
            </div>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-paint-brush"></i>
              <h3>Decoration</h3>
            </div>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-ruler-combined"></i>
              <h3>Planning</h3>
            </div>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="far fa-building"></i>
              <h3>Execution</h3>
            </div>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div class="about-us-img-wrapper">
            <img src={house} />
          </div>
        </div>
      </section>
    )
}

export default About2
