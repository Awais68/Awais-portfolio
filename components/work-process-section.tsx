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

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {workSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="relative group"
                        >
                            <div className="glass-effect rounded-xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Icon */}
                                <div className="mb-6 mt-2">
                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 dark:from-blue-500/20 dark:to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
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

                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto pb-6 -mx-4 px-4">
                    <div className="flex gap-4 w-max">
                        {workSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative group w-[280px]"
                            >
                                <div className="glass-effect rounded-xl p-6 h-full shadow-lg">
                                    {/* Step Number */}
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-4 mt-2">
                                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/10 to-emerald-500/10 dark:from-blue-500/20 dark:to-emerald-500/20 flex items-center justify-center">
                                            <step.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
