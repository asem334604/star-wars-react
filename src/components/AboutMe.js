import React, {Component} from 'react';
import Films from "../repository/FIlms";
import Peoples from "../repository/Peoples";
import API from "../utils/API";

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.peoples = localStorage.getItem('peoples');
        this.localstoreCreated = localStorage.getItem('localstorage_created');
        this.state = {
            peoples: this.peoples ? this.peoples : null,
            localstoreCreated: this.localstoreCreated ? this.localstoreCreated : null,
            person: null,
            currTS: null,
            selectedId: 0
        }
    }

    componentDidMount = () => {
        console.log('componentDidMount');
        const msIn30Days = 30 * 24 * 60 * 60 * 1000;
        this.setState({currTS: Date.now()});

        if (this.peoples && this.state.currTS < this.localstoreCreated + msIn30Days) {
            this.setState({peoples: this.peoples});
            this.setState({localstoreCreated: this.localstoreCreated});
        } else if (this.peoples &&
            (this.state.currTS > (this.localstoreCreated + msIn30Days))) {
            Peoples.updatePeoplesLocalstores().finally(() => {
                this.setState({peoples: JSON.parse(localStorage.getItem('peoples'))});
                this.setState({localstoreCreated: Number(localStorage.getItem('localstorage_created'))});
            });
        } else if (!this.peoples) {
            Peoples.updatePeoplesLocalstores().finally(() => {
                    this.setState({peoples: JSON.parse(localStorage.getItem('peoples'))});
                    this.setState({localstoreCreated: Number(localStorage.getItem('localstorage_created'))});
                }
            );
        }
    }

    renderPeoples = () => {
        const options = JSON.parse(this.state.peoples).map(value => {
            return <option key={value.id}>{value.id}</option>
        });
        return (
            <>
                <select onChange={this.renderPerson}>{options}</select>
                {this.state.person !== null && (
                    <div>
                        <p>name: {this.state.person.name}</p>
                        <p>height: {this.state.person.height}</p>
                        <p>birth year: {this.state.person.birth_year}</p>
                        <p>gender: {this.state.person.gender}</p>
                        <p>mass: {this.state.person.mass}</p>
                        <p>hair color: {this.state.person.hair_color}</p>
                        <p>skin color: {this.state.person.skin_color}</p>
                        <p>eye color: {this.state.person.eye_color}</p>
                    </div>
                )}
            </>
        )
    }

    renderPerson = (e) => {
        console.log(e.target.value);
        this.setState({selectedId: e.target.value});
        let person = JSON.parse(this.state.peoples).filter(value => {
            console.log(value.id)
            return value.id === +this.state.selectedId;
        })
        console.log(person[0]);
        this.setState({person: person[0]})
    }

    render() {
        console.log('render');
        if (!this.state.peoples) {
            return (<div>Loading...</div>);
        } else {
            return this.renderPeoples();
        }

    }
}

export default AboutMe;
