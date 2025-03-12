"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
// import { useRouter } from "next/navigation";
import {  useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { signIn } from "next-auth/react";
config.autoAddCss = false;

interface PasskeyModalProps {
  username: string;
  password: string;
  onSuccess: () => void;
  onClose: () => void;
}

function PasskeyModal({ username, password, onSuccess, onClose }: PasskeyModalProps) {
  // const router = useRouter();
  const [open, setOpen] = useState(true);
  const [error, setError] = useState("");
  const [passkey, setPasskey] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to call our API route for verifying 2FA
  const validatePasskey = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Use NextAuth's signIn with 2FA code
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
        twoFactorCode: passkey,
      });

      if (result?.error) {
        setError("Invalid verification code. Please try again.");
      } else {
        setOpen(false);
        onSuccess(); // Trigger success redirect
      }
    } catch (err) {
      setError(`Verification failed. Please try again.${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Remove all localStorage and useEffect logic
  const closeModal = () => {
    setOpen(false);
    onClose();
  };
  

  // Create OTP slots dynamically for a 6-digit code
  const otpSlots = Array.from({ length: 6 }, (_, i) => (
    <InputOTPSlot
      key={i}
      index={i}
      className={`text-4xl text-black font-semibold justify-center flex border-2 rounded-lg size-16 gap-4 ${
        i < passkey.length ? "border-green-500" : "border-black"
      } focus:border-green-500`}
    />
  ));

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="space-y-5 bg-white border-blue-primary outline-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-start justify-between">
            Enter Verification Code
            <FontAwesomeIcon
              icon={faXmark}
              onClick={closeModal}
              className="cursor-pointer text-2xl text-red-600"
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-black">
            Please enter the 6-digit code sent to your phone number
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <InputOTP maxLength={6} value={passkey} onChange={setPasskey}>
            <InputOTPGroup className="w-full flex justify-between">{otpSlots}</InputOTPGroup>
          </InputOTP>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={validatePasskey}
            className={`bg-green-500 hover:bg-green-300 transition text-white cursor-pointer ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading || passkey.length !== 6}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PasskeyModal;
