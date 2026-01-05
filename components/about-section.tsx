"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Palette, Database, Cloud } from "lucide-react"
import Image from "next/image"

const skills = [
    {
        category: "Frontend",
        icon: Palette,
        color: "from-blue-500 to-cyan-500",
        technologies: [
            { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
            { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
            { name: "React.js", icon: "/icons/react.svg", color: "#61DAFB" },
            { name: "Next.js", icon: "/icons/nextjs.svg", color: "#000000" },
            { name: "HTML5", icon: "/icons/html.svg", color: "#E34F26" },
            { name: "CSS3", icon: "/icons/css.svg", color: "#1572B6" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
        ]
    },
    {
        category: "Backend",
        icon: Database,
        color: "from-emerald-500 to-green-500",
        technologies: [
            { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
            { name: "Express.js", icon: "/icons/express.svg", color: "#000000" },
            { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
            { name: "FastAPI", icon: "/icons/fastapi.svg", color: "#009688" },
            { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
            { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
        ]
    },
    {
        category: "DevOps & Tools",
        icon: Cloud,
        color: "from-purple-500 to-pink-500",
        technologies: [
            { name: "Docker", icon: "/icons/docker.svg", color: "#2496ED" },
            { name: "Kubernetes", icon: "/icons/kubernetes.svg", color: "#326CE5" },
            { name: "GitHub", icon: "/icons/github.svg", color: "#181717" },
            { name: "Postman", icon: "/icons/postman.svg", color: "#FF6C37" },
            { name: "CI/CD", icon: "/icons/cicd.svg", color: "#2088FF" },
        ]
    },
]

export function AboutSection() {
    return (
        <section id="about" className="py-20 sm:py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
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
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Passionate developer transforming ideas into digital reality
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <Card className="glass-effect border-0 shadow-xl">
                            <CardContent className="p-8">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-shrink-0">
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/20">
                                            <Image
                                                src="/images/portfolio.jpg"
                                                alt="Awais Niaz"
                                                fill
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                                            Awais Niaz
                                        </h3>
                                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                                            Full Stack Developer | MERN Stack & Agentic AI Specialist
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Welcome to my portfolio! As a passionate web developer, I thrive on transforming ideas into seamless,
                                            interactive digital experiences. With a blend of creativity and technical expertise, I craft responsive,
                                            user-centric websites that not only captivate but also perform flawlessly across devices. My journey in
                                            the ever-evolving world of web development is fueled by a commitment to innovation, clean code, and
                                            pushing the boundaries of what&apos;s possible online.
                                        </p>
                                        <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                                            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                                Full Stack Developer
                                            </Badge>
                                            <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                                                MERN Stack Expert
                                            </Badge>
                                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                                AI Enthusiast
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
                            Technical <span className="gradient-text">Skills</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="glass-effect h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center shadow-lg`}>
                                                    <skillGroup.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                                    {skillGroup.category}
                                                </h4>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {skillGroup.technologies.map((tech) => (
                                                    <motion.div
                                                        key={tech.name}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 transition-all cursor-pointer group"
                                                    >
                                                        <div className="w-12 h-12 flex items-center justify-center relative">
                                                            {/* Fallback to colored circle if SVG not found */}
                                                            <div
                                                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                                                style={{ backgroundColor: tech.color }}
                                                            >
                                                                {tech.name.charAt(0)}
                                                            </div>
                                                        </div>
                                                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {tech.name}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Highlights */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16"
                    >
                        <Card className="glass-effect border-0 shadow-xl bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-950">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
                                    Experience & Expertise
                                </h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold gradient-text mb-2">2+</div>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium">Technologies</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
