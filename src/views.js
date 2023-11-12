
import React from 'react';
import { Routes ,Route } from "react-router-dom";
import Product from './Components/Produsct/Product';
import Details from './Components/Produsct/Details/Details';

const views = () => {
   return (
      <Routes>
         <Route path='/' element={<Product/>}/>
         <Route path="/details/:id" element={<Details/>} />
      </Routes>
   );
};

export default views;