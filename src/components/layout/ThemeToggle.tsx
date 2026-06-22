"use client"

import { useEffect, useState } from "react"

type Theme = "dark" | "light"

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const saved = (localStorage.getItem("emo-theme") as Theme | null) ?? "dark"
    setTheme(saved)
    document.documentElement.classList.toggle("light", saved === "light")
    document.documentElement.classList.toggle("dark", saved === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    localStorage.setItem("emo-theme", nextTheme)
    document.documentElement.classList.toggle("light", nextTheme === "light")
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-white/10 px-2.5 py-1.5 text-[11px] text-white/45 transition-colors hover:border-white/20 hover:text-white/70 md:px-3 md:text-xs"
    >
      {theme === "dark" ? "白色" : "黑色"}
    </button>
  )
}
