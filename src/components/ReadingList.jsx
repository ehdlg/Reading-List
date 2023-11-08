/* eslint-disable react/prop-types */
import '../stylesheets/ReadingList.css';

function ReadingList({ readingList, removeBook }) {
  return (
    <aside className='reading-list'>
      <h2>Lista de lectura</h2>
      {readingList.length === 0 ? (
        <h3>No hay libros en la lista de lectura</h3>
      ) : (
        <>
          <h4>{`${readingList.length} ${
            readingList.length === 1 ? 'libro' : 'libros'
          } en la lista de lectura`}</h4>
          <div className='reading-list-books'>
            {readingList.map((book) => (
              <div
                className='reading-book-card show'
                tabIndex={0}
                key={book.ISBN}
              >
                <div
                  className='remove-book'
                  tabIndex={0}
                  onClick={() => removeBook(book.ISBN)}
                >
                  X
                </div>
                <img
                  className='book-list-img'
                  src={book.cover}
                  alt={`Book cover for the title: ${book.title}`}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </aside>
  );
}

export default ReadingList;
