import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorElement from "./components/Error";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function implementAxios() {
            axios
                .get("http://localhost:1337/api/movies?populate=*")
                .then((res) => setData(res.data.data));
        }
        implementAxios();
    }, []);

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
                {
                    path: "/movies",
                    element: <Movies data={data} />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
