import React, {Component} from 'react';
import Home from "./home/Home";
import AboutMe from "./AboutMe";
import StarWars from "./star_wars/StarWars";
import Contact from "./contact/Contact";
import {aboutMePage, contactPage, starWarsPage} from "../../../utils/constants";
import {AppContext} from './../../../AppProvider';


const Main = () => {
    return (
        <AppContext.Consumer>
            {value => {
                const changeActivePage = (activePage) => {
                    switch (activePage) {
                        case aboutMePage:
                            return <AboutMe />;
                        case starWarsPage:
                            return <StarWars />;
                        case contactPage:
                            return <Contact />;
                        default:
                            return <Home />;
                    }
                };
                return changeActivePage(value.activePage);
            }}
        </AppContext.Consumer>
    );
};

export default Main;
// const Main = (props) => {
//     switch (props.page) {
//         case aboutMePage: return (
//             <AboutMe/>
//         );
//         case starWarsPage: return (
//             <StarWars/>
//         );
//         case contactPage: return (
//             <Contact/>
//         );
//         default: return (
//             <Home/>
//         );
//     }
// };
//
// export default Main;