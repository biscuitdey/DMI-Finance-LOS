CREATE TABLE banners (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id), -- Reference to the user customizing the banner
  banner_text VARCHAR(255) NOT NULL, -- Text displayed in the banner
  banner_image_url VARCHAR(255), -- Optional image URL for the banner
  banner_link VARCHAR(255), -- Optional link for the banner (e.g., promotional link)
  display_start TIMESTAMP, -- When the banner should start displaying
  display_end TIMESTAMP, -- When the banner should stop displaying
  background_color VARCHAR(7) DEFAULT '#007BFF', -- Background color of the banner
  text_color VARCHAR(7) DEFAULT '#FFFFFF', -- Text color of the banner
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Banner creation date
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Last updated time
);
