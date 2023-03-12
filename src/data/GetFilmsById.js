import React from 'react';
import API from "../utils/API";
import RandomNumber from "../utils/RandomNumber";

const GetFilmsById = () => {
    let randomId = RandomNumber.getRandomNumber(6)
    return API.getTypeById('films',randomId)
};

export default GetFilmsById;