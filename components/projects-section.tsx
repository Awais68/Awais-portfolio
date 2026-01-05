"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Zap, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

interface Project {
    _id?: string
    title: string
    description: string
    impact: string
    metric: string
    techStack: string[]
    liveUrl: string
    githubUrl: string
    gradient: string
    image: string
}

export function ProjectsSection() {
    const [showAll, setShowAll] = useState(false)
    const [projects, setProjects] = useState<Project[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects')
            if (response.ok) {
                const data = await response.json()
                // Always show Al-Quran Institute first
                const alquranProject = data.find((p: Project) => p.title.toLowerCase().includes('al-quran') || p.title.toLowerCase().includes('alquran'))
                const otherProjects = data.filter((p: Project) => !p.title.toLowerCase().includes('al-quran') && !p.title.toLowerCase().includes('alquran'))
                const sortedProjects = alquranProject ? [alquranProject, ...otherProjects] : data
                setProjects(sortedProjects)
            }
        } catch (error) {
            console.error('Error fetching projects:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const displayedProjects = showAll ? projects : projects.slice(0, 4)

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
                        {isLoading ? 'Loading...' : `${projects.length} real-world applications with measurable impact`}
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project._id || project.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="glass-effect h-full group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
                                    {/* Gradient Header */}
                                    <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                                    {/* Project Image */}
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                                    </div>

                                    <CardHeader>
                                        <div className="flex items-start justify-between mb-2">
                                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                                                <Zap className="w-6 h-6 text-white" />
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
                                            {project.techStack?.map((tech: string) => (
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
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${project.gradient} blur-2xl -z-10 transition-opacity duration-300`} style={{ filter: 'blur(40px)' }} />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* See All / Show Less Button */}
                {!isLoading && projects.length > 4 && (
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
                            {showAll ? "Show Less" : `See All ${projects.length} Projects`}
                            <ChevronRight className={`ml-2 h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
