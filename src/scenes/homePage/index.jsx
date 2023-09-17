import React from 'react'
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import Train from "../../assets/Train.png"
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Fade } from '@chakra-ui/react'
const HomePage = () => {
  return (
    
     <Box bg={"#CAE7E8"} h={"40rem"} w={"85.3rem"} >
      <Card position={'absolute'} transform={"translate(-50%,-50%)"} left="50%" width={"60rem"} marginTop={"15rem"}  bgColor={"whiteAlpha.300"} variant={"unstyled"} >
      <Heading  fontSize={"8xl"} textColor={"black"} textAlign={"center"} > Welcome to EyeSec!</Heading> 
      <Heading textAlign={"center"} textColor={"#444444"}> Connecting Safety, Efficiency, and Convenience </Heading>

      </Card>
            

      <Image src={Train} h={"40rem"} w={"30rem"} opacity={"10"}  margin={"auto"}></Image>
      

     </Box>
    
  )
}

export default HomePage