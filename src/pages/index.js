import React from "react";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import {Link} from "gatsby";
import Fade from "react-reveal/Fade";

import left from "../images/interior1.jpg";
import drone from "../images/drone.jpg"

import Hero from "../components/hero";
import ImageContainer from "../components/imageContainer";
import Offer from "../components/offer";

const InfoContainer = styled("div")`
    padding: 0 60px;
`

const MarginContainer = styled("div")`
    max-width: 1300px;
    margin: 0 auto;
`

const Jumbo2Grand = styled("div")`
    display: flex;
    align-items: center;
    padding: 50px 0;

    @media (max-width: 1300px){
        flex-direction: column;
    }
`

export default function Landing(){
    return (
        <Layout>
            <Helmet>
                <title>Quality Media | TMK Groups</title>
                <body className="dark-header"/>
            </Helmet>

            <Hero/>

            <Fade>
            <InfoContainer id="info">
                <MarginContainer>
                    <ImageContainer title="Assured Craftsmanship In Your Photos" image={left} alt="kitchen island" text="Unreal Engine is a state-of-the-art real-time engine and editor that features photorealistic rendering, dynamic physics and effects, lifelike animation, robust data translation, and much more—on a open, extensible platform that won't tie you down."/>
                </MarginContainer>
            </InfoContainer>

            <InfoContainer style={{backgroundColor: `#f9f9f9`}}>
                <MarginContainer>
                    <Offer/>
                </MarginContainer>
            </InfoContainer>

            <InfoContainer>
                <MarginContainer>
                    <ImageContainer title="Cutting-Edge Drone Media" image={drone} alt="drone shot" text="Unreal Engine is a state-of-the-art real-time engine and editor that features photorealistic rendering, dynamic physics and effects, lifelike animation, robust data translation, and much more—on a open, extensible platform that won't tie you down."/>
                </MarginContainer>
            </InfoContainer>
            </Fade>

        </Layout>
    );
}