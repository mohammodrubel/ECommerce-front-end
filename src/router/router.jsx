import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Main from '../Page/Main'
import Cart from '../Page/Cart'
import WishList from '../Page/WishList'
import Products from '../Page/Products'
import SingleProduct from '../Page/SingleProduct'
import Dashbord from '../Dashbord/Dashbord'
import CreateNewProduct from '../Dashbord/CreateNewProduct'
import AllProduct from '../Dashbord/AllProduct'
import Login from '../Page/Authintication/Login'
import Register from '../Page/Authintication/Register'
import ProtectedRoute from './ProtectedRoute'
import CreateSlider from '../Dashbord/CreateSlider'

const router = createBrowserRouter (
    [
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<App/>
                },
                {
                    path:'/cart',
                    element:<Cart/>
                },
                {
                    path:'/wishlist',
                    element:<WishList/>
                },
                {
                    path:'/products',
                    element:<Products/>
                },
                {
                    path:'/products/:id',
                    element:<SingleProduct/>
                },
            ]
        },
        {
            path:'/dashbord',
            element:<ProtectedRoute><Dashbord/></ProtectedRoute>,
            children:[
                {
                    path:'product',
                    element:<AllProduct/>
                },
                {
                    path:'banner-slider',
                    element:<CreateSlider/>
                },
            ]
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
    ]
)

export default router