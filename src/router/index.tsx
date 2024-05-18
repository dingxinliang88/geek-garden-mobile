import { createBrowserRouter } from "react-router-dom";
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

export default router;
