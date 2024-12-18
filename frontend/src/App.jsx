import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Landingpage from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import { action as formDataAction } from "./pages/Contact";
import Aboutpage from "./pages/Aboutpage";
import DonatePage, { action as donateAction } from "./pages/DonatePage";
import ErrorPage from "./pages/ErrorPage";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import Contact from "./pages/Contact";
import TasksPage from "./pages/TasksPage";
import TaskPage from "./pages/TaskPage";

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
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "events/:eventId",
        element: <EventPage />,
        errorElement: (
          <div className="w-screen h-screen flex justify-center items-center">
            no element found
          </div>
        ),
      },
      { path: "contact", element: <Contact />, action: formDataAction },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "tasks/:taskId",
        element: <TaskPage />,
        errorElement: (
          <div className="w-screen h-screen flex justify-center items-center">
            no element found
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
