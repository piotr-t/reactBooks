import '../App.css';
import React from 'react';



export const BookList = (props) => {



    const getCheckboxVal = (val1, id1) => {
        const book1 = props.book.slice();
        book1.forEach((b1) => {
            if (b1.id === id1) {
                b1.checked = val1.target.checked;
                props.Check(book1);
            }
        })
    }


    return props.book.map((book1, index) =>
        (<div class="record" className={index % 2 === 0 ? "color1" : "color2"} key={index}>
            <div class="inp inpWidth1">{index + 1}</div>
            <input class="inp inpWidth1" type="checkbox" checked={book1.checked} onClick={e => { getCheckboxVal(e, book1.id) }} />
            <div class="inp inpWidth">{book1.name}</div>
            <div class="inp">{book1.id}</div>
        </div>)
    )
}