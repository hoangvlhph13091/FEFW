import React from 'react'
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';


import LayoutAdmin from './layouts/Admin';
import ListProduct from './page/admin/product/list';
import AddProduct from './page/admin/product/add';
import Dashboard from './page/admin/Dashboard';
import UpdateProduct from './page/admin/product/update';
import ListCategory from './page/admin/category/list';
import AddCategory from './page/admin/category/add';
import UpdateCategory from './page/admin/category/update';
import LayoutWebsite from './layouts/Website';
import HomePage from './page/website/HomePage';



const Routers = (props) => {
    return (
        <Router>
            <Routes>    
                            <Route path="admin/*" element={<LayoutAdmin/>} >
                        
                        
                                <Route  path="" element={<Navigate to="/admin/dashboard" />}/>
                                    
                                
                                <Route  path="dashboard"element={<Dashboard />}/>
                                    
                                <Route  path="products" element={<ListProduct {...props} />}/>

                                <Route  path="products/addproducts" element={<AddProduct  {...props} />}/> 

                                <Route  path="products/update/:id" element={<UpdateProduct  {...props} />}/> 
                                
                                <Route  path="categories" element={<ListCategory {...props} />}/>

                                <Route  path="categories/addcategory" element={<AddCategory  {...props} />}/> 

                                <Route  path="categories/update/:id" element={<UpdateCategory  {...props} />}/> 


                                {/* <Route exact path="/admin/addproduct">
                                    <AddProduct {...props} />
                                </Route> */}
                                {/* <Route exact path="/admin/updateproduct/:id">
                                    <UpdateProduct {...props} />
                                </Route> */}
                            </Route>
                            
                       
                
                
                            <Route path= "/*" element={<LayoutWebsite/>} >
                                <Route  path="" element={<Navigate to="/home/" />}/>
                                <Route  path="home" element={<HomePage {...props}/>}/>

                            </Route>
            </Routes>
        </Router>
    )
}
export default Routers



