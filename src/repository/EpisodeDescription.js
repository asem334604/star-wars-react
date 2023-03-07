

import React, {Component} from 'react';
import RandomEpisode from "../utils/RandomEpisode";
import Api from "../data/API";

export default class EpisodeDescription extends Component {
    static getRandomDescription() {
        let randomId = RandomEpisode.getRandomEpisode();
        return Api.getEpisode(randomId).then(data => JSON.stringify(data.opening_crawl))
    }
}

