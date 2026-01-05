"use client"

import { motion } from "framer-motion"
import { Search, Palette, BarChart3, Rocket } from "lucide-react"

const workSteps = [
    {
        icon: Search,
        title: "Research",
        description: "Deep dive into user needs, market trends, and technical requirements to build the right solution",
    },
    {
        icon: Palette,
        title: "Design",
        description: "Craft intuitive interfaces with modern design principles and seamless user experiences",
    },
    {
        icon: BarChart3,
        title: "Analyze",
        description: "Optimize performance, ensure scalability, and validate solutions with real-world data",
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "Deploy to production with CI/CD pipelines, monitoring, and continuous improvements",
    },
]

export function WorkProcessSection() {
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
                        My Work <span className="gradient-text">Process</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A systematic approach to delivering high-quality solutions
                    </p>
                </motion.div>

                {/* Mobile-First Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {workSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="glass-effect rounded-xl p-4 sm:p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Step Number */}
                                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="mb-4 sm:mb-6 mt-2">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 dark:from-blue-500/20 dark:to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-emerald-500/0 group-hover:from-blue-500/5 group-hover:to-emerald-500/5 transition-all duration-300 -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
