INSERT INTO user (
    user_id, kakao_id, email, password, name, phone, profile_image_url, user_type, refresh_token, created_at, deleted_at
) VALUES
(101, 1234567890123456, 'user101@example.com', 'password123', 'Alice Kim', '010-1234-5678', 
 'https://example.com/user101.jpg', 'OWNER', 'refresh_token_101', NOW(), NULL),
(102, 1234567890123457, 'user102@example.com', 'password456', 'Bob Lee', '010-2345-6789', 
 'https://example.com/user102.jpg', 'OWNER', 'refresh_token_102', NOW(), NULL),
(103, 1234567890123458, 'user103@example.com', 'password789', 'Charlie Park', '010-3456-7890', 
 'https://example.com/user103.jpg', 'OWNER', 'refresh_token_103', NOW(), NULL),
(104, 1234567890123459, 'user104@example.com', 'passwordABC', 'David Choi', '010-4567-8901', 
 'https://example.com/user104.jpg', 'OWNER', 'refresh_token_104', NOW(), NULL),
(105, 1234567890123460, 'user105@example.com', 'passwordXYZ', 'Emma Jung', '010-5678-9012', 
 'https://example.com/user105.jpg', 'OWNER', 'refresh_token_105', NOW(), NULL);


INSERT INTO bread_category (
    bread_category_id, name, weight
) VALUES
(1, 'Baguette', 250),
(2, 'Croissant', 100),
(3, 'Sourdough', 500);

INSERT INTO bakery (
    bakery_id, user_id, name, description, business_registration_number,
    address_road, address_detail, bakery_image_url, latitude, longitude,
    created_at, deleted_at, updated_at
) VALUES
(1, 101, 'Sweet Bread', 'A cozy bakery with fresh pastries.', '123-45-67890',
 '123 Main St, Seoul', 'Suite 101', 'https://example.com/bakery1.jpg', 37.5665, 126.9780,
 NOW(), NULL, NOW()),
(2, 102, 'Daily Bakes', 'Homemade bread and cookies every day.', '234-56-78901',
 '456 Oak St, Busan', 'Bldg 2, Room 3', 'https://example.com/bakery2.jpg', 35.1796, 129.0756,
 NOW(), NULL, NOW()),
(3, 103, 'Golden Crust', 'Award-winning croissants and baguettes.', '345-67-89012',
 '789 Pine St, Incheon', 'Floor 3, Room 12', 'https://example.com/bakery3.jpg', 37.4563, 126.7052,
 NOW(), NULL, NOW()),
(4, 104, 'Butter Bliss', 'A bakery known for its rich, buttery pastries.', '456-78-90123',
 '101 Elm St, Daegu', 'Near City Hall', 'https://example.com/bakery4.jpg', 35.8714, 128.6014,
 NOW(), NULL, NOW()),
(5, 105, 'Flour Power', 'Freshly baked goods with organic ingredients.', '567-89-01234',
 '202 Maple St, Daejeon', 'Corner of Main Square', 'https://example.com/bakery5.jpg', 36.3504, 127.3845,
 NOW(), NULL, NOW());
 
 INSERT INTO bread (bread_id, bakery_id, bread_category_id, name, price, bread_image_url, created_at, deleted_at)
