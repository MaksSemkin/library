import React from "react"
import './index.css'

const BookList = (props)=> {
    const bookList = props.bookList;
    
    const removeBook = (e)=> {
        props.deleteBook(e.target.id)
    }
    
    
    
    let list = bookList.map((book) => {
        return( <li key = {book.id} > <span>{book.title}</span> <span>{book.author}</span> <button className='removeBtn' id = {book.id}onClick = {removeBook}>X</button></li>)
    })
return (

    <ul className="wrap">
        <div className='title'>
        <h2>Название книги</h2>
        <h2>Автор</h2>
        </div>
        
        {list}
    </ul>
)

}

export default BookList