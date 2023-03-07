
import React, {Component} from 'react';

export default class Api extends Component {
    static getEpisode (id) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(`https://sw-info-api.herokuapp.com/v1/films/${id}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error: ', error));
    }
}


