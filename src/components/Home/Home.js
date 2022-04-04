import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img from '../../images/book-library.jpg'
import useBooks from '../../hooks/useBooks';
import Book from '../Book/Book';


const Home = () => {
    const [books, setBooks] = useBooks([]);
    const bookShow3 = books.slice(0, 3);

    return (
        <>
            <section id="header-content">
                <div className="half-width">
                    <h1>Make Journey as Royal Learners</h1>
                    <p>You’ve got to start with the customer experience and work back toward the technology – not the other
                        way around.</p>
                    <Link to="" className="button">Take now <span className="arrow-icon"><i
                        className="fas fa-arrow-right"></i></span></Link>
                </div>
                <div className="half-width">
                    <img src={img} alt='' />
                </div>
            </section>
            {/* header */}

            <section id="books-container">
                <h1>What Customers Says</h1>
                <div className="books-collections mb-2">
                    {
                        bookShow3.map((book, index) => <Book key={book.index} book={book} />)
                    }
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <Link to="/review" className="button">Show All Reviews <span className="arrow-icon"><i
                        className="fas fa-arrow-right"></i></span></Link>
                </div>
            </section>
        </>
    );
};

export default Home;