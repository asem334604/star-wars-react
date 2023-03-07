import React, {Component} from 'react';

export default class RandomEpisode extends Component {

    static getRandomEpisode () {
        return ((Math.random()*6)+1).toFixed(0)
    }
}
