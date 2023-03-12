
import {Component} from 'react';
import {baseUrl} from "./constants";

export default class API extends Component {
    static getAllOfType (type) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(`${baseUrl}/${type}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error: ', error));
    }
    static getTypeById (type, id) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(`${baseUrl}/${type}/${id}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error: ', error));
    }
}


