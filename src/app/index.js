import React from "react";
import PropTypes from "prop-types";

import Home from "../pages/home";

import "./index.scss";

function App() {
    return (
        <div id="app">
            <Home />
        </div>
    );
}

App.propTypes = {
    location: PropTypes.any,
    history: PropTypes.any,
};

export default App;
