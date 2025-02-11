import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";

import "./Header.css";

export default function Header() {

    return <header className="header">
        <Link to="/"><img src={Logo} /></Link>
    </header>;
}