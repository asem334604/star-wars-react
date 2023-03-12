import React from 'react';
import API from "../utils/API";
import RandomNumber from "../utils/RandomNumber";

const GetPeoplesById = () => {
    let peoplesNum;
    API.getAllOfType('peoples').then(data => peoplesNum = data.length);
    let randomId = RandomNumber.getRandomNumber(peoplesNum);
    return API.getTypeById('peoples',randomId)
};

export default GetPeoplesById;