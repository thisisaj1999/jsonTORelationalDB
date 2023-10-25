CREATE TABLE
    IF NOT EXISTS property (
        id INT AUTO_INCREMENT PRIMARY KEY,
        agent_id INT,
        broker_id INT,
        location_id INT,
        property_type_id INT,
        bathrooms INT DEFAULT 1,
        bedrooms INT DEFAULT 1,
        description LONGTEXT,
        furnished VARCHAR(100),
        images VARCHAR(255),
        offering_type VARCHAR(255),
        price INT,
        price_period VARCHAR(100),
        reference VARCHAR(255),
        rera VARCHAR(150),
        share_url VARCHAR(255),
        title VARCHAR(255)
    );