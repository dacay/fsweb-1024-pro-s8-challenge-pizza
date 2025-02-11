import { Link } from "react-router-dom";

import Header from "../components/Header";

import "./Home.css";

export default function Home({ orderCount }) {

    return <div className="home">
        <Header />
        <main>
            <p>
                KOD ACIKTIRIR<br/>
                PİZZA, DOYURUR
            </p>
            <Link className="button" to="/order">ACIKTIM</Link>
            {orderCount > 0 && <p style={{ fontSize: "1.2rem" }}>
                Aktif Sipariş Sayısı: {orderCount}
            </p>}
        </main>
    </div>;
}