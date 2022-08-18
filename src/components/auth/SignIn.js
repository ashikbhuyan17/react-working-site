import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { sum } from '../lib/requestData'
import postData from '../lib/requestData'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const data = {
            email: email,
            password: password
        }
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const res = postData(data, url)
        res.then(res => console.log(res))
        res.catch(err => console.log("data not found"))
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
                    <div className="email mb-4">
                        <label htmlFor="email" className='text-gray-500 font-semibold'>Email</label>
                        <input type="email" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password mb-4">
                        <label htmlFor="password" className='text-gray-500 font-semibold'>Password</label>
                        <input type="password" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='password'
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