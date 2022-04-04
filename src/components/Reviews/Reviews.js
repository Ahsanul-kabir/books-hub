import React from 'react';
import useBooks from '../../hooks/useBooks';
import Book from '../Book/Book';

const Reviews = () => {
    const [books, setBooks] = useBooks([]);

    return (
        <section id="books-container">
            <h1>What Customers Says</h1>
            <div className="books-collections mb-4">
                {
                    books.map((book, index) => <Book key={book.index} book={book} />)
                }
            </div>
        </section>
    );
};

export default Reviews;