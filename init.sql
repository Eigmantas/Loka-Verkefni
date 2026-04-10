CREATE TABLE IF NOT EXISTS sneakers  (
    id SERIAL PRIMARY KEY,
    model_id int,
    color int,
    size int,
    image_url Varchar(255)
);

TRUNCATE TABLE sneakers RESTART IDENTITY;

INSERT INTO sneakers (model_id, color, size, image_url) VALUES
(1, 1, 42, 'img/sneaker1.jpg'),
(2, 2, 43, 'img/sneaker2.jpg'),
(3, 3, 44, 'img/sneaker3.jpg');


