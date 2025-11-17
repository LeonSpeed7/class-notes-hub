-- Drop the overly broad profiles policy
DROP POLICY IF EXISTS "Authenticated users can view profiles" ON public.profiles;

-- Create school-based security for profiles
-- Users can view profiles if:
-- 1. It's their own profile
-- 2. They're in the same school
-- 3. Either user doesn't have a school assigned yet (for onboarding)
CREATE POLICY "Users can view profiles in their school or own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (
    auth.uid() = id OR
    school_id IS NULL OR
    school_id IN (
      SELECT school_id FROM public.profiles WHERE id = auth.uid()
    )
  );