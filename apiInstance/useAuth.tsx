"use client";

import { User } from "firebase/auth";
import { createContext } from "react";

export const UserContext = createContext<User | null>(null);

// auth.ts (utils or lib folder)
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "@/lib/firebase"; // Adjust the import based on your structure

const auth = getAuth(app);

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
};
