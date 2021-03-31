import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./components/article/box1/Home.js";
import About from "./components/article/box2/About.js";
import Services from "./components/article/box3/Services.js";
import Gallery from "./components/article/box4/Gallery.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Gallery />
    </div>
  );
}

export default App;
