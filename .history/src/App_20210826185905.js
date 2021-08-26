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
      <Route path="/">
        <Riesling />
      </Route>{" "}
      <Route path="/">
        <Riesling />
      </Route>{" "}
      <Route path="/">
        <Riesling />
      </Route>{" "}
      <Route path="/">
        <Riesling />
      </Route>
    </BrowserRouter>
  );
}

export default App;