VALUES
(1, 1, 1, 'Sourdough', 5000, 'https://example.com/images/sourdough.jpg', NOW(), NULL),
(2, 1, 2, 'Croissant', 3000, 'https://example.com/images/croissant.jpg', NOW(), NULL),
(3, 1, 3, 'Baguette', 4000, 'https://example.com/images/baguette.jpg', NOW(), NULL);

 INSERT INTO stock (bakery_id, bread_id, quantity, date) VALUES (1, 1, 1, '2024-01-02'), (1, 1, 1, '2024-01-03'), (1, 3, 3, '2024-01-04'), (1, 2, 5, '2024-01-04'),
 (1, 1, 3, '2024-01-04'), (1, 2, 1, '2024-01-05'), (1, 3, 4, '2024-01-05'), (1, 3, 5, '2024-01-06'), (1, 3, 2, '2024-01-06'), (1, 3, 2, '2024-01-07'),
 (1, 3, 4, '2024-01-07'), (1, 2, 4, '2024-01-07'), (1, 3, 2, '2024-01-09'), (1, 1, 3, '2024-01-09'), (1, 1, 1, '2024-01-09'), (1, 3, 2, '2024-01-10'),
 (1, 2, 3, '2024-01-10'), (1, 3, 1, '2024-01-10'), (1, 3, 1, '2024-01-11'), (1, 1, 2, '2024-01-12'), (1, 3, 4, '2024-01-12'), (1, 3, 2, '2024-01-12'),
 (1, 1, 2, '2024-01-13'), (1, 3, 1, '2024-01-14'), (1, 1, 3, '2024-01-14'), (1, 2, 5, '2024-01-14'), (1, 1, 2, '2024-01-16'), (1, 1, 4, '2024-01-17'),
 (1, 1, 4, '2024-01-18'), (1, 2, 1, '2024-01-18'), (1, 3, 4, '2024-01-18'), (1, 1, 4, '2024-01-19'), (1, 2, 5, '2024-01-19'), (1, 2, 2, '2024-01-19'),
 (1, 3, 2, '2024-01-20'), (1, 2, 3, '2024-01-20'), (1, 1, 2, '2024-01-21'), (1, 1, 1, '2024-01-21'), (1, 1, 4, '2024-01-21'), (1, 2, 2, '2024-01-23'),
 (1, 2, 3, '2024-01-24'), (1, 2, 2, '2024-01-24'), (1, 3, 2, '2024-01-24'), (1, 2, 2, '2024-01-25'), (1, 2, 4, '2024-01-25'), (1, 2, 4, '2024-01-25'),
 (1, 3, 3, '2024-01-26'), (1, 1, 2, '2024-01-27'), (1, 2, 2, '2024-01-27'), (1, 2, 3, '2024-01-28'), (1, 2, 3, '2024-01-28'), (1, 2, 4, '2024-01-28'),
 (1, 1, 5, '2024-01-30'), (1, 3, 1, '2024-01-31'), (1, 1, 4, '2024-01-31'), (1, 2, 5, '2024-02-01'), (1, 3, 5, '2024-02-02'), (1, 2, 5, '2024-02-02'),
 (1, 2, 2, '2024-02-02'), (1, 2, 2, '2024-02-03'), (1, 3, 5, '2024-02-04'), (1, 1, 1, '2024-02-06'), (1, 2, 4, '2024-02-06'), (1, 1, 4, '2024-02-06'),
 (1, 2, 5, '2024-02-07'), (1, 1, 5, '2024-02-08'), (1, 3, 3, '2024-02-08'), (1, 2, 2, '2024-02-08'), (1, 3, 3, '2024-02-09'), (1, 1, 2, '2024-02-09'),
 (1, 3, 1, '2024-02-10'), (1, 2, 2, '2024-02-11'), (1, 1, 2, '2024-02-11'), (1, 2, 2, '2024-02-11'), (1, 2, 3, '2024-02-13'), (1, 3, 4, '2024-02-13'),
 (1, 1, 1, '2024-02-13'), (1, 2, 1, '2024-02-14'), (1, 3, 5, '2024-02-15'), (1, 1, 3, '2024-02-15'), (1, 2, 1, '2024-02-15'), (1, 1, 1, '2024-02-16'),
 (1, 3, 2, '2024-02-16'), (1, 3, 5, '2024-02-16'), (1, 2, 5, '2024-02-17'), (1, 1, 4, '2024-02-17'), (1, 3, 5, '2024-02-17'), (1, 2, 4, '2024-02-18'),
 (1, 1, 3, '2024-02-18'), (1, 3, 2, '2024-02-20'), (1, 2, 5, '2024-02-21'), (1, 3, 1, '2024-02-21'), (1, 3, 5, '2024-02-21'), (1, 2, 4, '2024-02-22'),
 (1, 3, 1, '2024-02-22'), (1, 2, 4, '2024-02-22'), (1, 2, 1, '2024-02-23'), (1, 3, 5, '2024-02-23'), (1, 3, 3, '2024-02-24'), (1, 1, 5, '2024-02-25'),
 (1, 1, 1, '2024-02-27'), (1, 1, 4, '2024-02-27'), (1, 2, 2, '2024-02-27'), (1, 1, 5, '2024-02-28'), (1, 3, 4, '2024-02-29'), (1, 1, 4, '2024-02-29'),
 (1, 2, 1, '2024-02-29'), (1, 1, 1, '2024-03-01'), (1, 2, 4, '2024-03-01'), (1, 1, 4, '2024-03-01'), (1, 1, 1, '2024-03-02'), (1, 3, 4, '2024-03-02'),
 (1, 3, 5, '2024-03-03'), (1, 2, 3, '2024-03-03'), (1, 3, 3, '2024-03-05'), (1, 3, 1, '2024-03-05'), (1, 1, 3, '2024-03-05'), (1, 3, 1, '2024-03-06'),
 (1, 3, 2, '2024-03-06'), (1, 1, 2, '2024-03-07'), (1, 3, 5, '2024-03-07'), (1, 1, 2, '2024-03-07'), (1, 1, 1, '2024-03-08'), (1, 2, 2, '2024-03-08'),
 (1, 2, 1, '2024-03-08'), (1, 3, 3, '2024-03-09'), (1, 3, 5, '2024-03-10'), (1, 1, 2, '2024-03-10'), (1, 2, 1, '2024-03-12'), (1, 3, 5, '2024-03-12'),
 (1, 1, 5, '2024-03-12'), (1, 2, 1, '2024-03-13'), (1, 1, 5, '2024-03-14'), (1, 2, 4, '2024-03-14'), (1, 3, 3, '2024-03-15'), (1, 2, 4, '2024-03-15'),
 (1, 1, 2, '2024-03-16'), (1, 1, 4, '2024-03-17'), (1, 2, 2, '2024-03-19'), (1, 2, 1, '2024-03-19'), (1, 1, 1, '2024-03-20'), (1, 3, 2, '2024-03-21'),
 (1, 1, 3, '2024-03-21'), (1, 3, 5, '2024-03-22'), (1, 3, 3, '2024-03-22'), (1, 1, 2, '2024-03-22'), (1, 3, 3, '2024-03-23'), (1, 2, 2, '2024-03-23'),
 (1, 1, 1, '2024-03-23'), (1, 2, 2, '2024-03-24'), (1, 1, 3, '2024-03-24'), (1, 1, 5, '2024-03-24'), (1, 1, 1, '2024-03-26'), (1, 3, 2, '2024-03-27'),
 (1, 1, 5, '2024-03-27'), (1, 3, 5, '2024-03-28'), (1, 3, 4, '2024-03-28'), (1, 1, 2, '2024-03-29'), (1, 3, 5, '2024-03-29'), (1, 2, 1, '2024-03-29'),
 (1, 2, 4, '2024-03-30'), (1, 3, 2, '2024-03-30'), (1, 2, 3, '2024-03-30'), (1, 1, 1, '2024-03-31'), (1, 1, 5, '2024-03-31'), (1, 3, 4, '2024-04-02'),
 (1, 1, 5, '2024-04-03'), (1, 3, 1, '2024-04-04'), (1, 3, 2, '2024-04-05'), (1, 2, 1, '2024-04-06'), (1, 3, 1, '2024-04-06'), (1, 2, 5, '2024-04-07'),
 (1, 1, 1, '2024-04-07'), (1, 1, 1, '2024-04-09'), (1, 1, 4, '2024-04-09'), (1, 1, 1, '2024-04-09'), (1, 3, 3, '2024-04-10'), (1, 1, 3, '2024-04-10'),
 (1, 2, 5, '2024-04-11'), (1, 2, 5, '2024-04-12'), (1, 3, 2, '2024-04-12'), (1, 2, 4, '2024-04-13'), (1, 3, 5, '2024-04-13'), (1, 2, 3, '2024-04-14'),
 (1, 2, 1, '2024-04-14'), (1, 2, 4, '2024-04-16'), (1, 1, 3, '2024-04-16'), (1, 1, 3, '2024-04-17'), (1, 1, 3, '2024-04-18'), (1, 1, 2, '2024-04-19'),
 (1, 3, 2, '2024-04-19'), (1, 3, 1, '2024-04-20'), (1, 1, 4, '2024-04-20'), (1, 3, 5, '2024-04-20'), (1, 2, 4, '2024-04-21'), (1, 2, 1, '2024-04-21'),
 (1, 1, 2, '2024-04-21'), (1, 1, 5, '2024-04-23'), (1, 3, 3, '2024-04-24'), (1, 3, 3, '2024-04-24'), (1, 3, 3, '2024-04-24'), (1, 2, 1, '2024-04-25'),
 (1, 2, 1, '2024-04-25'), (1, 1, 1, '2024-04-25'), (1, 2, 5, '2024-04-26'), (1, 3, 2, '2024-04-27'), (1, 1, 2, '2024-04-27'), (1, 2, 4, '2024-04-28'),
 (1, 1, 2, '2024-04-30'), (1, 1, 2, '2024-05-01'), (1, 2, 1, '2024-05-01'), (1, 3, 4, '2024-05-02'), (1, 3, 3, '2024-05-02'), (1, 2, 1, '2024-05-02'),
 (1, 2, 2, '2024-05-03'), (1, 1, 3, '2024-05-03'), (1, 3, 2, '2024-05-04'), (1, 2, 5, '2024-05-04'), (1, 1, 4, '2024-05-04'), (1, 3, 3, '2024-05-05'),
 (1, 2, 2, '2024-05-05'), (1, 3, 4, '2024-05-05'), (1, 1, 3, '2024-05-07'), (1, 2, 2, '2024-05-07'), (1, 3, 3, '2024-05-08'), (1, 3, 3, '2024-05-09'),
 (1, 1, 4, '2024-05-09'), (1, 1, 2, '2024-05-09'), (1, 1, 2, '2024-05-10'), (1, 2, 2, '2024-05-11'), (1, 1, 5, '2024-05-11'), (1, 3, 1, '2024-05-11'),
 (1, 1, 3, '2024-05-12'), (1, 3, 2, '2024-05-14'), (1, 1, 2, '2024-05-14'), (1, 1, 5, '2024-05-15'), (1, 2, 4, '2024-05-15'), (1, 1, 5, '2024-05-15'),
 (1, 2, 3, '2024-05-16'), (1, 2, 1, '2024-05-16'), (1, 1, 3, '2024-05-17'), (1, 2, 4, '2024-05-17'), (1, 2, 5, '2024-05-18'), (1, 1, 5, '2024-05-18'),
 (1, 3, 4, '2024-05-18'), (1, 1, 4, '2024-05-19'), (1, 3, 3, '2024-05-19'), (1, 2, 2, '2024-05-19'), (1, 3, 5, '2024-05-21'), (1, 1, 3, '2024-05-21'),
 (1, 2, 5, '2024-05-21'), (1, 2, 4, '2024-05-22'), (1, 1, 4, '2024-05-22'), (1, 2, 3, '2024-05-22'), (1, 2, 1, '2024-05-23'), (1, 3, 3, '2024-05-23'),
 (1, 3, 4, '2024-05-23'), (1, 1, 5, '2024-05-24'), (1, 1, 2, '2024-05-24'), (1, 3, 5, '2024-05-24'), (1, 3, 3, '2024-05-25'), (1, 3, 5, '2024-05-25'),
 (1, 1, 2, '2024-05-25'), (1, 1, 5, '2024-05-26'), (1, 3, 1, '2024-05-28'), (1, 3, 5, '2024-05-28'), (1, 1, 3, '2024-05-29'), (1, 3, 2, '2024-05-30'),
 (1, 3, 3, '2024-05-31'), (1, 1, 3, '2024-05-31'), (1, 3, 4, '2024-05-31'), (1, 1, 3, '2024-06-01'), (1, 2, 1, '2024-06-01'), (1, 3, 1, '2024-06-01'),
 (1, 1, 1, '2024-06-02'), (1, 2, 3, '2024-06-04'), (1, 1, 3, '2024-06-05'), (1, 3, 2, '2024-06-06'), (1, 3, 2, '2024-06-06'), (1, 1, 3, '2024-06-06'),
 (1, 1, 4, '2024-06-07'), (1, 2, 3, '2024-06-07'), (1, 3, 5, '2024-06-07'), (1, 1, 1, '2024-06-08'), (1, 2, 2, '2024-06-09'), (1, 1, 2, '2024-06-09'),
 (1, 2, 4, '2024-06-09'), (1, 3, 5, '2024-06-11'), (1, 1, 2, '2024-06-11'), (1, 2, 1, '2024-06-11'), (1, 2, 5, '2024-06-12'), (1, 1, 4, '2024-06-13'),
 (1, 2, 2, '2024-06-14'), (1, 3, 5, '2024-06-15'), (1, 1, 2, '2024-06-16'), (1, 3, 2, '2024-06-16'), (1, 1, 2, '2024-06-18'), (1, 2, 1, '2024-06-18'),
 (1, 3, 2, '2024-06-19'), (1, 1, 5, '2024-06-20'), (1, 3, 5, '2024-06-21'), (1, 2, 1, '2024-06-22'), (1, 3, 4, '2024-06-22'), (1, 2, 1, '2024-06-22'),
 (1, 1, 5, '2024-06-23'), (1, 3, 3, '2024-06-23'), (1, 1, 5, '2024-06-23'), (1, 1, 2, '2024-06-25'), (1, 3, 3, '2024-06-25'), (1, 3, 4, '2024-06-26'),
 (1, 2, 1, '2024-06-26'), (1, 3, 4, '2024-06-27'), (1, 3, 1, '2024-06-28'), (1, 1, 1, '2024-06-28'), (1, 2, 4, '2024-06-29'), (1, 2, 4, '2024-06-29'),
 (1, 2, 4, '2024-06-29'), (1, 2, 4, '2024-06-30'), (1, 1, 3, '2024-06-30'), (1, 1, 5, '2024-06-30'), (1, 3, 2, '2024-07-02'), (1, 2, 2, '2024-07-02'),
 (1, 1, 1, '2024-07-03'), (1, 3, 3, '2024-07-03'), (1, 3, 4, '2024-07-04'), (1, 1, 1, '2024-07-04'), (1, 3, 4, '2024-07-04'), (1, 2, 5, '2024-07-05'),
 (1, 2, 1, '2024-07-05'), (1, 1, 2, '2024-07-05'), (1, 3, 5, '2024-07-06'), (1, 2, 3, '2024-07-06'), (1, 3, 2, '2024-07-07'), (1, 3, 2, '2024-07-07'),
 (1, 1, 2, '2024-07-09'), (1, 3, 1, '2024-07-09'), (1, 3, 1, '2024-07-09'), (1, 1, 5, '2024-07-10'), (1, 1, 4, '2024-07-11'), (1, 2, 5, '2024-07-11'),
 (1, 1, 1, '2024-07-12'), (1, 1, 1, '2024-07-12'), (1, 3, 3, '2024-07-13'), (1, 3, 5, '2024-07-14'), (1, 2, 2, '2024-07-14'), (1, 3, 3, '2024-07-16'),
 (1, 1, 5, '2024-07-16'), (1, 2, 1, '2024-07-17'), (1, 1, 5, '2024-07-18'), (1, 2, 1, '2024-07-19'), (1, 3, 4, '2024-07-20'), (1, 2, 2, '2024-07-21'),
 (1, 2, 4, '2024-07-21'), (1, 2, 2, '2024-07-23'), (1, 2, 2, '2024-07-23'), (1, 2, 4, '2024-07-23'), (1, 1, 2, '2024-07-24'), (1, 3, 3, '2024-07-24'),
 (1, 2, 4, '2024-07-24'), (1, 1, 2, '2024-07-25'), (1, 2, 2, '2024-07-25'), (1, 1, 2, '2024-07-26'), (1, 1, 4, '2024-07-26'), (1, 1, 4, '2024-07-26'),
 (1, 2, 4, '2024-07-27'), (1, 3, 1, '2024-07-27'), (1, 1, 3, '2024-07-28'), (1, 1, 3, '2024-07-28'), (1, 2, 5, '2024-07-28'), (1, 1, 5, '2024-07-30'),
 (1, 1, 2, '2024-07-30'), (1, 1, 3, '2024-07-30'), (1, 2, 2, '2024-07-31'), (1, 3, 3, '2024-08-01'), (1, 2, 4, '2024-08-01'), (1, 3, 1, '2024-08-02'),
 (1, 2, 2, '2024-08-03'), (1, 3, 5, '2024-08-03'), (1, 1, 3, '2024-08-03'), (1, 1, 1, '2024-08-04'), (1, 1, 4, '2024-08-04'), (1, 2, 4, '2024-08-06'),
 (1, 1, 5, '2024-08-06'), (1, 1, 3, '2024-08-07'), (1, 3, 2, '2024-08-07'), (1, 3, 4, '2024-08-08'), (1, 3, 3, '2024-08-08'), (1, 1, 3, '2024-08-09'),
 (1, 1, 3, '2024-08-10'), (1, 1, 2, '2024-08-10'), (1, 1, 4, '2024-08-11'), (1, 3, 3, '2024-08-11'), (1, 2, 1, '2024-08-13'), (1, 2, 1, '2024-08-13'),
 (1, 2, 3, '2024-08-13'), (1, 2, 3, '2024-08-14'), (1, 2, 4, '2024-08-14'), (1, 1, 3, '2024-08-15'), (1, 2, 5, '2024-08-15'), (1, 1, 2, '2024-08-15'),
 (1, 2, 4, '2024-08-16'), (1, 1, 1, '2024-08-16'), (1, 1, 2, '2024-08-16'), (1, 2, 1, '2024-08-17'), (1, 1, 3, '2024-08-17'), (1, 1, 5, '2024-08-18'),
 (1, 1, 5, '2024-08-20'), (1, 3, 5, '2024-08-20'), (1, 2, 5, '2024-08-20'), (1, 2, 4, '2024-08-21'), (1, 3, 2, '2024-08-21'), (1, 3, 5, '2024-08-21'),
 (1, 1, 5, '2024-08-22'), (1, 3, 3, '2024-08-23'), (1, 3, 1, '2024-08-23'), (1, 1, 5, '2024-08-24'), (1, 1, 5, '2024-08-25'), (1, 3, 1, '2024-08-27'),
 (1, 2, 2, '2024-08-27'), (1, 1, 4, '2024-08-27'), (1, 3, 4, '2024-08-28'), (1, 1, 4, '2024-08-28'), (1, 3, 3, '2024-08-29'), (1, 3, 4, '2024-08-29'),
 (1, 3, 5, '2024-08-29'), (1, 1, 1, '2024-08-30'), (1, 1, 5, '2024-08-30'), (1, 1, 2, '2024-08-31'), (1, 2, 4, '2024-08-31'), (1, 3, 5, '2024-09-01'),
 (1, 3, 4, '2024-09-01'), (1, 1, 4, '2024-09-03'), (1, 3, 2, '2024-09-03'), (1, 3, 5, '2024-09-04'), (1, 2, 4, '2024-09-04'), (1, 3, 4, '2024-09-04'),
 (1, 3, 5, '2024-09-05'), (1, 1, 1, '2024-09-06'), (1, 1, 2, '2024-09-07'), (1, 1, 1, '2024-09-07'), (1, 3, 4, '2024-09-08'), (1, 1, 2, '2024-09-10'),
 (1, 1, 3, '2024-09-11'), (1, 1, 5, '2024-09-11'), (1, 1, 1, '2024-09-12'), (1, 3, 3, '2024-09-12'), (1, 2, 4, '2024-09-13'), (1, 2, 4, '2024-09-13'),
 (1, 2, 2, '2024-09-14'), (1, 1, 3, '2024-09-14'), (1, 2, 2, '2024-09-15'), (1, 1, 2, '2024-09-17'), (1, 2, 1, '2024-09-17'), (1, 3, 1, '2024-09-17'),
 (1, 3, 1, '2024-09-18'), (1, 2, 3, '2024-09-18'), (1, 3, 2, '2024-09-19'), (1, 2, 5, '2024-09-19'), (1, 3, 5, '2024-09-19'), (1, 3, 2, '2024-09-20'),
 (1, 3, 4, '2024-09-20'), (1, 3, 3, '2024-09-20'), (1, 3, 5, '2024-09-21'), (1, 1, 1, '2024-09-21'), (1, 3, 4, '2024-09-22'), (1, 2, 5, '2024-09-22'),
 (1, 3, 3, '2024-09-22'), (1, 2, 2, '2024-09-24'), (1, 3, 5, '2024-09-24'), (1, 2, 1, '2024-09-25'), (1, 3, 1, '2024-09-25'), (1, 2, 4, '2024-09-25'),
 (1, 3, 1, '2024-09-26'), (1, 2, 1, '2024-09-27'), (1, 1, 5, '2024-09-27'), (1, 2, 4, '2024-09-28'), (1, 1, 4, '2024-09-28'), (1, 1, 1, '2024-09-29'),
 (1, 2, 5, '2024-10-01'), (1, 3, 4, '2024-10-01'), (1, 2, 2, '2024-10-02'), (1, 1, 1, '2024-10-02'), (1, 1, 1, '2024-10-02'), (1, 3, 4, '2024-10-03'),
 (1, 3, 2, '2024-10-03'), (1, 1, 1, '2024-10-04'), (1, 3, 4, '2024-10-04'), (1, 3, 2, '2024-10-05'), (1, 2, 3, '2024-10-05'), (1, 3, 1, '2024-10-05'),
 (1, 2, 2, '2024-10-06'), (1, 3, 2, '2024-10-06'), (1, 2, 1, '2024-10-08'), (1, 1, 5, '2024-10-08'), (1, 2, 4, '2024-10-08'), (1, 3, 2, '2024-10-09'),
 (1, 2, 4, '2024-10-10'), (1, 2, 2, '2024-10-11'), (1, 3, 1, '2024-10-11'), (1, 1, 5, '2024-10-12'), (1, 2, 3, '2024-10-12'), (1, 3, 3, '2024-10-13'),
 (1, 1, 5, '2024-10-13'), (1, 2, 1, '2024-10-13'), (1, 1, 4, '2024-10-15'), (1, 1, 1, '2024-10-16'), (1, 1, 2, '2024-10-16'), (1, 1, 4, '2024-10-17'),
 (1, 2, 5, '2024-10-17'), (1, 3, 1, '2024-10-18'), (1, 3, 4, '2024-10-19'), (1, 1, 5, '2024-10-20'), (1, 3, 2, '2024-10-20'), (1, 1, 4, '2024-10-22'),
 (1, 2, 4, '2024-10-22'), (1, 1, 5, '2024-10-23'), (1, 2, 2, '2024-10-24'), (1, 3, 1, '2024-10-25'), (1, 3, 2, '2024-10-25'), (1, 3, 4, '2024-10-25'),
 (1, 3, 1, '2024-10-26'), (1, 1, 1, '2024-10-26'), (1, 1, 5, '2024-10-27'), (1, 2, 4, '2024-10-27'), (1, 2, 1, '2024-10-27'), (1, 2, 2, '2024-10-29'),
 (1, 1, 3, '2024-10-30'), (1, 2, 3, '2024-10-30'), (1, 3, 5, '2024-10-31'), (1, 3, 1, '2024-10-31'), (1, 2, 1, '2024-11-01'), (1, 1, 2, '2024-11-01'),
 (1, 2, 1, '2024-11-02'), (1, 1, 4, '2024-11-02'), (1, 2, 1, '2024-11-03'), (1, 1, 5, '2024-11-03'), (1, 1, 3, '2024-11-05'), (1, 2, 2, '2024-11-06'),
 (1, 1, 4, '2024-11-06'), (1, 3, 3, '2024-11-06'), (1, 1, 1, '2024-11-07'), (1, 3, 3, '2024-11-07'), (1, 1, 1, '2024-11-07'), (1, 2, 5, '2024-11-08'),
 (1, 1, 2, '2024-11-08'), (1, 1, 5, '2024-11-09'), (1, 1, 4, '2024-11-09'), (1, 3, 3, '2024-11-10'), (1, 3, 3, '2024-11-10'), (1, 1, 4, '2024-11-10'),
 (1, 3, 1, '2024-11-12'), (1, 2, 5, '2024-11-13'), (1, 3, 2, '2024-11-14'), (1, 3, 1, '2024-11-15'), (1, 1, 5, '2024-11-15'), (1, 2, 2, '2024-11-16'),
 (1, 3, 2, '2024-11-17'), (1, 3, 1, '2024-11-17'), (1, 2, 2, '2024-11-17'), (1, 3, 2, '2024-11-19'), (1, 1, 2, '2024-11-20'), (1, 3, 4, '2024-11-20'),
 (1, 3, 4, '2024-11-20'), (1, 3, 1, '2024-11-21'), (1, 1, 4, '2024-11-22'), (1, 3, 2, '2024-11-22'), (1, 1, 1, '2024-11-22'), (1, 1, 5, '2024-11-23'),
 (1, 2, 5, '2024-11-24'), (1, 2, 3, '2024-11-24'), (1, 3, 4, '2024-11-26'), (1, 2, 2, '2024-11-27'), (1, 2, 4, '2024-11-28'), (1, 2, 1, '2024-11-29'),
 (1, 1, 2, '2024-11-29'), (1, 1, 1, '2024-11-30'), (1, 2, 3, '2024-11-30'), (1, 1, 3, '2024-11-30'), (1, 1, 3, '2024-12-01'), (1, 3, 4, '2024-12-01'),
 (1, 1, 4, '2024-12-03'), (1, 1, 1, '2024-12-04'), (1, 2, 1, '2024-12-05'), (1, 2, 2, '2024-12-05'), (1, 3, 3, '2024-12-05'), (1, 3, 5, '2024-12-06'),
 (1, 1, 4, '2024-12-06'), (1, 2, 5, '2024-12-06'), (1, 2, 1, '2024-12-07'), (1, 2, 4, '2024-12-08'), (1, 1, 1, '2024-12-10'), (1, 2, 5, '2024-12-10'),
 (1, 2, 1, '2024-12-11'), (1, 2, 1, '2024-12-11'), (1, 1, 4, '2024-12-12'), (1, 2, 3, '2024-12-12'), (1, 3, 1, '2024-12-13'), (1, 2, 4, '2024-12-14'),
 (1, 1, 2, '2024-12-14'), (1, 1, 3, '2024-12-15'), (1, 1, 3, '2024-12-15'), (1, 1, 2, '2024-12-17'), (1, 3, 3, '2024-12-18'), (1, 2, 4, '2024-12-19'),
 (1, 2, 4, '2024-12-19'), (1, 3, 5, '2024-12-19'), (1, 3, 1, '2024-12-20'), (1, 3, 1, '2024-12-20'), (1, 2, 5, '2024-12-21'), (1, 2, 1, '2024-12-21'),
 (1, 1, 4, '2024-12-21'), (1, 3, 5, '2024-12-22'), (1, 1, 1, '2024-12-22'), (1, 1, 4, '2024-12-24'), (1, 2, 1, '2024-12-24'), (1, 1, 4, '2024-12-25'),
 (1, 2, 5, '2024-12-25'), (1, 1, 4, '2024-12-26'), (1, 1, 2, '2024-12-26'), (1, 2, 3, '2024-12-27'), (1, 3, 4, '2024-12-28'), (1, 1, 4, '2024-12-29'),
 (1, 2, 1, '2024-12-29'), (1, 1, 3, '2024-12-29'), (1, 3, 4, '2024-12-31'), (1, 3, 2, '2024-12-31'), (1, 3, 3, '2025-01-01'), (1, 1, 3, '2025-01-01'),
 (1, 1, 3, '2025-01-01'), (1, 1, 3, '2025-01-02'), (1, 2, 4, '2025-01-03'), (1, 3, 2, '2025-01-03'), (1, 3, 4, '2025-01-03'), (1, 3, 5, '2025-01-04'),
 (1, 1, 3, '2025-01-04'), (1, 2, 1, '2025-01-04'), (1, 2, 4, '2025-01-05'), (1, 1, 1, '2025-01-07'), (1, 3, 2, '2025-01-08'), (1, 1, 2, '2025-01-09'),
 (1, 2, 1, '2025-01-09'), (1, 2, 5, '2025-01-10'), (1, 3, 4, '2025-01-11'), (1, 3, 3, '2025-01-12'), (1, 2, 5, '2025-01-14'), (1, 3, 3, '2025-01-14'),
 (1, 1, 3, '2025-01-14'), (1, 2, 2, '2025-01-15'), (1, 1, 1, '2025-01-15'), (1, 2, 2, '2025-01-15'), (1, 2, 1, '2025-01-16'), (1, 3, 4, '2025-01-17'),
 (1, 2, 5, '2025-01-17'), (1, 3, 1, '2025-01-18'), (1, 3, 4, '2025-01-19'), (1, 2, 1, '2025-01-19'), (1, 3, 1, '2025-01-21'), (1, 2, 2, '2025-01-22'),
 (1, 3, 4, '2025-01-22'), (1, 1, 4, '2025-01-23'), (1, 3, 4, '2025-01-23'), (1, 2, 1, '2025-01-23'), (1, 2, 4, '2025-01-24'), (1, 3, 2, '2025-01-25'),
 (1, 1, 1, '2025-01-26'), (1, 2, 5, '2025-01-26'), (1, 1, 1, '2025-01-28'), (1, 2, 4, '2025-01-28'), (1, 1, 1, '2025-01-28'), (1, 3, 1, '2025-01-29'),
 (1, 3, 3, '2025-01-29'), (1, 3, 2, '2025-01-29'), (1, 2, 3, '2025-01-30'), (1, 2, 1, '2025-01-31'), (1, 2, 2, '2025-02-01'), (1, 2, 1, '2025-02-01'),
 (1, 3, 3, '2025-02-01'), (1, 1, 2, '2025-02-02'), (1, 3, 4, '2025-02-04'), (1, 3, 5, '2025-02-04');
 
 INSERT INTO `bbanggu`.`bread_package` 
(`bakery_id`, `name`, `price`, `discount_rate`, `quantity`, `description`) 
VALUES 
(1, '빵꾸러미1', 50000, 20, 2, '1번 빵꾸러미 설명입니다.');


 use bbanggu;
 select * from user;
 select * from bakery;
 select * from bread;
 select * from stock;
 select * from bread_category;
 select * from bread_package;
 select * from reservation;
 
 
 
 