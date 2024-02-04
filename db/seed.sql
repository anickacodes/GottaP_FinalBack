\c bathroom_app;

INSERT INTO reviewers (first_name, last_name) 
VALUES
    ("Nicki", "Lewis"),
    ("Jesse", "Chong"),
    ("Kenia", "Decoteau"),
    ("Natyka", "Callwood"),
    ("Tyrell", "Oliver"),
    ("Yulonda", "Wyatt");

INSERT INTO bathroomreviews (bathroom_name, bathroom_address, rating, description, reviewer_id)
VALUES
  ('Kuku Korean Cuisine bathroom', '12-09 Jackson Ave, Queens, NY 11101', 4, 'Very clean and well-maintained.', 1),
  ('Cozy Corner Bathroom', '10-37 Jackson Ave, Long Island City, NY 11101', 3, 'Average facilities, could use improvement.', 2),
  ('Natures Haven Bathroom', '27-10 43rd Ave, Queens, NY 11101', 4, 'Beautiful surroundings, clean restroom.', 3),
  ('Feather Factory Hotel Bathroom', 'Queens County, 26-32 Skillman Ave, Long Island City, NY 11101', 2, 'Good amenities, convenient location.', 4),
  ('CVS Bathroom', '2501 Jackson Ave, Long Island City, NY 11101', 5, 'Peaceful atmosphere, top-notch cleanliness.', 5);
