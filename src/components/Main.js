import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, starWarsPage} from "../utils/constants";


const Main = (props) => {
    switch (props.page) {
        case aboutMePage: return (
            <AboutMe/>
        );
        case starWarsPage: return (
            <StarWars/>
        );
        case contactPage: return (
            <Contact/>
        );
        default: return (
            <Home/>
        );
    }
};



    export default Main;