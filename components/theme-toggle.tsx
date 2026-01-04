"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="h-10 w-10 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md" />
        )
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 z-50 h-12 w-12 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {theme === "dark" ? (
                    <Moon className="h-5 w-5 text-emerald-400" />
                ) : (
                    <Sun className="h-5 w-5 text-blue-500" />
                )}
            </motion.div>
        </motion.button>
    )
}
