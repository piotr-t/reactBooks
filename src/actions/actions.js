const uuid = require('uuid/v4')

export const deletePerCheckbox = state => {
    const delBook = [...state.book];

    const sortPerCheck = () => {
        delBook.forEach((dB, id) => { if (dB.checked === true) { delBook.splice(id, 1); sortPerCheck() } });
    }
    sortPerCheck()
    return delBook;
}

export const actionAddBook = (action, state) => {
    const newObject = Object.assign({}, action.book);
    newObject.id = uuid();
    const sum = [...state.book];
    sum.push(newObject);
    return sum;
}