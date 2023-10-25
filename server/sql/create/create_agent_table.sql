CREATE TABLE
    IF NOT EXISTS agent (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255),
        image VARCHAR(255),
        is_super_agent BOOLEAN,
        name VARCHAR(100),
        slug VARCHAR(100),
        social VARCHAR(255),
        user_id INT
    );