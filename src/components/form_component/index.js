import React from "react";
import {useState} from 'react'
import './index.css'
function BookForm (props) {



const [labelBook,setLabelBook] = useState('')
const [valueAuthor,setValueAuthor] = useState('')


const  bookText= (e)=> {
    
    setLabelBook(e.target.value)
    
}

const authorText =(e)=> {
    setValueAuthor(e.target.value)
    
}

const  createBook = (e)=> {
 e.preventDefault()
 let book = {title:labelBook,author:valueAuthor}
 if(book.title ==='' || book.author===''){
     alert('Заполните все поля')
 } else {
 props.addBook(book)
 setLabelBook ('');
 setValueAuthor('')   
 }
 
}


return (
    <main className='mainForm'>
    <form onSubmit={createBook}>
    <label>
    <input placeholder='Введите название книги'
    value = {labelBook}
    onChange={bookText}
    ></input>
    
   
    <input placeholder='Введите автора книги'
    onChange={authorText}
    value = {valueAuthor}
    ></input>
    </label>
    <button> Добавить книгу</button>
  </form>
  </main>
)

}

export default BookForm