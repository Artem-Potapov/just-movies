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
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";

function App() {
    // THEME CREATION
    const theme = createTheme({
        typography: {
            fontFamily: "'Rubik', sans-serif",
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    fontFamily: "'Rubik', sans-serif"
                }
            }
        }
    });

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

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
