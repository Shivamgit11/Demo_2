import { Route, Switch } from "react-router-dom";
import "./App.css";

import User from "./Components/User";
import UserDetails from "./Components/Userdetails";

function App() {
  console.log("inside app");
  return (
    <>
      <Switch>
        <Route path="/user" exact>
          <User />
        </Route>
        <Route path="/user/userdetails" exact>
          <UserDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;
