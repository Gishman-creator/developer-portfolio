"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { projects } from "@/lib/projects"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectImageGrid } from "@/components/projects/project-image-grid"
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Code,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  Layers,
  Clock,
  User,
} from "lucide-react"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPageClient({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const projectImages = project.images || [project.image]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-16">
          <Button variant="ghost" size="sm" asChild className="hover:bg-white/10 hover:text-white md:hover:bg-transparent">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 md:mr-2" />
              <span className="hidden md:inline">Back to Projects</span>
            </Link>
          </Button>
          <div className="flex gap-2">
            {project.links.live && (
              <Button size="sm" variant="outline" asChild className="border-0 bg-transparent hover:bg-white/10 hover:text-white md:border md:bg-background md:hover:bg-white/10">
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Live Demo</span>
                </Link>
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="outline" asChild className="border-0 bg-transparent hover:bg-white/10 hover:text-white md:border md:bg-background md:hover:bg-white/10">
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Source Code</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              {project.category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              {project.team}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">{project.title}</h1>
        </div>

        <ProjectImageGrid projectImages={projectImages} projectTitle={project.title} />

        <div className="mb-12">
          <p className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features Section */}
            {project.features && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Category</h4>
                  <p className="text-muted-foreground text-sm">{project.category}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Year</h4>
                  <p className="text-muted-foreground text-sm">{project.year}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Team</h4>
                  <p className="text-muted-foreground text-sm">{project.team}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .slice(0, 3)
              .map((otherProject, index) => (
                <Link key={index} href={`/projects/${otherProject.slug}`} className="block group">
                  <Card className="bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg overflow-hidden cursor-pointer py-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={otherProject.image || "/placeholder.svg"}
                        alt={otherProject.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        {otherProject.links.live && (
                          <div
                            className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open(otherProject.links.live, "_blank")
                            }}
                          >
                            <ExternalLink className="w-4 h-4 text-gray-800" />
                          </div>
                        )}
                        {otherProject.links.github && (
                          <div
                            className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open(otherProject.links.github, "_blank")
                            }}
                          >
                            <Github className="w-4 h-4 text-gray-800" />
                          </div>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 text-balance group-hover:text-primary transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
                        {otherProject.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs bg-muted/50">
                          {otherProject.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{otherProject.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}