import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Sugestoes from './routes/Sugestoes/Sugestoes.jsx';
import Home from './routes/Home/Home.jsx';
import Saiba from './routes/Saiba/Saiba.jsx';
import Formulario from './routes/Formulario/Formulario.jsx';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sugestoes",
    element: <Sugestoes />,
  },
  {
    path: "/formulario",
    element: <Formulario />,
  },
  {
    path: "/sobre",
    element: <Saiba />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
