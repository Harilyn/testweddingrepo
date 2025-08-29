-- Alternative approach: Drop and recreate the table with correct structure
DROP TABLE IF EXISTS rsvps;

CREATE TABLE rsvps (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  telephone VARCHAR(20) UNIQUE NOT NULL,
  attending VARCHAR(10) CHECK (attending IN ('yes', 'no')) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_rsvps_telephone ON rsvps(telephone);
CREATE INDEX idx_rsvps_created_at ON rsvps(created_at);
