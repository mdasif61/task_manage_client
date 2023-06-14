import { createBrowserRouter } from "react-router-dom";
import Render from "../Layout/Render";
import Home from "../Home/Home";
import MyTask from "../Pages/MyTask";
import AddTask from "../Pages/AddTask";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Render></Render>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/mytask',
                element:<MyTask></MyTask>
            },
            {
                path:'/addtask',
                element:<AddTask></AddTask>
            }
        ]
    }
])

export default router;