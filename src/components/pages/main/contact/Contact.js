import React, {Component} from 'react';
import style from './contact.modules.css'
import Planets from "../../../../repository/Planets";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: null
        }
    }

    componentDidMount = () => {
        console.log('componentdidmount')
        Planets.getAllPlanets().then(data => {
            const planets = data.map(value => <option key={value.name}>{value.name}</option>)
            this.setState({planets: planets});
        })
    }

    render() {
        return (
            <>
                {this.state.planets !== null &&
                    (<div className={style.container}>
                        <form action="action_page.php">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                            <label htmlFor="country">Planet</label>
                            <select id="planet" name="planet">{this.state.planets}</select>
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."
                                      style={{height: '200px'}}></textarea>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>)}
            </>
        );
    }
}

export default Contact;
