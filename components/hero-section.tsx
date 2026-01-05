"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

export function HeroSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 gradient-bg-light dark:gradient-bg-dark -z-10" />

            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] "
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-xl opacity-50" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/portfolio.jpg"
                                        alt="Awais Niaz"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                        sizes="(max-width: 640px) 250px, 300px"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            <span className="gradient-text">Awais Niaz</span>
                        </h1>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            MERN Stack & Agentic AI Developer
                        </p>
                    </motion.div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
                    >
                        Building innovative web applications and AI-powered platforms - from Karachi, Pakistan to global markets
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollToSection("projects")}
                            className="glass-effect text-gray-900 dark:text-gray-100 hover:scale-105 transition-transform text-base sm:text-lg px-8 py-6 rounded-full shadow-lg group"
                        >
                            View Work
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => scrollToSection("contact")}
                            className="glass-effect text-gray-900 dark:text-gray-100 hover:scale-105 transition-transform text-base sm:text-lg px-8 py-6 rounded-full shadow-lg group"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-8"
                    >
                        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-gray-400 mt-2"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
