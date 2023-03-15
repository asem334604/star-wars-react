import './App.css';
import Header from "./components/general/header/Header";
import Main from "./components/pages/main/Main";
import Footer from "./components/general/footer/Footer";
import React, {Component} from 'react';
import AppProvider from "./AppProvider";


class App extends Component {
    render() {
        return (
            <AppProvider>
                <div className="container-fluid">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </AppProvider>
        );
    }
}

export default App;

