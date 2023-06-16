import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { AiFillFileAdd } from 'react-icons/ai'


const NavItem =({to, value,closed,Icon}) => {
    const commonClasses ="flex items-centre space-x-2 w-full p-2 block whitespace-nowrap";
    const activeClass =   commonClasses+'bg-blue-500 text-white';
    const inActiveClass =   commonClasses+'text-gray-500';
    return(
        <NavLink 
            className={({isActive}) => (isActive ? activeClass : inActiveClass)} to={to}>
            {Icon} 
            <span
               className={ closed
                  ? "w-0 transition-width overflow-hidden"
                  : "w-full transition-width overflow-hidden"
               }
            >{value}
            </span>
        </NavLink>
    );
};


export default function Navbar({closed}) {
  return (
    <nav>
        <div className='flex justify-centre p-3'>
            <img className='w-14' src='./202.jpg' alt=""/>
        </div>
        <ul>

            <li>
                <NavItem  closed={closed} to='/' value='    Home' Icon={<AiOutlineHome size={24} />}/></li>
            
            
            
            <li><NavItem  clossed={closed} to='/create-post' value='   Create Post' Icon={<AiFillFileAdd size={24} />}/></li>
            
            
        </ul>
    </nav>
  )
};
