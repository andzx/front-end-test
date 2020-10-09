import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

// Import components
import Index from "./components/index/index.jsx";
import Project from "./components/project/project.jsx";

// Import component styles
import "./components/index/index.css";
import "./components/project/project.css";

function App() {
    return (
        <Router basename={'/test'}>
            <Switch>
                <Route path="/" exact={true} component={Index}></Route>
                <Route path="/project" component={Project}></Route>
            </Switch>
        </Router>
    );
}

export default App;
