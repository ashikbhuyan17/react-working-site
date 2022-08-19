import React from 'react';
import './GetTodo.css'
const GetTodo = () => {
    return (
        // <main className='flex justify-center items-start h-screen bg-gray-100'>

        //     <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
        //         <table class=" ">
        //             <thead className='border bottom-5 stroke-yellow-500 '>
        //                 <tr>
        //                     <th className='px-100'>State</th>
        //                     <th>City</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td class=" ">Indiana</td>
        //                     <td class=" ">Indianapolis</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </main>
        <div className="table">
            <div className="table_header">
                <p className='text font-semibold text-3xl '>Todo List</p>
                <div>
                    <input type="text" placeholder='search..........' className='input' />
                    <button className='add_new'>+ Add new</button>
                </div>
            </div>
            <main className='flex justify-center items-start h-screen bg-gray-100'>

                <div className='bg-white w-5/6lg:w-4/12 p-6 rounded shadow-sm mt-12'>
                    <div className="table_section">
                        <table>
                            <thead>
                                <tr>
                                    <th>$ No.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>this is title</td>
                                    <td>Lorem ipsum dolor sit amet consectetur</td>
                                    <td>Active</td>
                                    <td>
                                        <button className='edit'>Edit</button>
                                        <button className='delete'>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pagination">
                        <button className='pagination-button'>Previous</button>
                        <button className='pagination-button'>1</button>
                        <button className='pagination-button'>Next</button>

                    </div>
                </div>
            </main>

        </div>
    );
};

export default GetTodo;