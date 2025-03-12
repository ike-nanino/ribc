// components/UserStatus.tsx
'use client';
import { useSession } from 'next-auth/react';

export default function UserStatus() {
  const { data: session } = useSession();
  
  if (!session) return null;

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-gray-100 text-xs">
      Logged in as: {session.user?.name}<br />
      Session expires: {new Date(session.expires).toLocaleTimeString()}
    </div>
  );
}