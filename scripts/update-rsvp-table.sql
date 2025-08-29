-- Update the RSVPs table to use telephone instead of email
ALTER TABLE rsvps 
DROP COLUMN IF EXISTS email,
ADD COLUMN IF NOT EXISTS telephone VARCHAR(20) UNIQUE NOT NULL DEFAULT '';

-- Update the index
DROP INDEX IF EXISTS idx_rsvps_email;
CREATE INDEX IF NOT EXISTS idx_rsvps_telephone ON rsvps(telephone);

-- Clean up any test data if needed
DELETE FROM rsvps WHERE telephone = '' OR telephone IS NULL;
