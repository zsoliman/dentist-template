import "./App.css";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Navigation /> */}
      <LandingPage />
    </div>
  );
}

export default App;
