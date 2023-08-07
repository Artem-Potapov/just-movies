import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { RouterProvider } from "react-router-dom";
import ErrorElement from "./components/Error";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";

function App() {

  const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorElement />,
      children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      }]
    }
  ],)


  return (
    <RouterProvider router={router} />
  );
}

export default App;
