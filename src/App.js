import {React,useState,useEffect} from 'react';
import './App.css';
import BookForm from './components/form_component';
import BookList from './components/bookList'
let idx = 100;

function App() {
  
  const[bookList,setBookList] = useState([
   
    {id:0,title: "Война и Мир",author: "Толстой"},
    {id:1,title: 'Капитанская дочка',author : 'Пушкин'},
    {id:2, title:'Совершеный код',author: 'Макконнелл'} 
  ]
  )

  useEffect(()=> {
    
    if(localStorage.length > 0){
     
      let arr = [];
      for(let i=0; i<localStorage.length; i++){
        idx++
        let title = localStorage.key(i);
        let author = localStorage.getItem(title);
        arr.push({id:idx,title:title, author:author})
        
      }
      
      setBookList([...arr])
    
  }else {
    localStorage.setItem('Война и мир','Толстой')
    localStorage.setItem('Капитанская дочка','Пушкин')
    localStorage.setItem('Совершеный код','Макконннелл')
  }
},[])


  
  const addBook = (book)=> {
    idx++
    let newBook = {id:idx,author:book.author,title:book.title}
    
    let author = book.author;
    let title = book.title;
    localStorage.setItem(title,author)
    setBookList([...bookList, newBook ])
  }

const deleteBook = (id)=> {
  let localStorageKey = bookList.find((book)=>book.id === +id).title
  localStorage.removeItem(localStorageKey)
  let newList = bookList.filter((book)=>book.id !== +id)
  
  setBookList([...newList])
}


  return (
  <main>
     <h1>Список книг</h1>
     <BookList
     bookList = {bookList}
     deleteBook = {deleteBook}
     >
     </BookList>
     
     <BookForm
          addBook = {addBook}
    ></BookForm>

</main>
  );
}

export default App;
