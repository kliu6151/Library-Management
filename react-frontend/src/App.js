import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookComponent from './components/ListBookComponent';
import SearchComponent from './components/SearchComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateBookComponent from './components/CreateBookComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path = "/" exact element = {<ListBookComponent />} />
            <Route path = "/books" exact element = {<ListBookComponent />} />
            <Route path = "/search" exact element = {<SearchComponent />} />
            <Route path = "/add-book/:id" exact element = {<CreateBookComponent />} />
          
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
