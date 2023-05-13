import "./App.scss";
import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuLateral/MenuBar";

const App = () => {
  return (
    <>
      <div className="layout">

          <MenuBar />
          

          <div className="layout__content">
            <Outlet />
          </div>

          <div className="sidebar">sidbar</div>
        </div>
    
    </>
  );
};

export default App;
