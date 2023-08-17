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
import useGetAxios from "./hooks/useGetAxios";

function App() {
    const {
        data: moviesData,
        loading: moviesLoading,
        error: moviesError,
    } = useGetAxios("http://localhost:1337/api/movies?populate=*");

    const {
        data: favoritesData,
        loading: favoritesLoading,
        error: favoritesError,
    } = useGetAxios("http://localhost:1337/api/favorites?populate=*");

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
                    element: <Movies error={moviesError} loading={moviesLoading} data={moviesData}/>,
                },
                {
                    path: "/favorites",
                    element: <Favorites data={favoritesData} loading={favoritesLoading}/>,
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
