"use client";

import { authClient } from "@/lib/auth-client";

function SignedIn({ children }: { children: React.ReactNode }) {
  const { data: session } = authClient.useSession();

  if (!session) {
    return null;
  }

  return children;
}
export default SignedIn;
