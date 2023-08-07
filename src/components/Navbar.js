import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="controls">
                <Link to='/'>
                        <div className="control" data-id="blogs">
                                <i className="far fa-newspaper"></i>
                        </div>      
                </Link>
                <Link to='/blogs'>
                        <div className="control" data-id="blogs">
                                <i className="far fa-newspaper"></i>
                        </div>      
                </Link>
                <Link to='/login'>
                        <div className="control" data-id="blogs">
                                <i className="far fa-newspaper"></i>
                        </div>      
                </Link>
        </div>
        );
}

export default Navbar;