import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: "/",
      element: <Chat/>,
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    }
  ]);


export default router;