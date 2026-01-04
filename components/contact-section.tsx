"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Linkedin, Github, Globe } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

const contactInfo = [
    {
        icon: MapPin,
        label: "Location",
        value: "Karachi, Pakistan",
        href: null,
    },
    {
        icon: Phone,
        label: "WhatsApp",
        value: "+92 335 220 4606",
        href: "https://wa.me/923352204606",
    },
    {
        icon: Mail,
        label: "Email",
        value: "awaisniaz768@gmail.com",
        href: "mailto:awaisniaz768@gmail.com",
    },
]

const socialLinks = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/Awais68",
        color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/awais-niaz768/",
        color: "hover:text-blue-600",
    },
    {
        icon: Globe,
        label: "Portfolio",
        href: "https://awais68.github.io/physical-AI-Homanoid-Book/",
        color: "hover:text-emerald-600",
    },
    {
        icon: Globe,
        label: "Chat App",
        href: "https://blue-sea-chat-application.vercel.app/",
        color: "hover:text-purple-600",
    },
]

export function ContactSection() {
    return (
        <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Available for freelance projects and full-time opportunities
                    </p>
                </motion.div>                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                                Get in Touch
                            </h3>

                            <div className="space-y-4 mb-8">
                                {contactInfo.map((info) => (
                                    <Card key={info.label} className="glass-effect border-0 hover:shadow-lg transition-shadow">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                                                    <info.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {info.label}
                                                    </p>
                                                    {info.href ? (
                                                        <a
                                                            href={info.href}
                                                            className="font-semibold text-gray-900 dark:text-gray-100 hover:gradient-text transition-all"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                                                            {info.value}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                    Connect on Social
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-gray-700 dark:text-gray-300 ${social.color} transition-colors shadow-sm hover:shadow-md`}
                                        >
                                            <social.icon className="w-5 h-5" />
                                            <span className="text-sm font-medium">{social.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="glass-effect border-0 shadow-xl">
                                <CardContent className="p-6">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-2 rounded-lg glass-effect focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-2 rounded-lg glass-effect focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="w-full px-4 py-2 rounded-lg glass-effect focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-full py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
