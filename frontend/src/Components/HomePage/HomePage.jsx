import React from 'react'
import "./HomePage.css"
import {
    AspectRatio,
    Box,
    Button,
    ButtonGroup,
    Center,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Stack,
    Switch,
    Text,
    VStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import Slider from './slider';


const row1 = [
    {
        title: "Great experience",
        feedback: "It has really helped me become more organized",
        client: "— Lauren Leonard, Illustrator",
    },
    {
        title: "A game-changer for remote work",
        feedback: "I can track my phone-a week taps and I'm ready to get into my work",
        client: "— Keri Mackay Coordinator",
    },
    {
        title: "It has greatly improved our business",
        feedback: "Before Timify we had no idea of how long we were spending on each event.",
        client: "— Hilary Raeside, Excutive Assistant",
    },
    {
        title: "Grows with you",
        feedback: "I Love how Timify allows my contractors to independently log billable hours.",
        client: "— Camreon Sursa,enterpeneur",
    },
    {
        title: "An amazing experience!",
        feedback: "Works exactly like you'd hope, feature-rich, and has helped us realize profits.",
        client: "— Torre Capistran, Entrepreneur",
    },
    {
        title: "Affordable price and support",
        feedback: "New features appearing every month. Great and helpful customer support.",
        client: "— Maciej Tkaczyk, Manager",
    },
    {
        title: "Very useful and intuitive",
        feedback: "Extremely comfortable. Ads free. Amazing in terms of customer support.",
        client: "— Ivan Napolskykh, Software Engineer,",
    }
]

const row2 = [
    {
        title: "One of the best values available online",
        feedback: "Really good. Overall, this is a TREMENDOUS value for the price.",
        client: "— Patrick Carver, Entrepreneur",
    },
    {
        title: "Best time tracker",
        feedback: "Timify has become a basic in my set of freelance tools.",
        client: "— Luis Miguel Rivas Zepeda, Software Engineer",
    },
    {
        title: "Seamless time tracking",
        feedback: "Timify is so easy to use and intuitive. The learning curve is almost none.",
        client: "— Sheila Zayas, Graphic Design",
    },
    {
        title: "Timify is scary good!",
        feedback: "It is a powerful and often frightening insight into your own behavior.",
        client: "— Skyler Bird, Web Designer",
    },
    {
        title: "Finally an intuitive online time logger",
        feedback: "I like that it is available to me online and can use it wherever I am.",
        client: "— Michele Wong, Entrepreneur",
    },

]

const row3 = [
    {
        title: "Works great for startups",
        feedback: "We grew from a couple people to almost 80 and it worked perfectly the whole time!",
        client: "— Zachary Gaskill, Sales Manager",
    },
    {
        title: "Fantastic",
        feedback: "Makes it incredibly easy to record time and attach pdf reports to invoices.",
        client: "— David Jackson, Consultant",
    },
    {
        title: "Best time tracking software!",
        feedback: "I use Timify for work, but it also lets me know exactly what I am doing in my day!",
        client: "— Marc Wolfe, Marketing Manager",
    },
    {
        title: "Best timesheet software on the market",
        feedback: "Easy to use. Quick to maneuver. Excellent reporting and administration.",
        client: "— Anurag K, Database Engineer,",
    },
    {
        title: "Wonderful for tracking productivity",
        feedback: "I enjoy it so much I use outside of work to track my own personal self-development.",
        client: "— Jessup S, Operations Associate",
    },
    {
        title: "I feel more productive!",
        feedback: "It's really encouraging to look back and see how much I've accomplished!",
        client: "— Kristen Eisentrager, Creative Coordinator",
    },
]


const boxData = [
    {
        img: BiTargetLock,
        heading: "Boost productivity",
        text: "Track time you spend on activities, see where your time goes, and improve your time management skills.",
    },
    {
        img: AiOutlineDollarCircle,
        heading: "Bill clients",
        text: "Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices.",
    },
    {
        img: RiTeamLine,
        heading: "Manage team",
        text: "Track attendance for payroll and accounting, see who works on what, and manage workload among teams.",
    },
    {
        img: BsClockHistory,
        heading: "Business intelligence",
        text: "Track time and analyze your company's efficiency across projects, clients, departments, and employees.",
    },
]

const HomePage = () => {
    return (
        <div style={{ height: "70vh"}}>
            <div>
                <div>
                    <Box maxW={["", "80%"]} m={"auto"}>
                        <Text fontSize={["2xl", "4xl"]} className="homepage_text">
                            The most popular free
                            <span className='homepage_text_span'> time tracker</span> for teams
                        </Text>
                    </Box>
                    <Box maxW={["80%", "45%"]} m={"auto"}>
                        <Text fontSize={["sm", "xl"]} textAlign={"center"}>
                            Time tracking software used by millions. Timify is a time tracker
                            and timesheet app that lets you track work hours across projects.
                            Unlimited users, free forever.
                            
                        </Text>
                    </Box>
                </div>

                <div>
                    <Flex
                        justifyContent={"center"}
                        m={5}
                        flexDir={"column"}
                        alignItems={"center"}
                    >
                        <Button
                            className='homePage_heading_button'
                            p={[1, 7]}
                            boxShadow={"md"}
                            _hover={{ bg: "blue.400" }}
                            bgColor={"#03A9F4"} >
                            <Link to="/tracker">
                                <Text fontWeight={400} fontSize={["xs", "md"]}>
                                    START TRACKING TIME — IT'S FREE!
                                </Text>
                            </Link>
                        </Button>
                        
                    </Flex>
                </div>
            </div>
            
            
        </div>



    )
}

export default HomePage