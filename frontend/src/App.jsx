import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Landingpage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import { action as formDataAction } from "./pages/Contact";
import Aboutpage from "./pages/Aboutpage";
import DonatePage, { action as donateAction } from "./pages/DonatePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
    errorElement: <ErrorPage />,
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
      {
        path: "donate",
        element: <DonatePage />,
        action: donateAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
