/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../stylesheets/Books.css';
import Filters from './Filters';

const INITIAL_FILTERS = {
  genre: 'all',
  minPages: 0,
  search: ''
};

function Books({ books, handleBookClick }) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const handleFilters = (e, filterName) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, [filterName]: e.target.value };
    });
  };

  const filteredBooks = books.filter((book) => {
    return (
      book.pages >= filters.minPages &&
      (filters.genre === 'all' || book.genre === filters.genre) &&
      (filters.search === '' ||
        book.title
          .toLocaleLowerCase()
          .indexOf(filters.search.toLocaleLowerCase()) !== -1)
    );
  });

  return (
    <section className='available-books'>
      {books.length > 0 ? (
        <h1>{books.length} libros disponibles</h1>
      ) : (
        <h1>No hay libros disponibles</h1>
      )}

      {filteredBooks.length > 0 ? (
        <h2>{`${filteredBooks.length} ${
          filteredBooks.length === 1 ? 'libro' : 'libros'
        } con los filtros actuales`}</h2>
      ) : (
        <h2>Ningún libro disponible con los filtros actuales</h2>
      )}

      <Filters filters={filters} handleFilters={handleFilters} />

      <div className='book-list'>
        {filteredBooks &&
          filteredBooks.map((book) => {
            return (
              <div
                className='book-card'
                key={book.ISBN}
                onClick={() => handleBookClick(book.ISBN)}
              >
                <img
                  className='book-list-img'
                  src={book.cover}
                  alt={`Book cover for the title: ${book.title}`}
                />
                <p className='book-title'>{book.title}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Books;
