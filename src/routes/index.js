import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/home";
import FourOFour from "../views/fourOfour";
import PokeDetail from "../views/pokedetail";

export default function Routes() {



    return (

        <Router>
            <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/pokemon/:id">
                <PokeDetail/>
            </Route>
            <Route>
                <FourOFour/>
            </Route>
            </Switch>
        </Router>

    )
}