"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '@/lib/firebase'; // Ensure this imports your Firebase app configuration
import { Button } from "./ui/button"; // Assuming you have a UI button component
import { Icons } from "./icons"; // Make sure you have an appropriate Google icon here
import {
  IconBrandGoogle,
} from "@tabler/icons-react";
import { AddUser } from '@/apiInstance';
export default function GoogleSignInButton() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Add the user to the database
      await AddUser(user.uid, user.displayName ?? 'User');
      
      //Navigate to the dashboard or any other page
      window.location.href = '/dashboard/filter';

    } catch (error) {
      console.error('Error signing in with Google:');
    }
  };

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={handleGoogleSignIn}
    >
      <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300 pd-1" />
      Continue with Google
    </Button>
  );
}