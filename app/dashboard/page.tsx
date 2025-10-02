"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartBar as BarChart3, FolderPlus, Mail, MessageSquare, Plus, Settings, Users, LogOut, Eye, Trash2, CreditCard as Edit } from "lucide-react"
import { ProjectsTab } from "@/components/admin/projects-tab"
import { ContactsTab } from "@/components/admin/contacts-tab"
import { AddProjectDialog } from "@/components/admin/add-project-dialog"

// Mock data for demonstration
const mockStats = {
  totalProjects: 6,
  totalContacts: 12,
  pendingContacts: 5,
  totalViews: 1250
}

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAddProject, setShowAddProject] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("adminLoggedIn")
    if (!loggedIn) {
      router.push("/admin/login")
    } else {
      setIsLoggedIn(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    router.push("/admin/login")
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <img src="/logo.png" alt="Loading" className="w-auto h-12 object-cover" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your portfolio and contacts</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hover:text-white hover:bg-[#272727]" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Main Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
            </TabsList>
            <Button onClick={() => setShowAddProject(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>

          <TabsContent value="projects">
            <ProjectsTab />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactsTab />
          </TabsContent>
        </Tabs>
      </div>

      <AddProjectDialog
        open={showAddProject}
        onOpenChange={setShowAddProject}
      />
    </div>
  )
}