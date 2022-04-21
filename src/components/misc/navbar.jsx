import { Link } from "react-router-dom";

const Navbar = (props) => {
    const user = localStorage.getItem("user");

    return (
        <nav className="navbar navbar-expand-sm bg-primary p-2">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto">
                    <Link className="nav-link text-light navbar-brand m-0" to="/">
                        Home
                    </Link>
                </ul>
                <ul className="navbar-nav">
                    {user && (
                        <>
                            <p className="nav-link text-light navbar-brand m-0" href="#">
                                Welcome {user}!
                            </p>
                        </>
                    )}
                    {!user && (
                        <Link className="nav-link text-light" to="/users">
                            Register/Login
                        </Link>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
