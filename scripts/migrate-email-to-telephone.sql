-- First, add the telephone column if it doesn't exist
ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS telephone VARCHAR(20);

-- Copy email data to telephone column if needed (temporary)
UPDATE rsvps SET telephone = email WHERE telephone IS NULL OR telephone = '';

-- Drop the email column
ALTER TABLE rsvps DROP COLUMN IF EXISTS email;

-- Make telephone NOT NULL and UNIQUE
ALTER TABLE rsvps ALTER COLUMN telephone SET NOT NULL;
ALTER TABLE rsvps ADD CONSTRAINT rsvps_telephone_unique UNIQUE (telephone);

-- Update indexes
DROP INDEX IF EXISTS idx_rsvps_email;
CREATE INDEX IF NOT EXISTS idx_rsvps_telephone ON rsvps(telephone);
