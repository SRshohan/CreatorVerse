import { createClient } from '@supabase/supabase-js';


const URL = 'https://mslwwkuptxypuwvlzphe.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zbHd3a3VwdHh5cHV3dmx6cGhlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDM3NzMxMCwiZXhwIjoyMDM5OTUzMzEwfQ.3o3bzcZYx63LHg7n1U11uQBFuwSszuveT2WLAq4B6oA';

export const supabase = createClient(URL, API_KEY);


