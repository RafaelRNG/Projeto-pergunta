import React from "react";
import { Link } from "react-router-dom";
import { GoFlame } from "react-icons/go";

import "./styles.css";

function Header() {
    return (
        <div className="header">
            <GoFlame className="flame" />
            <header>
                <Link to="/">RNG Responde</Link>
            </header>
        </div>
    )
}

export default Header;