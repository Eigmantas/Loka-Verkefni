CREATE TABLE IF NOT EXISTS snakers (
    id SERIAL PRIMARY KEY,
    model_id int,
    color_id int,
    size int,
    image_url Varchar(255)
);

INSERT INTO snakers (model_id, color_id, size, image_url) VALUES
(1, 1, 42, 'img/sneaker1.jpg'),
(1, 2, 43, 'img/sneaker2.jpg'),
(2, 1, 44, 'img/sneaker3.jpg');