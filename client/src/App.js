import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SpaceGram from "./components/SpaceGram/SpaceGram";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/spacegram" component={SpaceGram} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
