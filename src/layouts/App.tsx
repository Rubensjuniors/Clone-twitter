import "./App.scss";
import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuLateral/MenuBar";
import Sidbar from "../components/Sidbar/Sidbar";

const App = () => {
  return (
    <>
      <div className="layout">
        <MenuBar />

        <div className="layout__content">
          <Outlet />
        </div>

        <Sidbar />
      </div>
    </>
  );
};

export default App;
