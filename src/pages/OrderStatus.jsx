import Header from "../components/Header";
import Container from "../components/Container";

import "./OrderStatus.css";

const pizzaBasePrice = 85.5;

export default function OrderStatus({ order }) {

    let ingredientsText = order.ingredients.length ? order.ingredients.join(", ") : "Yok";
    let unitPrice = pizzaBasePrice + order.ingredients.length * 5;
    let total = order.count * unitPrice;

    return <div className="status">
        <Header />
        <main>
            <p>
                TEBRİKLER!<br/>SİPARİŞİNİZ ALINDI!
            </p>
            <Container>
            <hr/>
            <p className="details">
                <h1>Position Absolute Acı Pizza</h1>
                <p>Boyut: <strong>{order.size}</strong></p>
                <p>Hamur: <strong>{order.dough}</strong></p>
                <p>Ek Malzemeler: <strong>{ingredientsText}</strong></p>
            </p>
            <p className="total">
                <h2>Sipariş Toplamı</h2>
                <p><span>Seçimler</span><span>{order.ingredients.length * 5}₺</span></p>
                <p><span>Toplam</span><span>{total}₺</span></p>
                <p>Sipariş Toplamı</p>
            </p>
            </Container>
        </main>
    </div>;
}