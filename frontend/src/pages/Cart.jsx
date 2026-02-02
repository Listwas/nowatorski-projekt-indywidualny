import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import Button from '../components/Button';
import styles from '../styles/Cart.module.css';
import img from '../assets/ps5.jpg';

export default function Cart() {
    const [cartItems] = useState([
        {
            id: 1,
            image: img,
            alt: 'ps5 photo',
            product_name: 'PlayStation 5 Pro',
            product_price: 1999.99,
            product_quantity: 10,
            selectedQuantity: 1
        },
        {
            id: 2,
            image: img,
            alt: 'ps5 photo',
            product_name: 'PlayStation 5 Pro',
            product_price: 1999.99,
            product_quantity: 10,
            selectedQuantity: 2
        },
        {
            id: 3,
            image: img,
            alt: 'ps5 photo',
            product_name: 'PlayStation 5 Pro',
            product_price: 1999.99,
            product_quantity: 10,
            selectedQuantity: 1
        }
    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.product_price * item.selectedQuantity);
        }, 0).toFixed(2);
    };

    return (
        <div className={styles.pageContainer}>
            <NavBar page_header="Koszyk" />

            <main className={styles.container}>
                <div className={styles.mainContent}>
                    <section className={styles.productsSection}>
                        <h2 className={styles.sectionTitle}>Twoje produkty</h2>

                        <div className={styles.productsList}>
                            {cartItems.map((item) => (
                                <ProductList
                                    key={item.id}
                                    image={item.image}
                                    alt={item.alt}
                                    product_name={item.product_name}
                                    product_price={item.product_price}
                                    product_quantity={item.product_quantity}
                                    showDropdown={true}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.summary}>
                        <div className={styles.totalRow}>
                            <p className={styles.totalLabel}>Do zapłaty</p>
                            <p className={styles.totalPrice}>{calculateTotal()} zł</p>
                        </div>
                    </div>

                    <Link to="/delivery" className={styles.checkoutLink}>
                        <Button placeholder="Przejdź do dostawy" />
                    </Link>
                </aside>
            </main>
        </div>
    );
}
