\c bathroom_app;

-- INSERT INTO bathroom (bathroom_id)
-- VALUES
-- (1),
-- (2),
-- (3),
-- (4),
-- (5),
-- (6);

INSERT INTO reviews (rating, comments, bathroom_id)
VALUES
  (4, 'Very clean and well-maintained.', 1),
  (3, 'Average facilities, could use improvement.', 2),
  (4, 'Beautiful surroundings, clean restroom.', 3),
  (2, 'Convenient location, but the restroom is not kept clean', 4),
  (5, 'Peaceful atmosphere, top-notch cleanliness.', 5),
  (1, 'Very dirty', 6);
