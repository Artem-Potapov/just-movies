import React from "react"
import { Outlet } from "react-router"

function AppLayout()
{

    return(
        <>
        <h1>Тут должен быть AppLayout, но "его нет" :/</h1>
        <Outlet />
        </>
    )
}

export default AppLayout;