import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';
import { useNavigate } from "react-router-dom";


function ListBookComponent() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BookService.getBooks().then(res => {
            setBooks(res.data);
        }).catch(err => {
            console.log(err);
        }
        );
    });

    const addBook = (e) => {
        e.preventDefault();
        navigate('/add-book/_add');
    }

    // const deleteBook = (id) => {
    //     BookService.deleteBook(id).then(res => {
    //         setBooks(books.filter(book => book.id !== id));
    //     }).catch(err => {
    //         console.log(err);
    //     }
    //     );
    // }
    
    const editBook = (e, id) => {
        e.preventDefault();
        navigate(`/add-book/${id}`);
    }
    
    const deleteBook = (e, id) => {
        e.preventDefault();
        BookService.deleteBook(id).then(res => {
            setBooks(books.filter(book => book.id !== id));
        }).catch(err => {
            console.log(err);
        }
        );
    }

    
    return(
        <div>
        <h1 className="text-center">List of Books</h1>
        <div className = "row">
                <button className="btn btn-primary" onClick={e => addBook(e)}> Add Book</button>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book =>
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                        <td>
                            <button className="btn btn-info" onClick={e => editBook(e,book.id)}>Edit</button>
                            <button className="btn btn-danger" onClick ={e => deleteBook(e,book.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    )

}
// class ListBookComponent extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         books: []
    //     }
    // }
    
    // componentDidMount() {
    //     BookService.getBooks().then(res => this.setState({
    //         books: res.data
    //     }));
    // }

    // addBook = () => {
    //     this.props.navigate('/add-book');
    // }


    // render() { 
    //     return (
        // <div>
        //     <h1 className="text-center">List of Books</h1>
        //     <div className = "row">
        //             <button className="btn btn-primary" onClick={this.addBook}> Add Book</button>
        //     </div>
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th>Title</th>
        //                 <th>Author</th>
        //                 <th>Description</th>
        //                 <th>Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {this.state.books.map(book =>
        //                 <tr key={book.id}>
        //                     <td>{book.title}</td>
        //                     <td>{book.author}</td>
        //                     <td>{book.description}</td>
        //                     <td>
        //                         <button className="btn btn-warning">Edit</button>
        //                         <button className="btn btn-danger">Delete</button>
        //                     </td>
        //                 </tr>
        //             )}
        //         </tbody>
        //     </table>
        // </div>
    //     );
    // }
// }


 
export default ListBookComponent;