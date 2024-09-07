import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Landing from "./pages/landing.jsx";
import About from "./pages/about.jsx";
import Work from "./pages/work.jsx";
import Contact from "./pages/contact.jsx";

const router = createBrowserRouter(
[
      {
        path: '/',
        element:
            <>
              <Outlet/>
            </>,
          errorElement:
              <>
                  <meta charSet="utf-8" name='description' content='Portfolio de Vera Nicolas'/>
                  <Landing/>
              </>,
          children:
              [
                  {
                      path: "",
                      element:
                      <>
                          <meta charSet="utf-8" name='description' content='Portfolio de Vera Nicolas'/>
                          <Landing/>
                      </>
                  },
                  {
                      path: '/about',
                      element:
                      <>
                          <meta charSet="utf-8" name='description' content='Page à propos'/>
                          <About/>
                      </>
                  },
                  {
                      path: "/work",
                      element:
                      <>
                          <meta charSet="utf-8" name='description' content='Projets'/>
                          <Work/>
                      </>
                  },
                  {
                      path: '/contact',
                      element:
                      <>
                          <meta charSet="utf-8" name='description' content='Contact'/>
                          <Contact/>
                      </>
                  },
              ]
      },

]
);

              function App() {

                  return (
                  <>
                      <RouterProvider router={router}/>
                      <Outlet/>
                  </>
)
}

export default App
