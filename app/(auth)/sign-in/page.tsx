"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import PasskeyModal from "@/components/PasskeyModal";
import { useRouter, useSearchParams } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Main component wrapper with Suspense
export default function SignInPage() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
}

// Inner component that contains the actual form
function SignInContent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberCard, setRememberCard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasskeyModal, setShowPasskeyModal] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error");

  // Handle errors from URL parameters
  useEffect(() => {
    if (errorType === "2fa-required") {
      setShowPasskeyModal(true);
      setError("Please complete 2FA verification");
    }

    if (errorType) {
      if (errorType === "invalid-2fa-code") {
        setShowPasskeyModal(true);
        setError("Invalid verification code. Please try again.");
      } else if (errorType === "invalid-credentials") {
        setError("Invalid card number or password. Please try again.");
      }
    }
  }, [errorType]);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session && !session.requiresTwoFactor) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, [router]);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid card number or password. Please try again.");
    } else {
      const session = await getSession();
      if (session?.requiresTwoFactor) {
        setShowPasskeyModal(true);
      } else {
        router.push("/dashboard");
      }
    }
    setIsLoading(false);
  };

  const handleTwoFactorSuccess = () => {
    router.push("/dashboard");
  };

  return (
    <main>
      {showPasskeyModal && (
        <PasskeyModal
          username={username}
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
            <FontAwesomeIcon
              icon={faLock}
              className="text-blue-primary text-2xl"
            />
            <h1 className="text-2xl font-semibold text-gray-900 text-center">
              Sign In to Online Banking
            </h1>

          </div>

          {error && (
        <p className="mx-4 text-red-600 text-sm text-center">{error}</p>
      )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-primary"
                required
              />
            </div>

            <div className="mb-1 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
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
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="text-blue-primary"
                  />
                </span>
              </div>
            </div>

            <div className="mb-4">
              <a href="#" className="text-blue-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberCard}
                  onChange={(e) => setRememberCard(e.target.checked)}
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