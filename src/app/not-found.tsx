"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2>Not Found</h2>
        <h3>Something When Wrong!</h3>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
