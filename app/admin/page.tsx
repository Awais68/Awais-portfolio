"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Upload, Link as LinkIcon, Github } from "lucide-react"
import Link from "next/link"

const gradientOptions = [
    { value: 'from-blue-500 to-cyan-500', label: 'Blue Cyan', class: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { value: 'from-emerald-500 to-green-500', label: 'Emerald Green', class: 'bg-gradient-to-r from-emerald-500 to-green-500' },
    { value: 'from-purple-500 to-pink-500', label: 'Purple Pink', class: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { value: 'from-orange-500 to-red-500', label: 'Orange Red', class: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { value: 'from-indigo-500 to-purple-500', label: 'Indigo Purple', class: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
    { value: 'from-pink-500 to-rose-500', label: 'Pink Rose', class: 'bg-gradient-to-r from-pink-500 to-rose-500' },
    { value: 'from-cyan-500 to-blue-500', label: 'Cyan Blue', class: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
    { value: 'from-violet-500 to-purple-500', label: 'Violet Purple', class: 'bg-gradient-to-r from-violet-500 to-purple-500' },
    { value: 'from-green-500 to-emerald-500', label: 'Green Emerald', class: 'bg-gradient-to-r from-green-500 to-emerald-500' },
]

export default function AdminPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        techStack: '',
        liveUrl: '',
        githubUrl: '',
        gradient: gradientOptions[0].value,
        metric: 'Featured',
        impact: 'Latest Project'
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const techStackArray = formData.techStack.split(',').map(tech => tech.trim()).filter(Boolean)
            
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    techStack: techStackArray
                }),
            })

            if (response.ok) {
                alert('Project added successfully!')
                setFormData({
                    title: '',
                    description: '',
                    image: '',
                    techStack: '',
                    liveUrl: '',
                    githubUrl: '',
                    gradient: gradientOptions[0].value,
                    metric: 'Featured',
                    impact: 'Latest Project'
                })
                router.refresh()
            } else {
                const data = await response.json()
                alert(`Error: ${data.error}`)
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to add project')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <Button variant="ghost" size="sm">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Site
                                </Button>
                            </Link>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Admin Dashboard
                            </h1>
                        </div>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Card className="border-0 shadow-xl">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Plus className="w-6 h-6 text-blue-500" />
                                <div>
                                    <CardTitle className="text-2xl">Add New Project</CardTitle>
                                    <CardDescription>
                                        Fill in the details to add a new project to your portfolio
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Title */}
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                        Project Title *
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                        placeholder="E.g., School LMS Platform"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                        Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 resize-none"
                                        placeholder="Comprehensive Learning Management System with course enrollment..."
                                    />
                                </div>

                                {/* Image URL */}
                                <div>
                                    <label htmlFor="image" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                        <Upload className="w-4 h-4 inline mr-2" />
                                        Image URL *
                                    </label>
                                    <input
                                        type="url"
                                        id="image"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                        placeholder="https://images.unsplash.com/... or /images/project.png"
                                    />
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        Use Unsplash, local path (/images/...), or any image URL
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <label htmlFor="techStack" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                        Tech Stack * <span className="text-xs text-gray-500">(comma-separated)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="techStack"
                                        name="techStack"
                                        value={formData.techStack}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                        placeholder="Next.js, React, TypeScript, MongoDB"
                                    />
                                    {formData.techStack && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {formData.techStack.split(',').map((tech, index) => (
                                                tech.trim() && (
                                                    <Badge key={index} variant="secondary">
                                                        {tech.trim()}
                                                    </Badge>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Live URL */}
                                    <div>
                                        <label htmlFor="liveUrl" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                            <LinkIcon className="w-4 h-4 inline mr-2" />
                                            Live Demo URL *
                                        </label>
                                        <input
                                            type="url"
                                            id="liveUrl"
                                            name="liveUrl"
                                            value={formData.liveUrl}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                            placeholder="https://project.vercel.app"
                                        />
                                    </div>

                                    {/* GitHub URL */}
                                    <div>
                                        <label htmlFor="githubUrl" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                            <Github className="w-4 h-4 inline mr-2" />
                                            GitHub URL *
                                        </label>
                                        <input
                                            type="url"
                                            id="githubUrl"
                                            name="githubUrl"
                                            value={formData.githubUrl}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                            placeholder="https://github.com/username/repo"
                                        />
                                    </div>
                                </div>

                                {/* Gradient Selection */}
                                <div>
                                    <label htmlFor="gradient" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                        Color Gradient
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {gradientOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, gradient: option.value }))}
                                                className={`h-12 rounded-lg ${option.class} transition-all ${
                                                    formData.gradient === option.value
                                                        ? 'ring-4 ring-blue-500 scale-105'
                                                        : 'hover:scale-105'
                                                }`}
                                                title={option.label}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Metric */}
                                    <div>
                                        <label htmlFor="metric" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                            Metric Badge
                                        </label>
                                        <input
                                            type="text"
                                            id="metric"
                                            name="metric"
                                            value={formData.metric}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                            placeholder="Featured, 1000+ Users, etc."
                                        />
                                    </div>

                                    {/* Impact */}
                                    <div>
                                        <label htmlFor="impact" className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100">
                                            Impact Statement
                                        </label>
                                        <input
                                            type="text"
                                            id="impact"
                                            name="impact"
                                            value={formData.impact}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                                            placeholder="Latest Project, 500+ users, etc."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Adding Project...' : 'Add Project'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
