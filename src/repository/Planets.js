import React, {Component} from 'react';
import API from "../utils/API";

class Planets extends Component {
    static getAllPlanets() {
        return API.getAllOfType('planets')
            .catch(err => console.log('server error', err));;
    }
}

export default Planets;