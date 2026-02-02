import { useState } from 'react';
import styles from '../styles/ProductList.module.css';

export default function ProductList({
    image,
    alt,
    product_name,
    product_price,
    product_quantity,
    showDropdown = true
}) {
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleDelete = () => {
        console.log('Delete product:', product_name);
    };

    return (
        <article className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt={alt} />
            </div>

            <div className={styles.productName}>
                <p>{product_name}</p>
            </div>

            <div className={styles.productPrice}>
                <p>{product_price} zł</p>
            </div>

            <div className={styles.quantitySection}>
                {showDropdown ? (
                    <select
                        value={selectedQuantity}
                        onChange={(e) => setSelectedQuantity(e.target.value)}
                        className={styles.quantitySelect}
                    >
                        {[...Array(Math.min(product_quantity, 10))].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                ) : (
                    <p className={styles.stockInfo}>{product_quantity} w magazynie</p>
                )}
            </div>

            <button className={styles.deleteButton} onClick={handleDelete}>
                Usuń
            </button>
        </article>
    );
}
