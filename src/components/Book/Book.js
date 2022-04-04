import React from 'react';

const Book = ({ book }) => {
    const { name, author, image, rating, review } = book
    return (
        <article class="product-item">
            <div class="product-img">
                <img src={image} alt="" />
            </div>
            <h1 title={name}>{name.slice(0, 15) + '...'}</h1>
            <h2>Author : {author}</h2>
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
            <p>{review}</p>
        </article>
    );
};

export default Book;