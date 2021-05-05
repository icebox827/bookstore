import React from 'react';
import BookList from '../containers/BookList';
import BooKForm from '../containers/BookForm';
import NavBar from './NavBar';
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BookList />
      <BooKForm />
    </div>
  );
}

export default App;
