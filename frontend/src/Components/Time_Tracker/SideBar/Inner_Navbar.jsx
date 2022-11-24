import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import "./sidebar.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { AiFillQuestionCircle,AiOutlineBell } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Inner_Navbar = () => {
  return (
    <div>
   <Box className='mainNav'>
        <Box className='mainNav1'>
          < BsFillGrid3X3GapFill className='bell'/>
          <RouterLink to={"/"}>
          <Image src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/zrjqqztub6r2uhvhzwbm" h={75}></Image>
          </RouterLink>
      
        </Box>
        <Box className='mainNav1'>
          <h1>user</h1>
        <AiFillQuestionCircle className='bell'/>
        <AiOutlineBell className='bell'/>
        
        </Box>
   </Box>
    </div>
  )
}

export default Inner_Navbar
