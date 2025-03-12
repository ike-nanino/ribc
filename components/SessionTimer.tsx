// components/SessionTimer.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';

export default function SessionTimer() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.expires) return;

    const checkExpiry = () => {
      const now = Date.now();
      const expiryDate = new Date(session.expires).getTime();
      
      console.log('Session check:', { 
        now: new Date(now).toLocaleTimeString(),
        expires: new Date(expiryDate).toLocaleTimeString(),
        remaining: Math.round((expiryDate - now) / 1000) + 's'
      });

      if (expiryDate < now) {
        console.log('Session expired - logging out');
        signOut({ callbackUrl: '/sign-in' });
      }
    };

    // Check every 15 seconds for testing
    const interval = setInterval(checkExpiry, 15_000);
    return () => clearInterval(interval);
  }, [session]);

  return null;
}