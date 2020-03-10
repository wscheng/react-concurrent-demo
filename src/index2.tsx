import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense } from "react";
// import Loadable from "react-loadable";
// import { BrowserRouter } from "react-router-dom";
// import About from "./About";
// import Users from "./Users";

// import Home from "./Home";

const Loading = () => {
  return <div>Loading......</div>;
};
// const About = Loadable({
//   loader() {
//     return import("./About");
//   },
//   loading: Loading
// });

const Users = React.lazy(() => import("./Users"));
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));

const root = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <Router basename="/dist">
    <App />
  </Router>,
  root
);

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/users" exact component={Users} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </div>
  );
}
