import { Box } from '@chakra-ui/react';
import React from 'react'
import "./sidebar.css";
import { FaStopwatch,FaUserCircle,FaTags,FaRegCalendarAlt,FaCalculator } from 'react-icons/fa';
import { AiFillSignal } from "react-icons/ai";
import { GoCalendar,GoFile } from "react-icons/go";
import { BiGridAlt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate=useNavigate()
  function tracker(){
    navigate("/tracker")
  }

  function Project(){
    navigate("/project")
  }
  function client(){
    navigate("/client")
  }
  function tags(){
    navigate("/tags")
  }

  return (
    <div>
     <Box className='mainbox'>
          <Box className='boxside' onClick={tracker}><div className='divside'><FaStopwatch className='sideicon'/></div><div className='divside1'><h1 className='sideh1'>Time tracker</h1></div></Box>
         
<h1 className='sideh12' >ANALYZE</h1>
<Box className='boxside' onClick={tracker}><div className='divside'><BiGridAlt className='sideicon'/></div><div className='divside1'><h1 className='sideh1'>dashboard</h1></div></Box>
<h1 className='sideh12' >MANAGE</h1>

<Box className='boxside' onClick={Project}><div className='divside' ><GoFile className='sideicon'/></div><div className='divside1'><h1 className='sideh1'>projects</h1></div></Box>



<Box className='boxside' onClick={client}><div className='divside'><FaUserCircle className='sideicon'/></div><div className='divside1'><h1 className='sideh1'>clients</h1></div></Box>
<Box className='boxside' onClick={tags}><div className='divside'><FaTags className='sideicon'/></div><div className='divside1'><h1 className='sideh1'>tags</h1></div></Box>


     
 </Box>
    </div>
  )
}

export default SideBar
