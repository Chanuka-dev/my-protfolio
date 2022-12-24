import "./App.scss";
import Header from "./layout/header/Header";
import Navgation from "./layout/Navgation";
import About from "./pages/about/About";
import Work from "./pages/work/Work";

function App() {
  return (
    <div className="App">
      <Navgation />
      {/* heade */}
      <Header />
      {/* About */}
      <About />
      {/* work */}
      <Work />
      {/* footer */}
    </div>
  );
}

export default App;
