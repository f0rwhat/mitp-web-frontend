import React from 'react'

import 'dotenv'
import Routes from "./routes";
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        toggleTheme: this.toggleTheme,
    };

    render() {
        return (
            <Routes />
        );
    }
}