"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CreditCard as Edit, Trash2, ExternalLink, Eye } from "lucide-react"

// Mock projects data
const mockProjects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Platform",
    category: "Full Stack Web",
    status: "Published",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2024",
    views: 245,
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    title: "FinanceFlow Mobile App",
    category: "Mobile Development",
    status: "Published",
    technologies: ["React Native", "Node.js", "MongoDB"],
    year: "2024",
    views: 189,
    lastUpdated: "2024-01-10"
  },
  {
    id: 3,
    title: "CloudOps Infrastructure",
    category: "DevOps & Cloud",
    status: "Draft",
    technologies: ["AWS", "Docker", "Kubernetes"],
    year: "2023",
    views: 156,
    lastUpdated: "2024-01-08"
  },
  {
    id: 4,
    title: "MediConnect Telemedicine",
    category: "Full Stack Web",
    status: "Published",
    technologies: ["React", "Node.js", "WebRTC"],
    year: "2023",
    views: 298,
    lastUpdated: "2024-01-05"
  },
  {
    id: 5,
    title: "AgriTech IoT Dashboard",
    category: "IoT & Analytics",
    status: "Published",
    technologies: ["Vue.js", "Python", "FastAPI"],
    year: "2023",
    views: 167,
    lastUpdated: "2024-01-03"
  },
  {
    id: 6,
    title: "EduLearn LMS Platform",
    category: "Full Stack Web",
    status: "Published",
    technologies: ["Next.js", "Supabase", "Stripe"],
    year: "2022",
    views: 234,
    lastUpdated: "2023-12-28"
  }
]

export function ProjectsTab() {
  const [projects, setProjects] = useState(mockProjects)

  const handleDelete = (id: number) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-500/10 text-green-600 border-green-500/20"
      case "Draft":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects Management</CardTitle>
        <p className="text-muted-foreground">Manage your portfolio projects</p>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Technologies</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{project.title}</div>
                      <div className="text-sm text-muted-foreground">{project.year}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-muted-foreground" />
                      {project.views}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {project.lastUpdated}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(project.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}