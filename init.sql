CREATE TABLE IF NOT EXISTS snakers (
    id SERIAL PRIMARY KEY,
    model_id int,
    color_id int,
    size2 int,
    image_url Varchar(255)
);

INSERT INTO snakers (model_id, color_id, size2, image_url) VALUES
(1, 1, 42, ''),
(2, 2, 40, ''),
(3, 3, 41, '');