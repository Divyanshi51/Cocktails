import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import Cocktail from "./Components/Cocktail";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"
          element={<Home />}>
        </Route>
        <Route path="/about"
          element={<About />}>
        </Route>
        <Route path="/cocktail/:id"
          element={<SingleCocktail />}>
        </Route>
        <Route path="*"
          element={<Error />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
