import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios'
const Article = () => {
    const [title, setTitle] = useState("")
    const [article, setArticle] = useState("")
    const [filename, setFilename] = useState("")

    const onChangeFile = (e) => {
        setFilename(e.target.files[0])
    }

    const handleSubmit = () => {
        let formData = new FormData();
        formData.append("title", title)
        formData.append("article", article)
        formData.append("articleImage", filename)

        const url = 'http://localhost:5000/article'

        axios.post(url, formData)
            .then(res => {
                console.log("res", res.data)
                console.log("res", res.data.message)
                toast.success(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            })
            .catch(err => console.log(err))
        // const requestOption = {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // }

        // fetch(url, requestOption)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("...................", data)
        //         console.log("...................", data.message)

        //         if (data.error) {
        //             toast.error(`${data.error}`, {
        //                 position: "top-right",
        //                 autoClose: 2000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //             });
        //         } else {
        //             // alert(data.message)
        //             toast.success(`${data.message}`, {
        //                 position: "top-right",
        //                 autoClose: 2000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //             });

        //         }
        //     })

    }
    return (
        <main className='flex justify-center items-start h-screen bg-gray-100'>

            <div className='bg-white w-6/12 lg:w-4/12 p-6 rounded shadow-sm mt-36'>
                <form encType='multipart/form-data'>
                    <div className=" mb-4">
                        <label htmlFor="title" className='text-gray-500 font-semibold'>Title</label>
                        <input type="title" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            name='title'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="article" className='text-gray-500 font-semibold'>Article</label>
                        <input type="text" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            value={article}
                            onChange={e => setArticle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="articleImage" className='text-gray-500 font-semibold'>Image</label>
                        <input type="file" filename="articleImage" className='w-full  bg-gray-50 py-2 text-gray-500 px-1 outline-none'
                            onChange={onChangeFile}
                        />
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

export default Article;