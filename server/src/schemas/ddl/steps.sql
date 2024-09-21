CREATE TABLE steps (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  title VARCHAR(100) NOT NULL,
  position INT NOT NULL,
  is_visible BOOLEAN DEFAULT TRUE -- to show/hide steps based on logic
);