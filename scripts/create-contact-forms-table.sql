-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_forms_status ON contact_forms(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since we'll handle auth in our app)
CREATE POLICY "Allow all operations on contact_forms" ON contact_forms
FOR ALL USING (true);
