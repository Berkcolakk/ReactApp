import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser, faBoxesStacked, faUser,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const LoggedOutView = props => {
    debugger;
    if (!props.currentUser) {
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to='/login' className="nav-link"><FontAwesomeIcon icon={faUser} /></Link>
                </li>
            </ul>
        );
    }
    return null;
};

const LoggedInView = props => {
    if (props.currentUser) {
        return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <button className=' btn-sm btn btn-secondary'><FontAwesomeIcon icon={faRightFromBracket} /></button>
                    {/* <Link className="nav-link">Logout</Link> */}
                </li>
            </ul>
        );
    }

    return null;
};

class Navbar extends Component {
    btnSearch = () => {
        alert("Arama koyulacak ama şu an beklemede.")
    }
    searchInputOnChange = () => {

    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <Link to='/' className="navbar-brand"><FontAwesomeIcon icon={faReact} />{this.props.appName}</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        {/* Left menu bar */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/stock' className="nav-link"><FontAwesomeIcon icon={faBoxesStacked} /></Link>
                            </li>
                        </ul>
                        <div className="d-flex" >
                            {/* Right menu bar */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <LoggedOutView currentUser={this.props.currentUser} />
                                <LoggedInView currentUser={this.props.currentUser} />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;