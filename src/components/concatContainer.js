import '../App.css';
import React from 'react';
import { BookList } from './bookList'


export class ConcatContainer extends React.Component {

  myRef = React.createRef()


  render() {

    const { onDecrement, onIncrement, book, Check } = this.props;


    //
    const getInputVal = (val) => {
      const bookName = { name: val.target.value };
      this.setState({ book: bookName })
    }


    const addBook = () => {
      if (this.state !== null && this.myRef.current.value !== "") {
        onIncrement(this.state.book);
      }

      this.myRef.current.value = "";

    }

    return (
      <div class="wrapper">
        <input class="inp1" type="text" onChange={getInputVal} placeholder="wprowadź książkę" ref={this.myRef}></input>
        <BookList book={book} Check={Check} />
        <button class="btn" onClick={addBook}>dodaj książkę</button>
        <button onClick={onDecrement}>odejmij książkę</button>
      </div>
    );
  }
}