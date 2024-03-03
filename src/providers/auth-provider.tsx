import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};

export default AuthProvider;
