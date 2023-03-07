import React, {Component} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

class Main extends Component {
    render() {
        return (
            <div>
                <main className="clearfix">
                    <Hero/>
                    <Friends/>
                    <FarGalaxy/>
                </main>

            </div>
    );
    }
    }

    export default Main;