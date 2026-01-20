-- Create contacts table for storing contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
WITH CHECK (true);

-- Policy: Only authenticated admins could read (for future admin panel)
-- For now, no one can read directly - would need admin system
CREATE POLICY "No public read access"
ON public.contacts
FOR SELECT
USING (false);

-- Add comment for documentation
COMMENT ON TABLE public.contacts IS 'Contact form submissions from website visitors';