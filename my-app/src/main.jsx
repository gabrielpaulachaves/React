import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'


const router = createBrowserRouter([
{
        path:"/contato",
        element: <Contato />
},
{
        path:"/sobre",
        element: <Sobre />
}
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
