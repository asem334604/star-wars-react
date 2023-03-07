import React, {Component} from 'react';
import Navigation from "./Navigation";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="rounded-top">
                    <Navigation/>
                    <h1 className="text-center pt-5 pb-3">Luke Skywalker</h1>
                </header>
            </div>
        );
    }
}

export default Header;