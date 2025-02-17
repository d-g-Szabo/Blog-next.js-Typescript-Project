CREATE TABLE IF NOT EXISTS categories (
id BIGSERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL);

CREATE TABLE IF NOT EXISTS comments (
id BIGSERIAL PRIMARY KEY,
post_id BIGINT REFERENCES posts(id) NOT NULL,
user_id VARCHAR(255) NOT NULL,
comment TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS posts (
id BIGSERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
likes BIGINT DEFAULT 0,
category_id BIGINT REFERENCES categories(id)
);

INSERT INTO categories (name)
VALUES ('Technology'),
('Health'),
('Finance'),
('Lifestyle');

INSERT INTO posts (title, content, likes, category_id) 
VALUES ('The Future of Tech', 'Exploring upcoming trends in technology.', 0, (SELECT id FROM categories WHERE name = 'Technology')),
('Healthy Eating 101', 'A guide to healthy eating habits.', 0, (SELECT id FROM categories WHERE name = 'Health')),
('Investing for Beginners', 'Basics of investing in the stock market.', 0, (SELECT id FROM categories WHERE name = 'Finance')),
('DIY Home Decor', 'Simple DIY projects for your home.', 0, (SELECT id FROM categories WHERE name = 'Lifestyle'));