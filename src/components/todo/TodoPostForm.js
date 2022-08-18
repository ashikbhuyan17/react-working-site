import React from 'react';

const TodoPostForm = () => {
    return (
        <main className='flex justify-center items-start h-screen bg-gray-100'>

            <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
                <form action="">
                    <div className="title mb-4">
                        <label htmlFor="title" className='text-gray-500 font-semibold'>Title</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none' />
                    </div>
                    <div className="description mb-4">
                        <label htmlFor="description" className='text-gray-500 font-semibold'>Description</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none' />
                    </div>
                    <div className="status mb-4">
                        <label htmlFor="description" className='text-gray-500 font-semibold'>Status</label>
                        {/* <input type="text" className='w-full lg:w-2/4 lg:block bg-gray-50 py-2 text-gray-500 px-1 outline-none' /> */}
                        <select name="" id="" className='w-full  bg-gray-50 p-2 text-gray-500 outline-none'>
                            <option value="0" >Select status:</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="submit">
                        <button type='submit' className='w-full bg-blue-600 p-1 text-white font-semibold hover:bg-blue-500' >Submit</button>
                    </div>

                </form>
            </div>

        </main>
    );
};

export default TodoPostForm;