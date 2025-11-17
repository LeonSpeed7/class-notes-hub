-- Add is_public column to notes table
ALTER TABLE public.notes ADD COLUMN is_public boolean NOT NULL DEFAULT true;

-- Create index for better query performance on public notes
CREATE INDEX idx_notes_is_public ON public.notes(is_public);

-- Update RLS policy for browse to only show public notes
DROP POLICY IF EXISTS "Authenticated users can view notes" ON public.notes;

CREATE POLICY "Users can view public notes and their own notes"
ON public.notes
FOR SELECT
USING (is_public = true OR auth.uid() = user_id);