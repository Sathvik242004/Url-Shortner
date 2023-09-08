import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./Home";
import Page from "./Page";
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Rootlayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/:id",
          element:<Page/>,
        }
      ]
    }
  ])

  return (
<div><RouterProvider router={router}/></div>
  );
}

export default App;
