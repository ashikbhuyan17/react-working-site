import React, { useState } from 'react';

const PostTodo = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
    })
    console.log("............", data)
    const [optionsState, setOptionsState] = useState("")
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const handleSubmit = () => {
        let newData = { ...data }
        newData.status = optionsState
        console.log("new data", newData);
    }
    return (
        <main className='flex justify-center items-start h-screen bg-gray-100'>

            <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
                <form>
                    <div className="title mb-4">
                        <label htmlFor="title" className='text-gray-500 font-semibold'>Title</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='title'
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className="description mb-4">
                        <label htmlFor="description" className='text-gray-500 font-semibold'>Description</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='description'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="status mb-4">
                        <label htmlFor="description" className='text-gray-500 font-semibold'>Status</label>
                        {/* <input type="text" className='w-full lg:w-2/4 lg:block bg-gray-50 py-2 text-gray-500 px-1 outline-none' /> */}
                        <select name="" id="" className='w-full  bg-gray-50 p-2 text-gray-500 outline-none'
                            onChange={(e) => setOptionsState(e.target.value)}
                        >
                            <option value="0" >Select status:</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="submit">
                        <button type='button' className='w-full bg-blue-600 p-1 text-white font-semibold hover:bg-blue-500'
                            onClick={handleSubmit}
                        >Submit</button>
                    </div>

                </form>
            </div>

        </main>
    );
};

export default PostTodo;