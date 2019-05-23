import { deletePerCheckbox, actionAddBook } from '../actions/actions';

export const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return { ...state, book: actionAddBook(action, state) }
        case 'DECREMENT':
            return { ...state, book: deletePerCheckbox(state) }
        case 'CHECK':
            return { ...state, book: action.book }
        default:
            return state
    }
}

