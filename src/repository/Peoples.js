import React, {Component} from 'react';
import API from "../utils/API";

class Peoples extends Component {

    static updatePeoplesLocalstores() {
        localStorage.removeItem('localstorage_created');
        localStorage.removeItem('peoples');
        return API.getAllOfType('peoples').then(data => {
            localStorage.setItem('localstorage_created', JSON.stringify(Date.now()));
            localStorage.setItem('peoples', JSON.stringify(data));
        }).catch(err => console.log('server error', err));
    }
}

export default Peoples;