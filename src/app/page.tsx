import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </main>
  );
}
