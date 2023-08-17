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
import Favorites from "./pages/Favorites";

function App() {
    const [movieData, setMovie] = useState([]);
    const [favoritesData, setFavoritesData] = useState([])

    // THEME CREATION
    const theme = createTheme({
        typography: {
            fontFamily: "'Rubik', sans-serif",
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    fontFamily: "'Rubik', sans-serif",
                },
            },
        },
    });

    useEffect(() => {
        async function getMovies() {
            axios
                .get("http://localhost:1337/api/movies?populate=*")
                .then((res) => setMovie(res.data.data));
        }
        getMovies();

        async function getFavorites() {
            axios
                .get("http://localhost:1337/api/favorites?populate=*")
                .then((res) => setFavoritesData(res.data.data));
        }
        getFavorites()
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
                    element: <Movies data={movieData} />,
                },
                {
                    path: "/favorites",
                    element: <Favorites data={favoritesData} />,
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
