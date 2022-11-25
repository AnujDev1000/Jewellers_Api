import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"

// Components
import Navbar from '../components/Navbar';
import Home from "../pages/Home";
import Product from "../pages/Product";
import Sales from "../pages/Sales";
import Purchase from "../pages/Purchase";
import Categories from "../pages/Categories";
import Employees from "../pages/Employees";
import Stocks from "../pages/Stocks";
import Suppliers from "../pages/Suppliers";
import Orders from "../pages/Orders";
import Navigater from '../components/Navigate';

// context
import { AuthContext } from '../context/AuthContext';

const PagesRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="layout">    
            <Navbar /> 
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/sales" element={<Sales  />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/orders" element={<Orders />} />
                {/* {user ? <Home /> : <Navigater path="/" command="notExists" />} */}
            </Routes>   
        </div>  
    )
}

export default PagesRoutes
