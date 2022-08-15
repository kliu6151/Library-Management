import React, {useState} from "react";
import BookService from "../services/BookService";
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';



function CreateBookComponent() {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     if(id === '_add') {
    //         return
    //     }
    //     else {
    //         BookService.getBookById(id).then(res => {
    //             setTitle(res.data.title);
    //             setAuthor(res.data.author);
    //             setDescription(res.data.description);
    //         }).catch(err => {
    //             console.log(err);
    //         }
    //         );
    //     }
    // });

    const saveBookOrUpdate = (e) => {
        e.preventDefault();
        const book = {
            title: title,
            author: author,
            description: description
        };

        if(id === '_add') {
            BookService.createBook(book).then(res => {
                navigate("/");
            }).catch(err => {
                console.log(err);
            }
            );
        }
        else {
            BookService.updateBook(id, book).then(res => {
                navigate('/');
            }).catch(err => {
                console.log(err);
            }
            );
        }

        
    };

    const cancel = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const getTitle = (e) => {
        if(id === '_add') {
            return <h3 className="text-center">Create Book</h3>
        }
        else {
            return <h3 className="text-center">Update Book</h3>
        }
    }

    return (
        <div>
            {getTitle()}
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={saveBookOrUpdate}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Author</label>
                            <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <button className="btn btn-primary">Save</button>
                        <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
// class CreateBookComponent extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: "",
//             author: "",
//             description: ""
//         }
//         this.changeTitleHandler = this.changeTitleHandler.bind(this);
//         this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
//         this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
//         this.addBook = this.addBook.bind(this);

//     }

//     changeTitleHandler = (event) => {
//         this.setState({
//             title: event.target.value
//         });
//     }
//     changeAuthorHandler = (event) => {
//         this.setState({
//             author: event.target.value
//         });
//     }

//     changeDescriptionHandler = (event) => {
//         this.setState({
//             description: event.target.value
//         });
//     }

//     addBook = (event) => {
//         event.preventDefault();
//         const book = {
//             title: this.state.title,
//             author: this.state.author,
//             description: this.state.description
//         }
//         console.log('book => ' + JSON.stringify(book));
//         // BookService.createBook(book).then(res => { 
//         //     this.props.history.push('/books');
//         // }).catch(err => {
//         //     console.log(err);
//         // }
//     }

//     cancel = () => {
//         this.props.history.push('/books');
//     }
    


//     render() {
//         return (
//             <div>
//                 <h1>Create Book</h1>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <h3 className="text-center">Create Book</h3>
//                             <div className="card-body">
//                                 <form>
//                                     <div className="form-group">
//                                         <label>Title</label>
//                                         <input type="text" className="form-control" placeholder="Enter Title" 
//                                             value={this.state.title} onChange={this.changeTitleHandler} />
//                                     </div>

//                                     <div className="form-group">
//                                         <label>Author</label>
//                                         <input type="text" className="form-control" placeholder="Enter Author" 
//                                             value={this.state.author} onChange={this.changeAuthorHandler} />
//                                     </div>  

//                                     <div className="form-group">
//                                         <label>Description</label>
//                                         <input type="text" className="form-control" placeholder="Enter Description"
//                                             value={this.state.description} onChange={this.changeDescriptionHandler} />
//                                     </div> 

//                                         <button className="btn btn-primary" onSubmit={this.addBook}>Submit</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }



export default CreateBookComponent;