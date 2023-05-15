import { createBrowserRouter } from "react-router-dom";
import TimeLine from "./page/Home/Home";
import Status from "./page/Status/Status";
import App from "./layouts/App";
import Explore from "./page/Explore/Explore";
import Notifications from "./page/Notifications/Notifications";
import Messages from "./page/Messages/Messages";
import Bookmarks from "./page/Bookmarks/Bookmarks";
import Profile from "./page/Profile/Profile";
import List from "./page/List/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TimeLine />,
      },
      {
        path: "/Status",
        element: <Status />,
      },
      {
        path: "/Explore",
        element: <Explore />,
      },
      {
        path: "/Notifications",
        element: <Notifications />,
      },
      {
        path: "/Messages",
        element: <Messages />,
      },
      {
        path: "/Bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/List",
        element: <List />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
