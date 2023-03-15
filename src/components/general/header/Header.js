import React, {Component} from 'react';
import Navigation from "./Navigation";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header className="rounded-top">
                    <Navigation changePage = {this.props.changePage}/>
                    <h1 className="text-center pt-5 pb-3">Luke Skywalker</h1>
                </header>
            </div>
        );
    }
}

export default Header;