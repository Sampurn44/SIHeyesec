import React from 'react'
import Dashboard from './Dashboard'
import { Box } from '@chakra-ui/react'
import Train from "../../assets/Train.png"
import { Image } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import User from "../../assets/User.png"
import Dashimg from "../../assets/Dashboard.png"
import Database from "../../assets/Database.png"
import Graph from "../../assets/Graph.png"
import Settings from "../../assets/Settings.png"
import Logout from "../../assets/Logout.png"
const DashboardPage = () => {
  return (
    <Box>
      <Card float="left" bgColor={"#DAF8F9"} borderRadius={"none"} width="15rem"
height= "40rem">
  <VStack mt={"4rem"} gap={"6"}>
    <Avatar size={"sm"} src={User} fontSize={"1rem"} textColor={"black"} fontWeight={"bold"} > User </Avatar>
    <Avatar size={"sm"} src={Dashimg} fontSize={"1rem"} textColor={"black"} fontWeight={"bold"} > Dashboard </Avatar>
    <Avatar size={"sm"} src={Database} fontSize={"1rem"} textColor={"black"} fontWeight={"bold"} > Database </Avatar>
    <Avatar size={"sm"} src={Graph} fontSize={"1rem"} textColor={"black"} fontWeight={"bold"} > Report </Avatar>
    <Avatar  size={"sm"} src={Settings} fontSize={"1rem"} textColor={"black"} fontWeight={"bold"} > Settings </Avatar>
    <Avatar size={"sm"} src={Logout} fontSize={"1rem"} textColor={"black"} fontWeight={"bold"} > Logout </Avatar>



  </VStack>
     <Image src={Train} alt="Train Image"  height={"15rem"}  width={"15rem"}   mixBlendMode={"darken"}/>


      </Card>
        <Dashboard float="left" > </Dashboard>
       
        
    </Box>
  )
}

export default DashboardPage