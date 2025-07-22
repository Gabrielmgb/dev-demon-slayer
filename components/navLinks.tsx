// components/NavLinks.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname()

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href
    return `transition-colors ${isActive ? "text-red-500 font-bold" : "text-gray-300 hover:text-white"}`
  }

  return (
    <>
      <Link href="/" className={getLinkClasses("/")} onClick={onClick}>
        Home
      </Link>
      <Link href="/personagens" className={getLinkClasses("/personagens")} onClick={onClick}>
        Personagens
      </Link>
      <Link href="/episodios" className={getLinkClasses("/episodios")} onClick={onClick}>
        Episódios
      </Link>
    </>
  )
}
