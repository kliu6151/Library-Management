import react, {Component} from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() { 
        return (
            <div>
                <footer className="footer">
                    <div className="text-center bg-dark align-items-end fixed-bottom h-20">
                        <span className="text-muted">Copyright © 2022</span>
                    </div>
                </footer>
            </div>
        );
    }
}
 
export default FooterComponent;