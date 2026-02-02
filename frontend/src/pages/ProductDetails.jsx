import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import styles from '../styles/ProductDetails.module.css';
import ps5Image from '../assets/ps5.jpg';

export default function ProductDetails() {
    const { id } = useParams();

    const mockProduct = {
        id: id,
        name: 'Super Awesome PlayStation 5',
        price: 1999.99,
        image: ps5Image,
        specifications: [
            { label: 'Typ produktu', value: 'PlayStation 5 Pro' },
            { label: 'Dysk', value: '2TB SSD' },
            { label: 'Gry', value: 'ASTRO Playroom' },
            {
                label: 'W zestawie',
                value: 'Pad bezprzewodowy DualSense, Kabel USB, Kabel zasilający, Kabel HDMI, Dwie stopki podstawy poziomej'
            }
        ]
    };

    const handleAddToCart = () => {
        console.log(`Adding product ${mockProduct.id} to cart`);
    };

    return (
        <div className={styles.pageContainer}>
            <NavBar />

            <main className={styles.contentWrapper}>
                <div className={styles.productSection}>
                    <div className={styles.imageContainer}>
                        {mockProduct.image ? (
                            <img src={mockProduct.image} alt={mockProduct.name} />
                        ) : (
                            <div className={styles.imagePlaceholder}>No Image</div>
                        )}
                    </div>

                    <div className={styles.infoContainer}>
                        <div className={styles.productInfo}>
                            <h1 className={styles.productName}>{mockProduct.name}</h1>
                            <p className={styles.productPrice}>{mockProduct.price.toFixed(2)} zł</p>
                            <Button
                                placeholder="Dodaj do koszyka"
                                onClick={handleAddToCart}
                            />
                        </div>
                    </div>
                </div>

                <section className={styles.descriptionSection}>
                    <h2>Opis produktu</h2>
                    <ul className={styles.specificationList}>
                        {mockProduct.specifications.map((spec, index) => (
                            <li key={index}>
                                <span className={styles.specLabel}>{spec.label}:</span>{' '}
                                {spec.value}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
