import React,{useEffect} from "react";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  Stack,
  Box,
  Text,
  Badge,
  Spacer,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const ProjectCard = ({
  primage,
  prtype1,
  prtype2,
  prname,
  prdesc,
  prtech,
  prlink,
}) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <Box data-aos = "fade-up-right" className="projectedit"
      my={3}
      w="350px"
      rounded="20px"
      overflow="hidden"
      boxShadow="sm"
      bg={isDark ? "gray.300" : "gray.700"}
      _hover={{ boxShadow: "md" }}
    >
      <Image w="100%" src={primage} alt="first project"/>
      <Box p={3} color={isDark ? "black" : "white"}>
        <Stack isInline align="baseline">
          <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
            New!
          </Badge>
          <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
            {prtype1}
          </Badge>
          <Spacer />
          <Text
            mx={5}
            fontSize="sm"
            color={isDark ? "gray.600" : "gray.400"}
            letterSpacing="wide"
          >
            {prtype2}
          </Text>
        </Stack>
        <Text as="h2" fontWeight="semibold" my={2}>
          {prname}
        </Text>
        <Text fontWeight="light" fontSize="md">
          {prdesc}
        </Text>
        <Text as="h3" fontSize="md" mt={4}>
          Technologies used...
        </Text>

        <Stack isInline align="baseline" my={1}>
          {prtech.map((elem) => {
            return (
              <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
                {elem}
              </Badge>
            );
          })}
          <Button zIndex = "0"
            bg={isDark ? "#2f353d" : "teal.500"}
            color={isDark ? "white" : "black"}
            variant="solid"
            onClick={() => window.open(`${prlink}`)}
          >
            View More!
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
