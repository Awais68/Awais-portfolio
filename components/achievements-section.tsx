"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Award, Code, Briefcase, Star, Smartphone, TrendingUp } from "lucide-react"
import { useEffect, useRef } from "react"

const achievements = [
    {
        icon: Code,
        value: 10,
        suffix: "+",
        label: "Projects Live",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Star,
        value: 2500,
        suffix: "+",
        label: "Recipes Generated",
        color: "from-emerald-500 to-green-500",
        format: (val: number) => {
            if (val >= 1000) return `${(val / 1000).toFixed(1)}K`
            return val.toString()
        },
    },
    {
        icon: Award,
        value: 2,
        suffix: "+",
        label: "Years Experience",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Briefcase,
        value: 100,
        suffix: "%",
        label: "MERN Stack Expert",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Smartphone,
        value: 8,
        suffix: "+",
        label: "Web Applications",
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: TrendingUp,
        value: 150,
        suffix: "+",
        label: "AI Chefs Featured",
        color: "from-teal-500 to-emerald-500",
    },
]

function AnimatedCounter({
    value,
    suffix = "",
    format,
}: {
    value: number
    suffix?: string
    format?: (val: number) => string
}) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, motionValue, value])

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                const displayValue = format ? format(Math.floor(latest)) : Math.floor(latest).toString()
                ref.current.textContent = displayValue + suffix
            }
        })
        return unsubscribe
    }, [springValue, suffix, format])

    return <span ref={ref}>0{suffix}</span>
}

export function AchievementsSection() {
    return (
        <section className="py-20 sm:py-28 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Impact & <span className="gradient-text">Achievements</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Measurable results and continuous growth
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.label}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="glass-effect rounded-xl p-6 sm:p-8 text-center h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Icon */}
                                <div className="mb-4 flex justify-center">
                                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                        <achievement.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                                    </div>
                                </div>

                                {/* Counter */}
                                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                                    <AnimatedCounter
                                        value={achievement.value}
                                        suffix={achievement.suffix}
                                        format={achievement.format}
                                    />
                                </div>

                                {/* Label */}
                                <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400">
                                    {achievement.label}
                                </p>

                                {/* Glow Effect */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
