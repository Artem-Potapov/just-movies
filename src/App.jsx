import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorElement from "./components/Error";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts/";

function App() {

    useEffect(() => {
      
    }, [url]);
    const router = createBrowserRouter([
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
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
