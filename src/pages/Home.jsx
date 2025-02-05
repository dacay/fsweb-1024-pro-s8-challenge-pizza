import { Link } from "react-router-dom";

import "./Home.css";

import Logo from "../assets/logo.svg";

export default function Home() {

    return <div className="home">
        <header>
            <img src={Logo} />
        </header>
        <main>
            <p>
                KOD ACIKTIRIR<br/>
                PİZZA, DOYURUR
            </p>
            <Link className="button" to="/order">ACIKTIM</Link>
        </main>
    </div>;
}