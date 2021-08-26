import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Riesling from "./wines/Riesling";
import Syrah from "./wines/Syrah";
import Ale from "./beers/Ale";
import Lager from "./beers/Lager";
import Trappist from "./beers/Trappist";

import Header from "./navigation/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route path="/" exact>
        <Riesling />
      </Route>
      <Route path="/syrah">
        <Syrah />
      </Route>
      <Route path="/ale">
        <Ale />
      </Route>
      <Route path="/trappist">
        <Trappist />
      </Route>
      <Route path="/lager">
        <Lager />
      </Route>
    </BrowserRouter>
  );
}

export default App;
