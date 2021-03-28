import "./Home.css";
import "./Home.mobile.css";
import {routeNames} from "../misc/Constants"

export const Home = ({setRoute}) => {
  return (
    <div className="home">
      <h1>
          Build UI with Emerald's range of CSS Components without any hassle to
          write your own
        </h1>
        <p>
          Integrate Emerald's CSS components in your project for an immersive
          user experience. Use classes and start building your UI
        </p>
        <button onClick={()=>setRoute(routeNames.docs)} class="btn primary">Get Started</button>
      {/* <div className="home-content">
        
      </div> */}
    </div>
  );
};
