import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import SessionProvider from "./context/Session.tsx";

import MyDrafts from "./pages/MyDrafts.tsx";
import Sidebar from "./components/Sidebar.tsx";
import LoginPage from "./pages/login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import UsersPage from "./pages/Users.tsx";
import SignUp from "./pages/SignUP.tsx";
import ViewFilePage from "./pages/ViewFilePage.tsx";
import Action from "./components/action.tsx";
import CreateFilePage from "./pages/CreateFilePage.tsx";
import Forward from "./components/initiateForm.tsx"
import TrackMyFilesPage from "./pages/TrackMyFilesPage.tsx";
import WelcomePage from "./pages/WelcomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SessionProvider>
        <Outlet />
      </SessionProvider>
    ),
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <WelcomePage/>
      },
      {
        path: "/",
        element: (
          <Sidebar />
        ),
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/action/:file_id",
            element: <Action />,
          },
          {
            path: "/track",
            element: <TrackMyFilesPage />,
          },
          {
            path: "/files",
            element: <MyDrafts />,
          },
          {
            path: "/files/create",
            element: <CreateFilePage />,
          },
          {
            path: "/file/:file_id",
            element: <ViewFilePage />,
          },
          {
            path: "/files/initiate",
            element: <Forward/>,
          },
          {
            path: "/users",
            element: <UsersPage />,
          },

        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
