import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <Router>
      <AmplifySignOut />
      <Switch>
        <Route exact path="/">
          <StudentTable />
        </Route>
        <Route exact path="/add-student">
          <AddStudent />
        </Route>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
