"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="fixed top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md" />
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all"
            aria-label="Toggle theme"
        >
            <span className="transition-transform duration-300 ease-in-out">
                {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-emerald-400" />
                ) : (
                    <Sun className="h-5 w-5 text-blue-500" />
                )}
            </span>
        </button>
    )
}
