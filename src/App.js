import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import UserPage from "./components/UserPage";
import RolePage from "./components/RolePage";
import PermissionPage from "./components/PermissionPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <UserPage />,
        },
        {
          path: "role",
          element: <RolePage />,
        },
        {
          path: "permission",
          element: <PermissionPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={appStore}>
        <div>
          <Header />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;
