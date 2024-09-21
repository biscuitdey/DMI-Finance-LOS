CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  customername VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
