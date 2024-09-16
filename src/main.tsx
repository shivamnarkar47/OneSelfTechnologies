import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "@/components/Home.tsx"

import { ThemeProvider } from "@/components/theme-provider"
import About from './components/About.tsx';
import Contact from "@/components/Contact.tsx"
import Services from './components/Services.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      }

    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>,
)
