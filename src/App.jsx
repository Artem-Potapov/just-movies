import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorElement from "./components/Error";
import Home from "./pages/Home";

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
