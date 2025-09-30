"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import { projects } from "@/components/projects-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageGalleryModal } from "@/components/image-gallery-modal"
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
  Grid3X3,
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const projectImages = project.images || [project.image]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <div className="flex gap-2">
              {project.links.live && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              {project.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {project.team}
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">{project.title}</h1>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[400px] lg:h-[500px]">
            {/* Main Image */}
            <div
              className="lg:col-span-3 relative overflow-hidden rounded-lg border border-border cursor-pointer group"
              onClick={() => setIsGalleryOpen(true)}
            >
              <img
                src={projectImages[0] || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Side Images - Only on larger screens */}
            <div className="hidden lg:flex flex-col gap-4">
              {projectImages.slice(1, 3).map((image, index) => (
                <div
                  key={index}
                  className="flex-1 relative overflow-hidden rounded-lg border border-border cursor-pointer group"
                  onClick={() => setIsGalleryOpen(true)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - View ${index + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* Show More Button - Only on small screens */}
            <div className="lg:hidden mt-4">
              <Button variant="outline" onClick={() => setIsGalleryOpen(true)} className="w-full">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Show More Photos ({projectImages.length})
              </Button>
            </div>
          </div>

          {/* Show All Photos Button - Only on larger screens */}
          <div className="hidden lg:block mt-4">
            <Button
              variant="outline"
              onClick={() => setIsGalleryOpen(true)}
              className="absolute bottom-4 right-4 bg-white/90 hover:bg-white"
              style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              Show all photos
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Project Type</p>
                <p className="font-semibold text-foreground">{project.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-semibold text-foreground">{project.year}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Team Size</p>
                <p className="font-semibold text-foreground">{project.team}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Technologies</p>
                <p className="font-semibold text-foreground">{project.technologies.length} Used</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

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

            {/* Challenges Section */}
            {project.challenges && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    Technical Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Technical Implementation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Technical Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Architecture & Design</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built with modern web technologies focusing on scalability, performance, and user experience. The
                    application follows best practices for code organization, testing, and deployment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Development Approach</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Responsive design optimized for all devices</li>
                    <li>• Real-time data synchronization</li>
                    <li>• Advanced analytics and reporting</li>
                    <li>• Secure authentication and authorization</li>
                    <li>• Automated testing and CI/CD pipeline</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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

            {/* Links */}
            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.links.live && (
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <Card key={index} className="group hover:border-primary/20 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{relatedProject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={`/projects/${relatedProject.slug}`}>View Project</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={projectImages}
        projectTitle={project.title}
      />
    </div>
  )
}
