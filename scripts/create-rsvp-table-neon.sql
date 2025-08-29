-- Create the RSVPs table in Neon
CREATE TABLE IF NOT EXISTS rsvps (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  attending VARCHAR(10) CHECK (attending IN ('yes', 'no')) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at);
