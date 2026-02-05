"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();

  const displayName =
    user?.username ||
    user?.firstName ||
    user?.fullName ||
    user?.primaryEmailAddress?.emailAddress;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 px-6 md:px-16 h-16 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-red-600 font-extrabold text-xl">
          NETFLIX MIRROR
        </Link>
        <Link href="/" className="text-white text-sm">Home</Link>
        <Link href="/my-list" className="text-white text-sm">My List</Link>
      </div>

      <div className="flex items-center gap-3 text-white text-sm">
        <span className="hidden sm:block">{displayName}</span>
        <UserButton afterSignOutUrl="/login" />
      </div>
    </nav>
  );
}
