"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

type Props = {
  username: string;
  password: string;
  onSuccess: () => void;
  onClose: () => void;
};

export default function PasskeyModal({ onSuccess, onClose }: Props) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const expected = process.env.NEXT_PUBLIC_ADMIN_PASSKEY;
    if (code === expected) {
      onSuccess();
    } else {
      setError("Invalid verification code.");
    }
  };

  // Optional: If they close/cancel, sign them out to avoid leaving an authed session unverified.
  const handleClose = async () => {
    await supabase.auth.signOut();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-4 text-lg font-semibold">Two-Factor Verification</h2>
        {error && <p className="mb-2 text-sm text-red-600">{error}</p>}
        <form onSubmit={submit}>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-primary"
            placeholder="Enter your 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 rounded-md bg-blue-primary py-2 text-white hover:bg-blue-primary/80"
            >
              Verify
            </button>
            <button
              type="button"
              className="flex-1 rounded-md border border-gray-300 py-2 hover:bg-gray-50"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
