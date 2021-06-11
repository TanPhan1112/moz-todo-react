import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="todoapp stack-large">
      <Navbar />
      <ThemeSwitcher />
      <Switch>
        {/* Reference https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router */}
        <Route path={["/home", "/"]} component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
