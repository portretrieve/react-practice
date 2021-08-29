import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Riesling from "./wines/Riesling";
import Syrah from "./wines/Syrah";
import Ale from "./beers/Ale";
import Lager from "./beers/Lager";
import Trappist from "./beers/Trappist";

import Header from "./navigation/Header";
import MainPage from "./MainPage";
import CenterContent from "./Util/
CenterContent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <CenterContent>
            <MainPage />
          </CenterContent>
        </Route>
        <Route path="/wines" exact>
          <CenterContent>
            <Riesling />
          </CenterContent>
        </Route>
        <Route path="/wines/syrah" exact>
          <CenterContent>
            <Syrah />
          </CenterContent>
        </Route>
        <Route path="/beers/ale" exact>
          <CenterContent>
            <Ale />
          </CenterContent>
        </Route>
        <Route path="/beers/trappist" exact>
          <CenterContent>
            <Trappist />
          </CenterContent>
        </Route>
        <Route path="/beers/lager" exact>
          <CenterContent>
            <Lager />
          </CenterContent>
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
