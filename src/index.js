import React from "react"
import ReactDOM from "react-dom/client"
import Information from "./routes/Information"
import { RouterProvider, createHashRouter } from "react-router-dom"
import Home from "./routes/Home"
import Root from "./routes/Root"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/information",
                element: <Information />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)