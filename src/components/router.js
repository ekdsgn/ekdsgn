import Header from './header'
import Footer from './footer';
import Contact from '../pages/contact'
import Home from '../pages/home';
// import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Router = () => {

  const Layout = () => {
    return (
      <>
        {/* <Header /> */}
        <Outlet />
        <Footer />
      </>
    )
  }

  // const BrowserRoutes = () => {
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Layout/>}>
  //           <Route path="/" element={<Home/>} />
  //           <Route path="contact-us" element={<Contact />} />
  //         </Route>
    
  //       </Routes>
  //     </BrowserRouter>
  //     );
  // }

  // return (
  //   <BrowserRoutes />
  // )


  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
    
        {
          path: "/contact-us",
          element: <Contact />
        },
      ]
    }

  ])

return (
  <RouterProvider router={BrowserRoutes} />
)

}

export default Router;