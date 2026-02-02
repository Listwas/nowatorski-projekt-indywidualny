CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (title, price, image, description) VALUES
('PlayStation 5 Pro', 1999.99, '/assets/ps5.jpg', 'Najnowsza konsola Sony z ulepszonym GPU'),
('Xbox Series X', 1899.99, '/assets/xbox.jpg', 'Potężna konsola Microsoft'),
('Nintendo Switch OLED', 1499.99, '/assets/switch.jpg', 'Hybrydowa konsola Nintendo z ekranem OLED')
ON CONFLICT DO NOTHING;
