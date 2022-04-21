import pages from "./pages/pages";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

const App = (props) => {
    localStorage.clear();
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <pages.HomePage />
                </Route>
                <Route exact path="/users">
                    <pages.UserPage />
                </Route>
                <Route exact path="/:flowerName" component={pages.QuizPage} />
            </Switch>
        </Router>
    );
};

export default App;
