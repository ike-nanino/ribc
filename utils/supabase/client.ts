// utils/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";

// Keep a single instance on the client to avoid re-creating it
let browserClient:
  | ReturnType<typeof createBrowserClient>
  | null = null;

export function createClient() {
  if (!browserClient) {
    browserClient = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return browserClient;
}


