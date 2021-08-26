import { BrowserRouter, Route, Switch } from "react-router-dom";

import Riesling from "./wines/Riesling";
import Syrah from "./wines/Syrah";
import Ale from "./beers/ale";
import Lager from "./beers/lager";
import Trappist from "./beers/Trappist";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
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
