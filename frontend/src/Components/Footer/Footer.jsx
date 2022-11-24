import React from 'react'
import {
    Box,
    Container,
    Flex,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { Link }  from "react-router-dom";
import {AiOutlineTwitter} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGlobe} from "react-icons/bs"

const Footer = () => {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            mt={20}
        >
            

            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                flexWrap={"wrap"}
                width='100%'
                px={20}
                mb={5}
            >
                <Flex
                    gap={4}
                    m={"flex-start"}>
                    <Text _hover={{cursor:"pointer"}}>© 2022 Timify</Text>
                    <Text _hover={{cursor:"pointer"}}>Sitemap</Text>
                    <Text _hover={{cursor:"pointer"}}>Cookies</Text>
                    <Text _hover={{cursor:"pointer"}}>Terms</Text>
                    <Text _hover={{cursor:"pointer"}}>Privacy</Text>
                </Flex>
                <Flex
                    gap={4}
                    align={"right"}>
                        <Link to="/"><AiOutlineTwitter/></Link>
                        <Link to="/"> <BsFacebook/></Link>
                        <Link to="/"> <FaInstagramSquare/></Link>
                        <Link to="/"> <AiFillYoutube/></Link>
                        <Link to="/"> <AiFillLinkedin/></Link>
                    
                </Flex>
            </Box>
            
            <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                width='100%'
                px={20}
                pb={20}
            >
                <Flex
                    gap={4}
                    m={"flex-start"}>
                    <Text fontSize={"14px"}>Copyright To the Chipyana Buzurg Sam Residency</Text>
                </Flex>
                <Flex
                    gap={4}
                    align={"right"}>
                        <BsGlobe/>
                    <Text>English</Text>
                </Flex>
            </Box>
        </Box>
    );
}

export default Footer