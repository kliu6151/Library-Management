import { Link } from 'react-router-dom';

function HeaderComponent() {
    return ( 
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <Link to="/" className="navbar-brand">Library Management</Link>
                    <Link to="/books" className="navbar-brand">Book List</Link>
                    <Link to="/add-book/:id" className="navbar-brand">Add Book</Link>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={fetch}>Search</button>
                    </form>
                </nav>
            </header>

        </div> 
        );
}
// class HeaderComponent extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             books: []
//         }
//     }

//     // fetchBooks() {
//     //     fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCljUqFtfpapoZazIwmCjOzTIyTUf2Xv2Q`)
//     //         .then(response => response.json())
//     //         .then(result => {
//     //         this.setState({ books: result.items})
//     //     })
//     // }

    
//     render() { 
//         return ( 
//         <div>
//             <header>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
//                     <Link to="/" className="navbar-brand">Library Management</Link>
//                     <Link to="/books" className="navbar-brand">Book List</Link>
//                     <Link to="/add-book" className="navbar-brand">Add Book</Link>
//                     <form class="form-inline">
//                         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={fetch}>Search</button>
//                     </form>
//                 </nav>
//             </header>

//         </div> 
//         );
//     }
// }
 
export default HeaderComponent;