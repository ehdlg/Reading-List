import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import booksData from './data/books.json';

const INITIAL_BOOKS = booksData.library;
function App() {
  const [books, setBooks] = useState([INITIAL_BOOKS]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    localStorage.setItem('reading-list', JSON.stringify(readingList));
  }, [readingList]);

  useEffect(() => {
    const localReadingList = localStorage.getItem('reading-list');
    if(localReadingList){
      setReadingList(JSON.parse(localReadingList));
    }
  }, [])

  

  return (
    <main>
      <section className="available-books">
        {books.length > 0 ? 
        <h1>{books.length} libros disponibles</h1> : 
        <h1>No hay libros disponibles</h1>}
        
        {readingList.length > 0 && <h2>{readingList.length} libros en la lista de lectura</h2>}

        <div className="filters">
          <input type="range" name="pages" id="filter-pages" />
          <select name="genre" id="genre">
            <option value="">opcion1</option>
            <option value="">opcion2</option>
            <option value="">opcion3</option>
            <option value="">opcion4</option>
            <option value="">opcion5</option>
          </select>
        </div>
      </section>
      <aside className="reading-list">
        <h2>Lista de lectura</h2>
      </aside>
    </main>
  )
}

export default App
