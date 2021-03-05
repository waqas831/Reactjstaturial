import "./styles.css";
import Header from "./Header";
import User from "./User";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";
import Contact from "./Conatct";
import Navbar from "./Navbar";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about" component={Header} />
        <Route path="/contact" component={Contact} />
        <Route path="/user/:name" component={User} />
        <Route path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
