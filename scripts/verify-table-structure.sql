-- Check the current table structure
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'rsvps' 
ORDER BY ordinal_position;

-- If the table structure is wrong, recreate it properly
DROP TABLE IF EXISTS rsvps CASCADE;

CREATE TABLE rsvps (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  telephone VARCHAR(20) NOT NULL UNIQUE,
  attending VARCHAR(10) NOT NULL CHECK (attending IN ('yes', 'no')),
  message TEXT DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_rsvps_telephone ON rsvps(telephone);
CREATE INDEX idx_rsvps_created_at ON rsvps(created_at);
CREATE INDEX idx_rsvps_attending ON rsvps(attending);

-- Verify the table was created correctly
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'rsvps' 
ORDER BY ordinal_position;
