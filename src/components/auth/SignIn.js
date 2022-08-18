import React from 'react';

const SignIn = () => {

    return (
        <main className='flex justify-center items-start h-screen bg-gray-100'>

            <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
                <form>
                    <div className="email mb-4">
                        <label htmlFor="email" className='text-gray-500 font-semibold'>Email</label>
                        <input type="email" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='email'
                            // onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className="password mb-4">
                        <label htmlFor="password" className='text-gray-500 font-semibold'>Password</label>
                        <input type="password" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='password'
                            // onChange={handleChange}
                        />
                    </div>
                  

                    <div className="submit">
                        <button type='button' className='w-full bg-blue-600 p-1 text-white font-semibold hover:bg-blue-500'
                            // onClick={handleSubmit}
                        >Sign In</button>
                    </div>

                </form>
            </div>

        </main>
    );
};

export default SignIn;