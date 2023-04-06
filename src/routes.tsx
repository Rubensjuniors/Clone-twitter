import { createBrowserRouter } from "react-router-dom";
import TimeLine from "./page/TimeLine/TimeLine";
import Status from "./page/Status/Status";
import App from "./layouts/App";

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
    ],
  },
]);

export default router;
