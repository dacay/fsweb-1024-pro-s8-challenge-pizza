import "./Home.css";

import Logo from "../assets/logo.svg";

export default function Home() {

    return <div className="home">
        <header>
            <img src={Logo} />
        </header>
        <main>
            <p>
                TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!
            </p>
        </main>
    </div>;
}