import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import ProductHistory from '../components/ProductHistory';
import styles from '../styles/Summary.module.css';
import img from '../assets/ps5.jpg';

export default function Summary() {
    const deliveryAddress = {
        fullName: 'Jan Kowalski',
        street: 'Warszawska 123',
        postalCode: '51-555',
        city: 'Wrocław',
        phone: '123 456 789',
        email: 'jan.kowalski@email.com'
    };

    const orderItems = [
        {
            id: 1,
            image: img,
            alt: 'ps5',
            product_name: 'PlayStation 5 Pro',
            price: 1999.99
        },
        {
            id: 2,
            image: img,
            alt: 'ps5',
            product_name: 'PlayStation 5 Pro',
            price: 1999.99
        }
    ];

    const calculateTotal = () => {
        return orderItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    const handleCheckout = () => {
        console.log('Processing payment...');
    };

    return (
        <div className={styles.pageContainer}>
            <NavBar page_header="Podsumowanie" />

            <main className={styles.container}>
                <div className={styles.mainContent}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Adres dostawy</h2>

                        <ul className={styles.addressList}>
                            <li>
                                <span className={styles.addressLabel}>Imię i nazwisko:</span>
                                <span className={styles.addressValue}>{deliveryAddress.fullName}</span>
                            </li>
                            <li>
                                <span className={styles.addressLabel}>Adres:</span>
                                <span className={styles.addressValue}>{deliveryAddress.street}</span>
                            </li>
                            <li>
                                <span className={styles.addressLabel}>Miasto:</span>
                                <span className={styles.addressValue}>
                                    {deliveryAddress.postalCode}, {deliveryAddress.city}
                                </span>
                            </li>
                            <li>
                                <span className={styles.addressLabel}>Telefon:</span>
                                <span className={styles.addressValue}>{deliveryAddress.phone}</span>
                            </li>
                            <li>
                                <span className={styles.addressLabel}>E-mail:</span>
                                <span className={styles.addressValue}>{deliveryAddress.email}</span>
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Produkty</h2>

                        <div className={styles.productsList}>
                            {orderItems.map((item) => (
                                <ProductHistory
                                    key={item.id}
                                    image={item.image}
                                    alt={item.alt}
                                    product_name={item.product_name}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.totalSection}>
                        <div className={styles.totalRow}>
                            <p className={styles.totalLabel}>Do zapłaty</p>
                            <p className={styles.totalPrice}>{calculateTotal()} zł</p>
                        </div>
                    </div>

                    <Button
                        placeholder="Kupuję i płacę"
                        onClick={handleCheckout}
                    />
                </aside>
            </main>
        </div>
    );
}
