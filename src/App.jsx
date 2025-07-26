import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import NavBar from "./components/Navbar";
import Body from "./components/body";
import Contact from "./components/contact";
import About from "./components/About";

function App()
{
    function AppLayout()
    {
        return (<div>
            <NavBar/>
            <Outlet/>
        </div>)
    }
    let a=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
            {

                path:"/",
                element:<Body/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/About",
                element:<About/>
            }
            ]
        },
       
    ])
    return <div>
       <RouterProvider router={a}></RouterProvider>
    </div>
}
export default App;