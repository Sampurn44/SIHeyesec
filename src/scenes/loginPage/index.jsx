import React from 'react'
import { Box } from '@chakra-ui/react'
import Form from './Form'
import Train from "../../assets/Train.png"
import { Image } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
const LoginPage = () => {
  return (
    <Box h="full" w="full"  bgColor={"white"}>
      <Card float={"left"} h={"40rem"}  w="30rem" bgColor={"#DAF8F9"}>
      <Image src={Train} alt="Train image" />

      </Card>
      <Form></Form>
      

    </Box>
  )
}

export default LoginPage