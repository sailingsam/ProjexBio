// "use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-black shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/whiteLogoSymbol.svg" alt="logo" height={10} width={50}  />
        </Link>

        <div className="flex items-center gap-4 text-white">
          {session && session.user ? (
            <>
              <Link href="/projects/create">
                <span>Create Project</span>
              </Link>

              <form action={async () => {
                'use server';
                await signOut({redirectTo: '/'});
              }}>
                <button type="submit">
                  <span>Logout</span>
                </button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={async () => {
              'use server';
              await signIn('github');
            }}>
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;