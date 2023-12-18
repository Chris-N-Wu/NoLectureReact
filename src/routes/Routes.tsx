import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import RoomDescription from "../components/RoomDescription";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: ":building/:room", element: <RoomDescription /> },
            // { path: "", element: <Home /> },
        ]
    }
])