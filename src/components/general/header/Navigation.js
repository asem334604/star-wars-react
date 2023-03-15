import React, {Component} from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../../../utils/constants";
import {AppContext} from "../../../AppProvider";

class Navigation extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {value =>
                    <nav>
                        <ul className="position-fixed list-unstyled d-inline">
                            <li onClick={()=> value.changeActivePage(homePage)} className="border border-light rounded-pill btn btn-danger">Home</li>
                            <li onClick={()=> value.changeActivePage(aboutMePage)} className="border border-light rounded-pill btn btn-danger">About me</li>
                            <li onClick={()=> value.changeActivePage(starWarsPage)} className="border border-light rounded-pill btn btn-danger">Star wars</li>
                            <li onClick={()=> value.changeActivePage(contactPage)} className="border border-light rounded-pill btn btn-danger">Contact</li>
                        </ul>
                    </nav>
                }
            </AppContext.Consumer>
                );
    }
}

export default Navigation;