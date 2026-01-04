"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Users, Zap, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useState } from "react"

const allProjects = [
    {
        title: "School LMS Platform",
        description: "Comprehensive Learning Management System with course enrollment, faculty management, and multi-subject curriculum",
        impact: "8+ subjects with certification programs",
        metric: "8+ Courses",
        icon: Users,
        tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://school-lms-frontend-ten.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "E-commerce Dashboard",
        description: "Full-featured admin panel with real-time analytics, revenue tracking, inventory management, and order processing",
        impact: "265 sales tracked with detailed analytics",
        metric: "Real-time Analytics",
        icon: Zap,
        tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://ecommerce-git-main-hamzajiis-projects.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-emerald-500 to-green-500",
    },
    {
        title: "E-commerce Marketplace",
        description: "Modern shopping platform with product catalog, cart functionality, and responsive design for fashion retail",
        impact: "Complete shopping experience",
        metric: "Full-Stack Shop",
        icon: Users,
        tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        liveUrl: "https://final-hackathon-pink.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "AI Recipe Generator",
        description: "Smart recipe platform with AI-powered recipe generation, chef profiles, and interactive cooking assistant",
        impact: "150+ chefs, 2.5K+ recipes",
        metric: "2.5K Recipes",
        icon: Zap,
        tech: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://java-s-lq3y.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Task Planner App",
        description: "Smart task management and productivity application with scheduling and organization features",
        impact: "Boost productivity with AI assistance",
        metric: "AI-Powered",
        icon: Zap,
        tech: ["Next.js", "React", "TypeScript", "AI"],
        liveUrl: "https://planner-jade-nine.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        title: "Campaign Optimization Tool",
        description: "Marketing campaign management platform with setup and optimization features for digital marketing",
        impact: "Optimize marketing campaigns",
        metric: "Marketing Tool",
        icon: Users,
        tech: ["Next.js", "React", "Tailwind CSS", "Analytics"],
        liveUrl: "https://v0-campaign-setup-and-optimization.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-pink-500 to-rose-500",
    },
    {
        title: "Physical AI Robotics Book",
        description: "Educational documentation platform for AI and humanoid robotics with comprehensive learning modules",
        impact: "8 comprehensive modules",
        metric: "Educational",
        icon: Users,
        tech: ["Docusaurus", "React", "Markdown", "GitHub Pages"],
        liveUrl: "https://awais68.github.io/physical-AI-Homanoid-Book/",
        githubUrl: "https://github.com/Awais68/physical-AI-Homanoid-Book",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        title: "Blue Sea Chat App",
        description: "Real-time chat and messaging platform with instant communication and modern UI",
        impact: "Real-time messaging",
        metric: "Chat Platform",
        icon: Zap,
        tech: ["Next.js", "WebSocket", "TypeScript", "Real-time"],
        liveUrl: "https://blue-sea-chat-application.vercel.app/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-sky-500 to-blue-500",
    },
    {
        title: "AI Chatbot (Chainlit)",
        description: "Intelligent conversational AI chatbot with natural language processing and contextual responses",
        impact: "NLP-powered conversations",
        metric: "AI Chatbot",
        icon: Zap,
        tech: ["Python", "Chainlit", "AI/ML", "NLP"],
        liveUrl: "https://chatbot-chainlit-gbyv.onrender.com/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        title: "Al-Quran Institute Online",
        description: "Islamic educational platform for Quran learning and Islamic studies with comprehensive courses",
        impact: "Islamic education platform",
        metric: "Educational",
        icon: Users,
        tech: ["Next.js", "React", "TypeScript", "Education"],
        liveUrl: "https://alquraninstituteonline.com/",
        githubUrl: "https://github.com/Awais68",
        gradient: "from-green-500 to-emerald-500",
    },
]

export function ProjectsSection() {
    const [showAll, setShowAll] = useState(false)
    const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4)

    return (
        <section id="projects" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {allProjects.length} real-world applications with measurable impact
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {displayedProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="glass-effect h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                                            <project.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <Badge variant="secondary" className="glass-effect">
                                            {project.metric}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-2xl text-gray-900 dark:text-gray-100 group-hover:gradient-text transition-all">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    {/* Impact Statement */}
                                    <div className="mb-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
                                        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                                            ✨ {project.impact}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex gap-3">
                                    <Button
                                        size="sm"
                                        className="flex-1 rounded-full group/btn"
                                        asChild
                                    >
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1 rounded-full"
                                        asChild
                                    >
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub
                                        </a>
                                    </Button>
                                </CardFooter>

                                {/* Hover Glow Effect */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${project.gradient} blur-2xl -z-10 transition-opacity duration-300`} style={{ filter: 'blur(40px)' }} />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* See All / Show Less Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <Button
                        size="lg"
                        onClick={() => setShowAll(!showAll)}
                        className="group bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                        {showAll ? "Show Less" : `See All ${allProjects.length} Projects`}
                        <ChevronRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
