import React from 'react'
import {  Avatar } from '@chakra-ui/react' 
import { Drawer,} from '@chakra-ui/react'
import { DrawerOverlay  , DrawerContent,  DrawerBody , Button  , useDisclosure} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {  HStack } from '@chakra-ui/react'; 
import img2 from "../assets/2.png";
import {  Box } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import Train from "../assets/Train.png"

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  
  return (
    <>
    <Avatar pos={"fixed"}
    top={"4"}
    left={"4"}
    _hover={{ bg: "#CAE7E8" }}
        sx={{
          "&:hover > *": {
            color: "#CAE7E8",
          },
        }}
        bgColor={"white"}
    padding={"0"}
    width={"60px"}
    height={"60px"}
    zIndex={"overlay"}
    onClick={onOpen}>
        <Box mx={4}>
                            < Avatar src={Train} alt="Logo" variant={"ghost"} objectFit="contain" w="50px" h="50px"   />
                     </Box>
    
    </Avatar>
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent bgColor={"whiteAlpha.100"}>
        <DrawerBody >
        <HStack justifyContent={"center"}>
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#CAE7E8" } }
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/Login'}>Login</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#CAE7E8" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/Dashboard'}>Dashboard</Link>
                    </Button>
                  
                    <Button onClick={onClose}  variant={"ghost"} size={isMobile?"sm" : "md"} textColor={'white'} _hover={{ bg: "#CAE7E8" }}
        sx={{
          "&:hover > *": {
            color: "white",
          },
        }}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                 
                </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default Header