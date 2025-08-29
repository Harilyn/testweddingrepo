-- Create the RSVPs table in your connected Neon database
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email);
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at);

-- Insert a test record to verify everything works
INSERT INTO rsvps (first_name, last_name, email, attending, message) 
VALUES ('Test', 'User', 'test@example.com', 'yes', 'This is a test RSVP')
ON CONFLICT (email) DO NOTHING;
