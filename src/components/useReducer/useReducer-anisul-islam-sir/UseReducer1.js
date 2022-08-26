import React, { useState } from 'react';

const bookData = [
    { id: 1, name: "patha pancal" },
    { id: 2, name: "java" },
    { id: 3, name: "c/c++" },
    { id: 4, name: "javascript" },

]
const Modal = ({ modalText }) => {
    return <p>{modalText}</p>
}
const UseReducer1 = () => {
    const [books, setBooks] = useState(bookData)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState("")
    const [bookName, setBookName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        // alert(bookName)
        setBooks((prevState) => {
            console.log("prevState", prevState);
            const newBook = { id: new Date().getTime().toString(), name: bookName }
            return [...prevState, newBook]
        })
        setIsModalOpen(true)
        setModalText("Book is added")
    }
    return (
        <div>
            <h3>Book list</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    style={{ border: "1px solid black", marginRight: "15px" }}
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                />
                <button style={{ border: "1px solid black" }} type='submit'>Add Book</button>
            </form>
            {isModalOpen && <Modal modalText={modalText} />}
            {
                // books.map(book => (
                //     <div>
                //         <li>{book.name}</li>
                //     </div>
                // ))
                books.map(book => {
                    const { id, name } = book
                    return <div key={id}><li>{name}</li></div>
                })
            }
        </div>
    );
};

export default UseReducer1;