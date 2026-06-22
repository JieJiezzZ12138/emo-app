"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { href: "/", label: "状态", icon: "✦" },
  { href: "/collection", label: "回应收藏", icon: "♡" },
  { href: "/starmap", label: "心图", icon: "♡" },
  { href: "/about", label: "关于", icon: "◎" },
]

export function Navbar() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  if (pathname.startsWith("/answer")) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-12 md:py-4"
    >
      <Link href="/" className="text-base md:text-lg font-light tracking-[0.26em] md:tracking-[0.3em] text-white/80 hover:text-white transition-colors">
        EMO
      </Link>

      <div className="flex items-center gap-0.5 md:gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative px-2 py-2 text-sm text-white/50 hover:text-white/90 transition-colors md:px-3"
            >
              <span className="mr-1 text-xs">{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span>
              {(isActive || hoveredItem === item.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-white/40"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
