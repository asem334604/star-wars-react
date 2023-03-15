import React, {Component} from 'react';
import GetFilmsById from "../data/GetFilmsById";

class FIlms extends Component {
    static getFilmDescription () {
        return GetFilmsById().then(data => JSON.stringify(data.opening_crawl))
    }
    static saveCrawlToSessionStorage () {
        return GetFilmsById().then(data => {
            sessionStorage.setItem('opening_crawl', JSON.stringify(data.opening_crawl));
        })
    }

}

export default FIlms;
// import {Component} from 'react';
// import RandomNumber from "../utils/RandomNumber";
// import Api from "../utils/API";
//
// export default class EpisodeDescription extends Component {
//     static getRandomDescription() {
//         let randomId = RandomNumber.getRandomNumber(6);
//         return Api.getEpisode(randomId).then(data => JSON.stringify(data.opening_crawl))
//     }
// }

