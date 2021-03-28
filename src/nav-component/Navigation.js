import "./Navigation.css";
import "./Navigation.mobile.css";
import {useAside} from "../aside-component/AsideContext"
import {routeNames} from "../misc/Constants"

export const Navigation = ({ route, setRoute }) => {
  const {setIsAsideOpen}=useAside();

  const routeHandler = (route) => {
    switch (route) {
      case routeNames.home:
        setRoute(routeNames.home);
        break;
      case routeNames.docs:
        setRoute(routeNames.docs);
        break;
      // case "about":
      //   setRoute("about");
        break;
      default:
        console.log("Some Error in Routing");
    }
  };

  return (
    <div onTouchStart={()=>{setIsAsideOpen(false)}} className="header">
      <div className="logo">
        {/* <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M9 7v10h6v-2h-4v-2h4v-2h-4V9h4V7H9z"
            fill="currentColor"
          ></path>
        </svg> */}
        <img src="./assets/logo.svg" alt=""></img>
      </div>
      <nav className="heading">
        <ul className="nav">
          <li className={route === routeNames.home ? "nav-item active" : "nav-item"}>
            <a onClick={() => routeHandler(routeNames.home)}>Home</a>
            {/* <button onClick={() => routeHandler("home")}>Home</button> */}
          </li>

          <li className={route === routeNames.docs ? "nav-item active" : "nav-item"}>
            <a onClick={() => routeHandler(routeNames.docs)}>Docs</a>
            {/* <button onClick={() => routeHandler("docs")}>Docs</button> */}
          </li>
          {/* <li className={route === "about" ? "nav-item active" : "nav-item"}>
            <a onClick={() => routeHandler("about")}>About</a>
          </li> */}
        </ul>
      </nav>
      <div onClick={()=>setIsAsideOpen(isAsideOpen=>!isAsideOpen)} className={route===routeNames.home?"hamburger hidden":"hamburger"}>
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
