"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const supabase = createClient();
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  return (
    <button
      onClick={signOut}
      className="rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
    >
      Sign out
    </button>
  );
}
