import React, {Component} from 'react';

export const AppContext = React.createContext();

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: null
        }
    }

    changeActivePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    render() {
        return (
            <>
                <AppContext.Provider value={{
                    activePage: this.state.activePage,
                    changeActivePage: this.changeActivePage
                }}>
                    {this.props.children}
                </AppContext.Provider>

            </>

        );
    }
}

export default AppProvider;