import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Homepage.module.css';
import ps5Image from '../assets/ps5.jpg';

export default function Homepage() {
    const mockProducts = [
        { id: 1, title: 'Product Title Example', price: 1234.99, image: ps5Image },
        { id: 2, title: 'Product Title Example', price: 1234.99, image: ps5Image },
        { id: 3, title: 'Product Title Example', price: 1234.99, image: ps5Image },
        { id: 4, title: 'Product Title Example', price: 1234.99, image: null },
        { id: 5, title: 'Product Title Example', price: 1234.99, image: null },
        { id: 6, title: 'Product Title Example', price: 1234.99, image: null },
    ];

    return (
        <div className={styles.homepage}>
            <NavBar page_header="Nasze Produkty" />

            <main className={styles.mainContent}>
                <div className={styles.productGrid}>
                    {mockProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className={styles.productLink}
                        >
                            <ProductCard
                                product_title={product.title}
                                product_price={product.price}
                                product_image={product.image}
                            />
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
