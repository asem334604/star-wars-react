import {Component} from 'react';

export default class RandomNumber extends Component {

    static getRandomNumber (maxValue) {
        return ((Math.random()*(maxValue-1))+1).toFixed(0)
    }
}
