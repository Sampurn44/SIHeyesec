import React from 'react'
import { Box, Card } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import People from "../../assets/People.png"
import Police from "../../assets/Police.png"
import User from "../../assets/User.png"
import Density from "../../assets/density.png"
import Video from "../../assets/trainvid.png"
import { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import Station from "../../assets/station.mp4"
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
  const [alertColor, setAlertColor] = useState('#CAE7E8');
  const [alertText, setAlertText] = useState('SAFE');
  const [crowdDensity, setCrowdDensity] = useState(45);
  const [totalTraffic, setTotalTraffic] = useState(20000);
  const [changeAlertFired, setChangeAlertFired] = useState(false); // Flag to track if changeAlert has been fired

  const [videoSrc, setVideoSrc] = useState(Station);
  const [activeVideoSrc, setActiveVideoSrc] = useState(Station); // Add this state variable

  

  const videosArr = [
    Station, 
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];

  const changeAlert = () => {
    setTimeout(() => {
      setAlertColor('#FF0000'); // Change background color to red
      setAlertText('Alert');
      setChangeAlertFired(true);
      
      
    }, 25000); // 10000 milliseconds (10 seconds)
  };

  const showNotification = () => {
    if (changeAlertFired && alertColor === '#FF0000') {
      toast.info('Crime Alert at Cam1', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
    }
  };
  
  useEffect(() => {
    const crowdDensityInterval = setInterval(() => {
      setCrowdDensity((prevDensity) => prevDensity + 1);
    }, 5000);

    const totalTrafficInterval = setInterval(() => {
      setTotalTraffic((prevTraffic) => prevTraffic + 5);
    }, 1000);

    return () => {
      clearInterval(crowdDensityInterval);
      clearInterval(totalTrafficInterval);
    };
  }, []);

  
 
  // Use useEffect to trigger the color and text change
  useEffect(() => {
    changeAlert();
  }, []);
  

  useEffect(() => {
    showNotification();
  }, [alertColor, changeAlertFired]);


  useEffect(() => {
    const videoElement = document.getElementById("videoElement");
    if (videoElement) {
      videoElement.addEventListener("click", () => {
        videoElement.play();
      });
    }
  }, []);


  return (
    <Box>
        <Card className="MainCard" bgColor={alertColor} height={"40.2rem"} width={"70.2rem"} borderRadius={"none"} > 
        <HStack gap={"6"} mt={"3rem"} ml={"5rem"}>
          <Card width= "213px"
height="78px"
borderRadius={"8px"}
border={"1px"}
borderColor={"blackAlpha.700"}
>
  <ToastContainer></ToastContainer>
  <HStack gap={"5"}>
    <VStack  textAlign={"center"} width={"7rem"} ml={"1rem"} >
      <Text fontSize={"18px"} fontWeight={"bold"} textColor={"#B3ACAC"} >
        Total Traffic
      </Text>
      <Text fontWeight={"bold"}>
       {totalTraffic}
      </Text>
      <Text>

      </Text>
    </VStack>
    <Image src={People} ></Image>

  </HStack>

          </Card>

          <Card width= "213px"
height="78px"
borderRadius={"8px"}
border={"1px"}
borderColor={"blackAlpha.700"}
>
  <HStack >
    <VStack  textAlign={"center"} width={"10rem"} >
      <Text fontSize={"18px"} fontWeight={"bold"} textColor={"#B3ACAC"} >
        Officers On Duty
      </Text>
      <Text fontWeight={"bold"}>
        45
      </Text>
      <Text>

      </Text>
    </VStack>
    <Image src={Police} ></Image>

  </HStack>

          </Card>


          <Card width= "213px"
height="78px"
borderRadius={"8px"}
border={"1px"}
borderColor={"blackAlpha.700"}
>
  <HStack gap={"1"}>
    <VStack  textAlign={"center"} width={"10rem"} >
      <Text fontSize={"18px"} fontWeight={"bold"} textColor={"#B3ACAC"} >
        Nearest Officer
      </Text>
      <Text fontWeight={"bold"}>
        Santosh Singh
      </Text>
      <Text>

      </Text>
    </VStack>
    <Image src={User} ></Image>

  </HStack>

          </Card>

          <Card width= "213px"
height="78px"
borderRadius={"8px"}
border={"1px"}
borderColor={"blackAlpha.700"}
>
  <HStack gap={"4"}>
    <VStack  textAlign={"center"} ml={"1rem"}  >
      <Text fontSize={"18px"} fontWeight={"bold"} textColor={"#B3ACAC"} >
        Crowd density 
      </Text>
      <Text fontWeight={"bold"}>
       {crowdDensity}
      </Text>
      <Text>

      </Text>
    </VStack>
    <Image src={Density} ></Image>

  </HStack>

          </Card>
        </HStack>

<HStack gap={"5rem"}>
  <VStack ml={"3rem"} >
  <Text fontSize={"34px"} fontWeight={"bold"}>Crime Alert</Text>
  <VStack 
           
            width={"10rem"}
            border={"1px"}
            height={"25rem"}
            borderRadius={"4px"}
             bgColor={"white"}
            spacing={"2"} 
            overflowY={"auto"} >
               {
                videosArr.map((item,index)=>(
                <Button 
                  mt={"0.5rem"}
                variant={"ghost"} 
                width={"9rem"}
                bgColor={videoSrc === item ? 'teal' : '#CAE7E8'}
                onClick={()=>setVideoSrc(item)}>
                   Cam {index+1}
                </Button>
                ))
               }

            </VStack>

  </VStack>
  <Card width="47rem"  borderRadius={"3rem"} mt={"3rem"}>
  <video
  id="videoElement"
                controlsList='nodownload'
                controls
                src={videoSrc}
               
                style={{
                    width:"100%",
                }} autoPlay muted ></video>
  </Card>

</HStack>

        </Card>
    </Box>
  )
}

export default Dashboard