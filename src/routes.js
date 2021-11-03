import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Part2 from "./pages/Part2";
import Part1 from "./pages/Part1";
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/part1' component={Part1}/>
                <Route exact path='/part2' component={Part2}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;