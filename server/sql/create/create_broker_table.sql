CREATE TABLE
    IF NOT EXISTS broker (
        id INT AUTO_INCREMENT PRIMARY KEY,
        address VARCHAR(255),
        email VARCHAR(255),
        logo VARCHAR(255),
        name VARCHAR(100),
        phone VARCHAR(100),
        slug VARCHAR(255)
    );