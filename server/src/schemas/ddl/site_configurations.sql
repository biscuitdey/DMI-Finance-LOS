CREATE TABLE site_configurations (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id), -- Link to the user who customizes their site
  font_family VARCHAR(100) DEFAULT 'Arial', -- Font family (e.g., Arial, Times New Roman)
  font_size VARCHAR(10) DEFAULT '16px', -- Font size
  primary_color VARCHAR(7) DEFAULT '#000000', -- Primary color (HEX value)
  secondary_color VARCHAR(7) DEFAULT '#FFFFFF', -- Secondary color (HEX value)
  background_color VARCHAR(7) DEFAULT '#F0F0F0', -- Background color (HEX value)
  button_color VARCHAR(7) DEFAULT '#007BFF', -- Button color (HEX value)
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Track when customization was last updated
);