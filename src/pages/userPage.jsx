import components from "../components/components";
import React, { useState } from "react";

const LoginPage = (props) => {
    let [mode, setMode] = useState(1);

    return (
        <div>
            <components.misc.Navbar />
            <div className="p-4">
                {mode ? (
                    <components.users.Login setMode={setMode} />
                ) : (
                    <components.users.Register setMode={setMode} />
                )}
            </div>
        </div>
    );
};

export default LoginPage;
