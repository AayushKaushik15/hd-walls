import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, RouterProvider, outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
const App = () => {
    return (
        <div className="main">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(<RouterProvider router = {appRouter} />)