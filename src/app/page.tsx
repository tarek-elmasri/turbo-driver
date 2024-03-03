"use client";

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useOrganization,
  useUser,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const userOrganization = useOrganization();
  const session = useUser();

  let orgId: string | undefined = undefined;
  if (userOrganization.isLoaded && session.isLoaded) {
    orgId = userOrganization.organization?.id ?? session.user?.id;
  }

  const files = useQuery(api.files.getFiles, orgId ? { orgId } : "skip");
  const createFile = useMutation(api.files.createFile);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {files?.map((file) => <div key={file._id}>{file.name}</div>)}

      <Button
        onClick={() => {
          if (!orgId) return;
          createFile({
            name: "hello world",
            orgId,
          });
        }}
      >
        create File
      </Button>
    </main>
  );
}
