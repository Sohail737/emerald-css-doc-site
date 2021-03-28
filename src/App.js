import "./App.css";
import "./App.mobile.css";
import { Navigation } from "./nav-component/Navigation";
import { Aside } from "./aside-component/Aside";
import { Footer } from "./footer-component/Footer";
import { Feed } from "./feed-component/Feed";
import { Home } from "./home-component/Home";
import { useState } from "react";
import { useAside } from "./aside-component/AsideContext";
import {routeNames} from "./misc/Constants"

export default function App() {
  const [route, setRoute] = useState(routeNames.home);

  const {isAsideOpen} = useAside();

  return (
    <div className="App">
      <div className={isAsideOpen ? "layout aside-open" : "layout"}>
        <Navigation route={route} setRoute={setRoute} />
        {route === routeNames.docs && <Aside route={route} />}
        {route === routeNames.docs && <Feed />}
        {/* {true && <div className="overlay"></div>} */}
        {route === routeNames.home && <Home setRoute={setRoute} />}
        <Footer />
      </div>
      <button onClick={() => window.scroll(0, 0)} class="cta">
        ▲
      </button>
    </div>
  );
}
