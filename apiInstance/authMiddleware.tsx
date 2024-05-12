"use client";
import { useRouter } from "next/router";
import { useAuth } from "./useAuth";
import { ReactNode, useEffect, ComponentType, ComponentProps } from "react";

export const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return function AuthWrapper(props: P) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/signin"); // Redirect to login if not authenticated
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>; // Show a loading indicator while checking auth status
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

