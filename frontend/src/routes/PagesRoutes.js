import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom"

// Components
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
import Users from '../pages/Users';

const PagesRoutes = () => {
    const { user } = useContext(AuthContext)

    return (  
            <div className="container">     
                <Routes>
                    <Route path="/home" element={ <Home />} />
                    {/* <Route path="/home" element={user && user ? <Home /> : <Navigater path="/" command="notExists" />} /> */}
                    
                    <Route path="/products" element={<Product />}/>
                    {/* <Route path="/products" element={user && user ? <Product /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/sales" element={ <Sales  />} />
                    {/* <Route path="/sales" element={user &&  user.isAdmin ? <Sales  /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/users" element={ <Users  />} />
                    {/* <Route path="/users" element={user &&  user.isAdmin ? <Users  /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/purchase" element={ <Purchase  />} />
                    {/* <Route path="/purchase" element={user &&  user.isAdmin ? <Purchase  /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/categories" element={ <Categories />} />
                    {/* <Route path="/categories" element={user &&  user ? <Categories /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/stocks" element={ <Stocks />} />
                    {/* <Route path="/stocks" element={user &&  user ? <Stocks /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/employees" element={ <Employees />} />
                    {/* <Route path="/employees" element={user &&  user.isAdmin ? <Employees /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/suppliers" element={ <Suppliers />} />
                    {/* <Route path="/suppliers" element={user &&  user ? <Suppliers /> : <Navigater path="/" command="authorise" />}/> */}
                    
                    <Route path="/orders" element={ <Orders />} />
                    {/* <Route path="/orders" element={user &&  user ? <Orders /> : <Navigater path="/" command="authorise" />}/> */}
                </Routes>   
            </div>    
    )
}

export default PagesRoutes
