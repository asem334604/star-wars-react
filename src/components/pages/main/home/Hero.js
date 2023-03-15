import React, {Component} from 'react';

class Hero extends Component {
    render() {
        return (
            <section className="left float-left w-25 mr-1 row">
                <img className="col-12" src={require('../../../../images/main.jpg')} alt={'Hero'}/>
            </section>
        );
    }
}

export default Hero;