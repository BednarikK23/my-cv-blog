CREATE TABLE IF NOT EXISTS {}.blog_categories (
    id INT(12) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label VARCHAR(100) NOT NULL,
    description VARCHAR(300) NOT NULL,
);