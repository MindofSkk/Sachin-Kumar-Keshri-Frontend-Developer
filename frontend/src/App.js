import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

import { Banner } from "./components/Banner/Banner";
import { Capsule } from "./components/Capsule/Capsule";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Capsule />
    </div>
  );
}

export default App;
