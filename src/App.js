import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Prices from "./components/RootPage/Prices";
import Home from "./components/RootPage/Home";
import RootPage from "./components/RootPage";
import Privacy from "./components/RootPage/Privacy";
import Designs from "./components/RootPage/designs";
import Done from "./components/RootPage/Done";
import "./main.scss";
import "./app.scss";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'prices',
                element: <Prices />
            },
            {
                path: 'designs',
                element: <Designs />
            },
            {
                path: 'terms',
                element: <Privacy />
            },
        ]
    },
    {
        path: '/done',
        element: <Done />
    }
])

const App = () => {
    return <div className="frame-container">
        <div className="frame">
            <RouterProvider router={router} />
        </div>
    </div>
}

export default App;