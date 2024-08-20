import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/errorpages'
import ProductsPages from './Pages/products'
import ProfilePage from './Pages/profile'
import DetailProductPage from './Pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store'
// import Navbar from './components/Layout/Navbar'
import DarkModeContextProvider from './context/DarkMoode'
import { TotalPriceProvider } from './context/TotalPriceContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hallo World</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path : "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPages />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <Navbar /> */}
      <DarkModeContextProvider>
        <TotalPriceProvider>
      <RouterProvider router = {router} />
      </TotalPriceProvider>
      </DarkModeContextProvider>
      </Provider>
  </React.StrictMode>,
)
