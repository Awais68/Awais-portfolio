"use client"

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

            {/* Animated background elements (pure CSS, no JS dependency) */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="hero-blob hero-blob-a absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
                <div className="hero-blob hero-blob-b absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Profile Photo — LCP element. Rendered fully opaque on first paint;
                        only a transform-based float animation runs (does not gate paint). */}
                    <div className="mb-8 hero-float">
                        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-xl opacity-50" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                                <Image
                                    src="/images/portfolio.jpg"
                                    alt="Awais Niaz"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                    fetchPriority="high"
                                    sizes="(max-width: 640px) 250px, 300px"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="hero-fade-up" style={{ animationDelay: "0.1s" }}>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            <span className="gradient-text">Awais Niaz</span>
                        </h1>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            MERN Stack & Agentic AI Developer
                        </p>
                    </div>

                    {/* Subtext */}
                    <p
                        className="hero-fade-up text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
                        style={{ animationDelay: "0.25s" }}
                    >
                        Building innovative web applications and AI-powered platforms - from Karachi, Pakistan to global markets
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="hero-fade-up flex flex-col sm:flex-row gap-4 mb-12"
                        style={{ animationDelay: "0.4s" }}
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
                    </div>

                    {/* Scroll Indicator */}
                    <div className="hero-float-slow absolute bottom-8">
                        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
                            <div className="hero-scroll-dot w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-gray-400 mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
