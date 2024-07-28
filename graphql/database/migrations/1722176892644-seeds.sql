INSERT INTO roles(title) VALUES ('admin'), ('blogger');

INSERT INTO permissions(action) VALUES ('post'), ('manage-user');

INSERT INTO role_permissions(role_id, permission_id) VALUES (1, 1), (1, 2), (2, 1);

INSERT INTO users(role_id, username, email, image, first_name, last_name, password)
VALUES (1, 'kiki', 'kb@mail.com', "asdasd" , 'Krystof', 'Bednar', '123');


INSERT INTO blog_categories (label, description)
VALUES
('JavaScript', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.'),
('React', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.'),
('Vue', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.'),
('Tech Culture', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.'),
('Tech News', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.'),
('Brain Health', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.'),
('Cloud Services', 'Category description here.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam error eius quo, officiis inventore distinctio reprehenderit dignissimos laudantium.');

INSERT INTO blog_posts (author_id, title, text, image, active, keyword1, keyword2, bg_src, bg_type)
VALUES
(1, 'Can anyone code?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image1.jpg', true, 'coding', 'programming', 'bg1.jpg', 'image'),
(1, 'Using AWS S3 for storing blog images', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image2.jpg', true, 'aws', 's3', 'bg2.jpg', 'image'),
(1, 'Popular Programming Languages in 2020', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image3.jpg', true, 'programming', 'languages', 'bg3.jpg', 'image'),
(1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image4.jpg', true, 'brain', 'hacks', 'bg4.jpg', 'image'),
(1, 'Software Engineer Salary in 2020', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image5.jpg', true, 'salary', 'software engineering', 'bg5.jpg', 'image'),
(1, 'GraphQL vs REST', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image6.jpg', true, 'graphql', 'rest', 'bg6.jpg', 'image'),
(1, 'A Day in the Life of a Programmer', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image7.jpg', true, 'day in the life', 'programmer', 'bg7.jpg', 'image'),
(1, 'Brain Hacks for Learning to Program', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image8.jpg', true, 'brain', 'hacks', 'bg8.jpg', 'image'),
(1, 'React Vs Vue', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo voluptatem beatae amet', 'image9.jpg', true, 'react', 'vue', 'bg9.jpg', 'image');

INSERT INTO blog_post_comments (post_id, author_id, comment)
VALUES
(1, 1, 'Totally broooo!'),
(1, 1, 'Friggin owrsome!');

INSERT INTO blog_post_categories (post_id, category_id)
VALUES
(1, 4),
(2, 5),
(3, 4),
(3, 3),
(4, 6),
(5, 1),
(6, 2),
(7, 4),
(8, 1),
(9, 3);








