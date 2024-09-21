CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL, -- e.g., 'admin', 'lender', 'customer'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
