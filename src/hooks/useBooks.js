import { useEffect, useState } from "react"
import booksData from '../fakeData/booksData.json';

const useBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        setBooks(booksData);
    }, [])

    return [books, setBooks];
}

export default useBooks;