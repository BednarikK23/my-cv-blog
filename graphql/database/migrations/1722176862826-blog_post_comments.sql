CREATE TABLE IF NOT EXISTS {}.blog_post_comments (
    id INT(12) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    post_id INT(12) NOT NULL,
    author_id INT(12) NOT NULL,
    comment VARCHAR(255) NOT NULL,

    INDEX bpauthor_ind (author_id),
    INDEX bppost_ind (post_id),

    CONSTRAINT fk_bpauthor_id FOREIGN KEY (author_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

    CONSTRAINT fk_bppost_id FOREIGN KEY (post_id) REFERENCES blog_posts(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);