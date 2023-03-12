import React, {Component} from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <ul className="position-fixed list-unstyled d-inline">
                    <li onClick={()=> this.props.changePage(homePage)} className="border border-light rounded-pill btn btn-danger">Home</li>
                    <li onClick={()=> this.props.changePage(aboutMePage)} className="border border-light rounded-pill btn btn-danger">About me</li>
                    <li onClick={()=> this.props.changePage(starWarsPage)} className="border border-light rounded-pill btn btn-danger">Star wars</li>
                    <li onClick={()=> this.props.changePage(contactPage)} className="border border-light rounded-pill btn btn-danger">Contact</li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;