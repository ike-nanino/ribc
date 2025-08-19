"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import PasskeyModal from "@/components/PasskeyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye, faLock } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createClient } from "@/utils/supabase/client";

config.autoAddCss = false;

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
}

function SignInContent() {
  const [login, setLogin] = useState("");         // email (or "username or email" label)
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasskeyModal, setShowPasskeyModal] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error");
  const supabase = createClient();

  useEffect(() => {
    if (errorType === "2fa-required") {
      setShowPasskeyModal(true);
      setError("Please complete 2FA verification");
    } else if (errorType === "invalid-2fa-code") {
      setShowPasskeyModal(true);
      setError("Invalid verification code. Please try again.");
    } else if (errorType === "invalid-credentials") {
      setError("Invalid email or password. Please try again.");
    }
  }, [errorType]);

  const toggleShowPassword = () => setShowPassword((p) => !p);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
  // inside handleSubmit, before signInWithPassword:
let email = login;
if (!login.includes("@")) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("id, username")
    .eq("username", login)
    .single();

  if (!profile) {
    setError("User not found.");
    setIsLoading(false);
    return;
  }

  // You can't read user email from public tables; if you need the email,
  // store it in profiles too (non-sensitive) or just decide the "username"
  // equals the email's local-part and reconstruct it.
  // Simplest: store email in profiles and select it here:
  // .select("email").eq("username", login).single();
  // email = profile.email;
}
// then use `email` in signInWithPassword({ email, password })


    // For simplicity, treat "login" as email. (Optional username mapping provided at bottom.)
    const { data, error: authError } = await supabase.auth.signInWithPassword({
      email: login,
      password,
    });

    if (authError || !data.user) {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
      return;
    }

    // If you only have one user and always require passkey, open modal now.
    setShowPasskeyModal(true);
    setIsLoading(false);

    // (Optional) remember me: Supabase sessions are cookie-based already.
    // You could persist the email locally if you want:
    if (remember) localStorage.setItem("last_login_email", login);
    else localStorage.removeItem("last_login_email");
  };

  const handleTwoFactorSuccess = () => {
    router.push("/dashboard");
  };

  const onForgotPassword = async () => {
    if (!login || !login.includes("@")) {
      setError("Enter your email above, then click 'Forgot password?'");
      return;
    }
    setError(null);
    const { error } = await supabase.auth.resetPasswordForEmail(login, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) setError(error.message);
    else alert("Password reset email sent.");
  };

  useEffect(() => {
    const saved = localStorage.getItem("last_login_email");
    if (saved) setLogin(saved);
  }, []);

  return (
    <main>
      {showPasskeyModal && (
        <PasskeyModal
          username={login}
          password={password}
          onSuccess={handleTwoFactorSuccess}
          onClose={() => setShowPasskeyModal(false)}
        />
      )}

      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/images/osbicanada1.png"
              alt="Vault Logo"
              className="h-18 w-auto"
              width={300}
              height={60}
              priority
            />
          </div>

          <div className="flex justify-center items-center space-x-2 mb-6">
            <FontAwesomeIcon icon={faLock} className="text-blue-primary text-2xl" />
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              Sign In to Online Banking
            </h1>
          </div>

          {error && <p className="mx-4 text-red-600 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-1">
                Username or Email
              </label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary"
                required
              />
            </div>

            <div className="mb-1 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary pr-10"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                  onClick={toggleShowPassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-blue-primary" />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <button type="button" onClick={onForgotPassword} className="text-blue-primary hover:underline">
                Forgot password?
              </button>
            </div>

            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="mr-2"
                />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-primary hover:bg-blue-primary/40 text-white py-3 rounded-md transition-colors ${
                isLoading ? "animate-pulse" : ""
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
