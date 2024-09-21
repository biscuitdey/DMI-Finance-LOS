CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  step_id INT REFERENCES steps(id),
  services_id JSON,
  title VARCHAR(100) NOT NULL,
  position INT NOT NULL,
  is_visible BOOLEAN DEFAULT TRUE -- to show/hide sections based on logic
);