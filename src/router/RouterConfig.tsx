import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexPage from "@/router/IndexPage.tsx";
import NavigateComponent from "@/component/navigate/NavigateComponent.tsx";
import LoginComponent from "@/component/login/LoginComponent.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage/>,
    },
    {
        path: "/nav",
        element: <NavigateComponent/>
    },
    {
        path: "/login",
        element: <LoginComponent/>
    }
]);

const RouterConfig = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default RouterConfig;