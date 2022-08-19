import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    let navigate = useNavigate();
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        const data = {
            name: name,
            username: username,
            password: password
        }
        console.log(data)
        const url = 'http://localhost:5000/user/signup'
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        fetch(url, requestOption)
            .then(response => response.json())
            .then(data => {
                console.log("...................", data.err)
                if (data.err) {
                    // alert(data.err)
                    toast.error(`${data.err}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    // alert(data.message)
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                }
            })
        // const res = postData(data, url)
        // res.then(res => console.log(res))
        // res.catch(err => console.log("data not found"))
    }
    return (
        <main className='flex justify-center items-start h-screen bg-gray-100'>

            <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className='text-gray-500 font-semibold'>Full Name</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            placeholder='Enter Your Name'
                            onChange={handleName}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className='text-gray-500 font-semibold'>Username</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            placeholder='Enter Your Username'
                            onChange={handleUsername}

                        />
                    </div>
                    <div className="password mb-4">
                        <label htmlFor="password" className='text-gray-500 font-semibold'>Password</label>
                        <input type="password" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            onChange={handlePassword}

                        />
                    </div>


                    <div className="submit">
                        <button type='button' className='w-full bg-blue-600 p-1 text-white font-semibold hover:bg-blue-500'
                            onClick={handleSubmit}
                        >Sign Up</button>
                    </div>

                </form>
            </div>
        </main>
    )
}
export default SignUp;
