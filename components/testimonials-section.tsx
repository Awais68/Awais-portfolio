"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

const testimonials = [
    {
        name: "Sarah Johnson",
        title: "CTO, TechStart Inc",
        photo: null,
        quote: "Exceptional full-stack developer who delivered our e-commerce platform ahead of schedule. The code quality and attention to detail were outstanding.",
        rating: 5,
        platform: "Upwork",
        platformColor: "bg-green-600",
    },
    {
        name: "Ahmed Khan",
        title: "Product Manager, FinTech Solutions",
        photo: null,
        quote: "Transformed our legacy system into a modern, scalable application. Great communication and problem-solving skills throughout the project.",
        rating: 5,
        platform: "Fiverr",
        platformColor: "bg-emerald-600",
    },
    {
        name: "Dr. Maria Garcia",
        title: "College Dean, Tech University",
        photo: null,
        quote: "Built an impressive student portal that significantly improved our administrative efficiency. Professional and reliable developer.",
        rating: 5,
        platform: "Direct Client",
        platformColor: "bg-blue-600",
    },
    {
        name: "James Wilson",
        title: "Founder, StartupHub",
        photo: null,
        quote: "Outstanding React Native expertise. Our mobile app has 4.8 stars on both stores thanks to the smooth UX implementation.",
        rating: 5,
        platform: "Upwork",
        platformColor: "bg-green-600",
    },
    {
        name: "Fatima Al-Rashid",
        title: "Marketing Director, E-Shop",
        photo: null,
        quote: "The fastest checkout flow we've ever had. 40% improvement in conversion rates after the redesign. Highly recommend!",
        rating: 5,
        platform: "Fiverr",
        platformColor: "bg-emerald-600",
    },
    {
        name: "Michael Chen",
        title: "Startup Co-founder",
        photo: null,
        quote: "Brilliant work on our AI-powered app. Clean code, modern architecture, and excellent documentation. A true professional.",
        rating: 5,
        platform: "Direct Client",
        platformColor: "bg-blue-600",
    },
]

export function TestimonialsSection() {
    return (
        <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        What clients say about working with me
                    </p>
                </motion.div>

                {/* Mobile-First Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="glass-effect h-full hover:shadow-2xl transition-all duration-300 border-0 group">
                                <CardContent className="p-4 sm:p-6">
                                    {/* Quote Icon */}
                                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500/20 dark:text-blue-400/20 mb-3 sm:mb-4" />

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-3 sm:mb-4">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed italic">
                                        &quot;{testimonial.quote}&quot;
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg flex-shrink-0">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Platform Badge */}
                                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-800">
                                        <Badge className={`${testimonial.platformColor} text-white border-0 text-xs sm:text-sm`}>
                                            {testimonial.platform}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
