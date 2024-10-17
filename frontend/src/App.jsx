import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Landingpage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import { action as formDataAction } from "./pages/Contact";
import Aboutpage from "./pages/Aboutpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/root",
    element: <Root />,
    children: [
      {
        path: "/root",
        element: <Homepage />,
        action: formDataAction,
      },
      {
        path: "about",
        element: <Aboutpage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
