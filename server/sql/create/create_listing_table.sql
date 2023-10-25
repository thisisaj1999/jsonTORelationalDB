CREATE TABLE
    IF NOT EXISTS listings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        has_view_360 BOOLEAN,
        is_available BOOLEAN,
        is_broker_project_property BOOLEAN,
        is_claimed_by_agent BOOLEAN,
        is_community_expert BOOLEAN,
        is_cts BOOLEAN,
        is_direct_from_developer BOOLEAN,
        is_exclusive BOOLEAN,
        is_featured BOOLEAN,
        is_new_construction BOOLEAN,
        is_new_insert BOOLEAN,
        is_premium BOOLEAN,
        is_smart_ad BOOLEAN,
        is_spotlight_listing BOOLEAN,
        is_under_offer_by_competitor BOOLEAN,
        is_verified BOOLEAN,
        listed_date VARCHAR(150),
        listing_level VARCHAR(100),
        listing_level_label VARCHAR(100)
    );