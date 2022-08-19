import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { sum } from '../lib/requestData'
import postData from '../lib/requestData'
import { toast } from "react-toastify";


const SignIn = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const data = {
            username: username,
            password: password
        }
        console.log(data);
        const url = 'http://localhost:5000/user/login'
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        // const res = postData(url, data)
        // console.log(".........", res)
        // axios.post(url, data)
        //     .then(data => {
        //         console.log(data);
        //         const newData = data.data
        //         if (newData.error) {
        //             toast.error(`${newData.error}`, {
        //                 position: "top-right",
        //                 autoClose: 2000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //             });
        //         }
        //         else {
        //             console.log("token", newData.access_token)
        //             toast.success(`${newData.message}`, {
        //                 position: "top-right",
        //                 autoClose: 2000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //             });
        //             localStorage.setItem("token", newData.access_token)
        //             setTimeout(() => {
        //                 navigate('/getTodo')
        //             }, 3000);
        //         }
        //     })

        fetch(url, requestOption)
            .then(response => response.json())
            .then(data => {
                console.log("...................", data)
                if (data.error) {
                    // alert(data.err)
                    toast.error(`${data.error}`, {
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
                    console.log("token", data.access_token)
                    toast.success(`${data.message}`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    localStorage.setItem("token", data.access_token)
                    setTimeout(() => {
                        navigate('/getTodo')
                    }, 3000);
                }
            })

    }

    useEffect(() => {
        // postData()
        console.log(sum(10, 20))
    }, [])

    // const postData = async (data, url) => {
    //     const requestOption = {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     }
    //     const response = axios.post(url, requestOption)
    //     return response
    //     // response.then(res => console.log(res))
    //     // response.catch(err => console.log("data not found"))

    //     /* 
    //     const response = axios.get(url)
    //     response.then(res => console.log(res))
    //     response.catch(err => console.log("data not found"))
    //     or
    //     axios.get(url)
    //     .then(res => console.log(res))
    //     */

    // }
    return (
        <main className='flex justify-center items-start h-screen bg-gray-100'>

            <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
                <form>
                    <div className=" mb-4">
                        <label htmlFor="username" className='text-gray-500 font-semibold'>Username</label>
                        <input type="username" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='username'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="password mb-4">
                        <label htmlFor="password" className='text-gray-500 font-semibold'>Password</label>
                        <input type="password" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>


                    <div className="submit">
                        <button type='button' className='w-full bg-blue-600 p-1 text-white font-semibold hover:bg-blue-500'
                            onClick={handleSubmit}
                        >Sign In</button>
                    </div>

                </form>
            </div>

        </main>
    );
};

export default SignIn;