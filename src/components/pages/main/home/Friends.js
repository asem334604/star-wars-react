import React, {Component} from 'react';
import {friends}  from '../../../../utils/constants'
import Friend from "./Friend";

class Friends extends Component {
    render() {
        return (
            <section className="right float-end m-2 w-50 row border border-light no-gutters">
                <h3 className="col-12 text-center">Friends</h3>
                {
                    friends.map((item, index) => <Friend friend={item} key={index}/>)
                }
            </section>
        );
    }
}

export default Friends;