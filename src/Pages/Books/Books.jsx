import React, { useContext } from 'react';
import { BookContext } from '../../components/context/BookProvider';

const Books = () => {
    const { handleMarkAsRead } = useContext(BookContext);
    return (
        <div>
            books
        </div>
    );
};

export default Books;