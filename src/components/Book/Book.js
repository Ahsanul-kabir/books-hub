import React from 'react';
import './Book.css'

const Book = ({ book }) => {
    const { name, bookName, image, rating, review } = book
    return (
        <article class="book-item">
            <div class="book-img">
                <img src={image} alt="" />
            </div>
            <h1 title={name}>{name.length > 10 ? name.slice(0, 10) + '...' : name}</h1>
            <p title={bookName}>Book Name: {bookName.length > 10 ? bookName.slice(0, 15) + '...' : bookName}</p>
            <div class="books-rating">
                <div class="stars">
                    <i class="icon-color fas fa-star"></i>
                    <i class="icon-color fas fa-star"></i>
                    <i class="icon-color fas fa-star"></i>
                    <i class="icon-color fas fa-star"></i>
                    <i class="icon-color fas fa-star-half-alt"></i>
                </div>
                <div class="rate-mark">{rating}</div>
            </div>
            <p>Opinion: {review}</p>
        </article>
    );
};

export default Book;