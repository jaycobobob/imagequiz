import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

const Login = (props) => {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        console.log(`submit using ${email}, ${password}`);
        localStorage.setItem("user", email);
        setRedirect("/");
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }
    return (
        <div className="px-5">
            <h3 className="pb-2">Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <Link to="/users" onClick={() => props.setMode(0)}>
                Don't have an account? Create one here.
            </Link>
        </div>
    );
};

export default Login;
