import React from 'react'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import { useState } from "react";  
import { Route, Routes } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import NotFound from './components/NotFound';
import UpdatePost from './components/UpdatePost';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';


export default function App() {
   const [closedNav,setClosedNav]= useState(false)
   
   const toggleNav =() =>{
     setClosedNav(!closedNav);
   };
   const getNavWidth =() => (closedNav ? "w-16" : "w-56");





  return (
    <div className='flex'>
        {/*nav section*/}
      <div className={getNavWidth()+ " h-screen  transition-width"}><div className='stiky top-0'></div><Navbar closed={closedNav}/></div>
        


        {/*content section */}
      <div className='flex-1 min-h-screen  bg-blue-100'>
        <div className='sticky top-0'></div>
        <div className='flex items-center space-x-2'>
          <button onClick={toggleNav}>
             {closedNav ? (<AiOutlineMenuUnfold size={25}/>):(<AiOutlineMenuFold size={25}/>)}

          </button>
          <SearchForm/>
          </div>
          <div className='max-w-screen-lg  mx-auto'>
            <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/create-post'  element={<CreatePost/>}/>
              <Route path='/not-found'  element={<NotFound/>}/>
              <Route path='*'  element={<UpdatePost/>}/>
            </Routes>
          </div>

        
        
        
        
        </div>



    </div>
  )
}
