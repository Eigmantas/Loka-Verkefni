CREATE TABLE IF NOT EXISTS sneakers  (
    id SERIAL PRIMARY KEY,
    model_id int,
    color int,
    size int,
    price DECIMAL(10, 2),
    image_url Varchar(255)
);

TRUNCATE TABLE sneakers RESTART IDENTITY;

INSERT INTO sneakers (model_id, color, size, price, image_url) VALUES
(1, 1, 42, 129.99, 'img/sneaker1.jpg'),
(2, 2, 43, 149.99, 'img/sneaker2.jpg'),
(3, 3, 44, 139.99, 'img/sneaker3.jpg'),
(4, 4, 45, 159.99, 'img/sneaker4.jpg'),
(5, 5, 46, 119.99, 'img/sneaker5.jpg'),
(6, 6, 47, 169.99, 'img/sneaker6.jpg')

