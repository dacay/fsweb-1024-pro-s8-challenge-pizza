import Logo from "../assets/logo.svg";

import "./OrderStatus.css";

export default function OrderStatus() {
    return <div className="status">
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