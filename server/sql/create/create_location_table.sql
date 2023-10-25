CREATE TABLE
    IF NOT EXISTS location (
        id INT AUTO_INCREMENT PRIMARY KEY,
        coordinates_lat DOUBLE,
        coordinates_lon DOUBLE,
        full_name VARCHAR(255),
        path VARCHAR(255),
        slug VARCHAR(255),
        type VARCHAR(255)
    );