import React, {Component} from 'react';
import style from './footer.module.css'

class Footer extends Component {
    render() {
        return (
                <footer className="rounded-bottom">
                    <div>
                        <p className="border border-light rounded-pill btn btn-danger">
                            Send me an <span className={style.email}>email</span></p>
                    </div>
                </footer>
        );
    }
}

export default Footer;