import "./Global.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="content">
         <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
