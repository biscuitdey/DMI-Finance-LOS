CREATE TABLE fields (
  id SERIAL PRIMARY KEY,
  section_id INT REFERENCES sections(id),
  field_label VARCHAR(100) NOT NULL,
  field_type VARCHAR(50) NOT NULL, -- e.g., 'text', 'number', 'select'
  is_required BOOLEAN DEFAULT TRUE,
  position INT NOT NULL,
  is_visible BOOLEAN DEFAULT TRUE,
  min_value INT NOT NULL,
  max_value INT NOT NULL,
  is_conditional BOOLEAN DEFAULT TRUE,
  parent_id INT DEFAULT NULL
);