CREATE TABLE splash_screens (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id), -- Reference to the user or DSA customizing the splash screen
  splash_image_url VARCHAR(255), -- Optional background image for the splash screen
  splash_text VARCHAR(255) NOT NULL, -- Optional text on the splash screen
  splash_button_text VARCHAR(100), -- Optional call-to-action button text (e.g., "Start Application")
  splash_button_link VARCHAR(255), -- Optional URL for the splash screen button
  display_duration INT DEFAULT 5, -- Duration to display the splash screen (in seconds)
  background_color VARCHAR(7) DEFAULT '#FFFFFF', -- Background color
  text_color VARCHAR(7) DEFAULT '#000000', -- Text color
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Splash screen creation date
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Last updated time
);