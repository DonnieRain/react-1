import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="wrapper">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;
