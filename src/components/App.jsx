import { useLocalStorage } from '../hooks/useLocalStorage';
import '../App.css';
import booksData from '../data/books.json';
import Books from './Books';
import ReadingList from './ReadingList';

const INITIAL_BOOKS = booksData.library
  .map((book) => book.book)
  .sort((a, b) => a.title > b.title);

function App() {
  const books = INITIAL_BOOKS;
  const [readingList, setReadingList] = useLocalStorage('reading-list', []);

  const availableBooks = books.filter(
    (book) => !readingList.some((readingBook) => book.ISBN === readingBook.ISBN)
  );

  const addBookToReading = (isbn) => {
    const bookToAdd = books.find((book) => book.ISBN === isbn);
    const newReadingList = [...readingList, bookToAdd];

    setReadingList(newReadingList);
  };

  const removeBookFromReading = (isbn) => {
    const newReadingList = readingList.filter((book) => book.ISBN !== isbn);
    setReadingList(newReadingList);
  };

  return (
    <main>
      <Books
        books={availableBooks}
        readingList={readingList}
        handleBookClick={addBookToReading}
      />
      <ReadingList
        readingList={readingList}
        removeBook={removeBookFromReading}
      />
    </main>
  );
}

export default App;
