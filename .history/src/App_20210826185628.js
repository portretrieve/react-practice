import Riesling from "./wines/Riesling";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Riesling />
      </Route>
    </BrowserRouter>
  );
}

export default App;
