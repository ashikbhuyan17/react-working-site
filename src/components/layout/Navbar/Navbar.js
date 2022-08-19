import React, { useEffect, useState } from 'react';
import { decode } from '../../lib/token'
const Navbar = () => {
    const [first, setFirst] = useState(false)
    const [token, setToken] = useState({})

    const toggle_nav = () => {
        setFirst(!false)
    }
    useEffect(() => {
        const token = decode()
        setToken(token)
    }, [])

    return (
        <div className='bg-slate-900'>
            <nav className='bg-slate-700 flex justify-between flex-wrap
             text-white items-center py-4 px-5
              '>
                {/* logo */}
                <div>
                    <span className='
                    font-semibold
                    text-4xl
                    text-green-400
                    '>Designer</span>
                </div>

                {/* toggle button */}
                <div className='block lg:hidden'>
                    <button className='flex flex-col px-3 py-2 border rounded border-gray-800 hover:border-white' onClick={toggle_nav}>
                        <div className="w-6 h-1 bg-white"></div>
                        <div className="w-6 h-1 bg-white my-1"></div>
                        <div className="w-6 h-1 bg-white"></div>
                    </button>
                </div>

                {/* nav menu */}
                <div className={`w-full block lg:w-auto lg:flex lg:items-center lg:block ${first ? '' : 'hidden'}`} id='navbar'>
                    <div className="lg:flex-grow text-2xl text-center block space-x-5 ">
                        <a href="#" className='lg:inline-block hover:text-green-400 block mt-5'>Home</a>
                        <a href="#" className='lg:inline-block hover:text-green-400 block mt-5'>Blog</a>
                        <a href="#" className='lg:inline-block hover:text-green-400 block mt-5 mb-3 '>About</a>
                        {
                            token?.username ? <a href="#" className='lg:inline-block hover:text-green-400 block mt-5 mb-3 '>{token.username}</a> : <a href="#" className='
                            lg:inline-block
                            hover:text-green-400
                            border rounded border-white
                            hover:border-transparent
                            hover:border-white
                            block
                            mt-5
                            p-2
                            '>Login / sign up</a>
                        }

                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;