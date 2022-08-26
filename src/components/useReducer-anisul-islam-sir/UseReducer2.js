import React, { useState, useReducer } from 'react';

const bookData = [
    { id: 1, name: "patha pancal" },
    { id: 2, name: "java" },
    { id: 3, name: "c/c++" },
    { id: 4, name: "javascript" },

]
const Modal = ({ modalText }) => {
    return <p>{modalText}</p>
}
const reducer = (state, action) => {
    // action.type,action.payload
    if (action.type == "ADD") {
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is added"
        }
    }
    if (action.type == "REMOVE") {
        const filterBook = [...state.books].filter(book => book.id !== action.payload)
        return {
            ...state,
            books: filterBook,
            isModalOpen: true,
            modalText: "Book is removed"
        }
    }
    return state
}
const UseReducer2 = () => {
    // const [books, setBooks] = useState(bookData)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [modalText, setModalText] = useState("")
    const initialState = {
        books: bookData,
        isModalOpen: false,
        modalText: ""
    }
    const [bookState, dispatch] = useReducer(reducer, {
        books: bookData,
        isModalOpen: false,
        modalText: ""
    })
    const [bookName, setBookName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const newBook = { id: new Date().getTime().toString(), name: bookName }
        dispatch({ type: "ADD", payload: newBook })
        setBookName("")
    }

    const handleRemove = (id) => {
        console.log(id);
        dispatch({ type: "REMOVE", payload: id })
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
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
            {
                bookState.books.map(book => {
                    const { id, name } = book
                    return <div key={id}><li>{name} <button style={{ border: "1px solid black", marginLeft: "15px" }} onClick={() => handleRemove(id)}>Remove</button></li> </div>
                })
            }
        </div>
    );
};

export default UseReducer2;