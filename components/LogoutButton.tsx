"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const supabase = createClient(); // create an instance here

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/sign-in");
    setLoading(false);
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
    >
       <div
                className="footer pb-8 cursor-pointer"
                onClick={handleLogout}
              >
                <div className="footer_image">
                  <Image src="/assets/icons/logout.svg" fill alt="jsm" />
                </div>


              </div>
    </button>
  );
}
