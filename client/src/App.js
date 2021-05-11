import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomePage";
import ProductScreen from "./pages/ProductPage";
import CartScreen from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
