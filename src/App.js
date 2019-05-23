import React from 'react';
import { Provider } from 'react-redux'
import { store, Counter } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
