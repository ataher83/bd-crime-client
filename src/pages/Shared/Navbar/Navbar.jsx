import { useContext } from "react";
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

// import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); 

    const [text] = useTypewriter({
        words: ['BD Crime', 'বিডি ক্রাইম', 'BD Crime', 'বিডি ক্রাইম'],
        loop: 0
      })


    const [theme, setTheme] = useState('light')
    // update state on toggle
    const handleToggle = e => {
        if (e.target.checked) {
        setTheme('dark')
        } else {
        setTheme('light')
        }
    }
    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])




    const handleSignOut = () => {
        logOut()
            .then()
            .catch() 
    }

    const navLinks = <>
    <li><NavLink to="/">হোম</NavLink></li>
    <li><NavLink to="/criminalList">অপরাধীদের তালিকা</NavLink></li>
    <li><NavLink to="/addInfo">অপরাধ ও অপরাধীর তথ্য দিন</NavLink></li>
    <li><NavLink to="/blogs">ক্রাইম ব্লগস</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 text-error font-semibold mt-5   container mx-auto">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-0 z-[10] p-2 shadow bg-base-100 rounded-box w-52 ">
                    
                    {navLinks}

                </ul>
                </div>
                <img className="w-20 md:w-32 rounded-2xl" src="https://i.imgur.com/r5tF8qi.png" alt="" />
                <a className="text-2xl font-bold text-red-500 ml-1 bg-green-700 p-1 rounded-lg" href="/"><span>{text}</span></a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ">
                
                    {navLinks}

                </ul>
            </div>
            
            <div className="navbar-end">
                {
                    user?
                        <div >
                            <span className="text-red-700">{user.email}</span>
                            <div className="flex gap-3">
                                <div className="avatar  tooltip" data-tip={user.displayName} >
                                    <div className="w-12 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                
                                <div>
                                    <button onClick={handleSignOut}
                                    className="btn btn-error">Log out</button>
                                </div>
                            </div>
                        </div>
                        
                        :
                        <Link to="/login">
                        <button className="btn btn-success">Login</button>
                        </Link>
                }
            </div>

            

            <div>
                <label className="swap swap-rotate">
                    
                    {/* this hidden checkbox controls the state */}
                    <input 
                        type="checkbox" 
                        onChange={handleToggle}
                    />
                    
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                </label>
            </div>
            
        </div>
    );
};

export default Navbar;