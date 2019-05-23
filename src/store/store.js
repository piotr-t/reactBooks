
import { ConcatContainer } from '../components/concatContainer';
import { connect } from 'react-redux';
import { reducer } from '../reducers/reducer';
import { createStore } from 'redux'

export const store = createStore(reducer, { id: 0, book: [] });


const mapStateToProps = (state) => {
    return { id: state.id, book: state.book };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (val) => dispatch({ type: 'INCREMENT', book: val }),
        Check: (val) => dispatch({ type: 'CHECK', book: val }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
};


export const Counter = connect(mapStateToProps, mapDispatchToProps)(ConcatContainer);