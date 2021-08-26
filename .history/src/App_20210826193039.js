import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Riesling from "./wines/Riesling";
import Syrah from "./wines/Syrah";
import Ale from "./beers/Ale";
import Lager from "./beers/Lager";
import Trappist from "./beers/Trappist";

import Header from "./navigation/Header";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/wines" exact>
        <Riesling />
      </Route>
      <Route path="/wines/syrah">
        <Syrah />
      </Route>
      <Route path="/beers/ale">
        <Ale />
      </Route>
      <Route path="/beers/trappist">
        <Trappist />
      </Route>
      <Route path="/beers/lager">
        <Lager />
      </Route>
    </BrowserRouter>
  );
}

export default App;
