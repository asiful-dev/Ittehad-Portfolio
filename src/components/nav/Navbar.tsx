"use client"

import { useAppContext } from "@/context/AppContext"
import { NavButton } from "./NavButton"
import Image from "next/image"

export function Navbar() {
  const { navItems } = useAppContext()

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-2 shadow-lg">
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        {navItems.map((item) => (
          <NavButton key={item.id} item={item} />
        ))}
      </div>
    </nav>
  )
}
