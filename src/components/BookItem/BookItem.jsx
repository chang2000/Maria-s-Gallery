import React from 'react'
import './BookItem.css'
const BookItem = ({ coverURL, name, author, comment }) => {
    const lines = comment.split('\n');

    // <div>
    //     {lines.map((line, i) => (
    //         <p key={i}>
    //             {line}
    //             <br />
    //         </p>
    //     ))}
    // </div>

    return (
        <div className='bookitem'>
            <img
                className='bookitem-cover'
                src={coverURL}
                alt=''
            />
            <div className="book-name">
                {name}
            </div>

            <div className="book-author">
                {author}
            </div>

            <div className="book-comment">
                {lines.map((line, i) => (
                    <div key={i}>
                        {line}
                        <br />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BookItem