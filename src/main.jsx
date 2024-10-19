import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Home from './routes/Home/Home.jsx';
import Pagina2 from './routes/Pagina2/Pagina2.jsx';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        // loader: null,
    },
    {
        path: "/pagina2",
        element: <Pagina2 />,
        // loader: null,
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
