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
import { Mail, MessageSquare, Trash2, Clock, CheckCircle } from "lucide-react"

// Mock contact messages data
const mockContacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@techflow.com",
    subject: "Enterprise Platform Development",
    message: "Hi Clement, we're interested in discussing a large-scale platform development project. Could we schedule a call this week?",
    status: "pending",
    date: "2024-01-15",
    time: "14:30"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@innovatelab.com",
    subject: "Fintech Application Inquiry",
    message: "We need a developer for our fintech project. Your experience with financial applications looks impressive. What's your availability?",
    status: "responded",
    date: "2024-01-14",
    time: "09:15"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily@ecotrack.com",
    subject: "Sustainability Platform Quote",
    message: "Looking for a quote on developing a sustainability tracking platform similar to your EcoTrack project. Can you provide an estimate?",
    status: "pending",
    date: "2024-01-13",
    time: "16:45"
  },
  {
    id: 4,
    name: "David Uwimana",
    email: "david@mobiletech.rw",
    subject: "Mobile Development Partnership",
    message: "We're expanding our mobile development team and would like to discuss potential collaboration opportunities.",
    status: "pending",
    date: "2024-01-12",
    time: "11:20"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa@mediconnect.com",
    subject: "Telemedicine Platform Maintenance",
    message: "We need ongoing maintenance and feature updates for our telemedicine platform. Are you available for long-term support?",
    status: "responded",
    date: "2024-01-11",
    time: "13:10"
  },
  {
    id: 6,
    name: "James Mutabazi",
    email: "james@agritech.rw",
    subject: "IoT Dashboard Enhancement",
    message: "The IoT dashboard you built is working great! We'd like to add some new features. Can we discuss the next phase?",
    status: "pending",
    date: "2024-01-10",
    time: "08:30"
  }
]

export function ContactsTab() {
  const [contacts, setContacts] = useState(mockContacts)

  const handleDelete = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  const handleMarkAsResponded = (id: number) => {
    setContacts(contacts.map(c => 
      c.id === id ? { ...c, status: "responded" } : c
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
      case "responded":
        return "bg-green-500/10 text-green-600 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-3 h-3" />
      case "responded":
        return <CheckCircle className="w-3 h-3" />
      default:
        return <MessageSquare className="w-3 h-3" />
    }
  }

  const pendingCount = contacts.filter(c => c.status === "pending").length

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Contact Messages</CardTitle>
            <p className="text-muted-foreground">
              {pendingCount} pending responses out of {contacts.length} total messages
            </p>
          </div>
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
            {pendingCount} Pending
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message Preview</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-muted-foreground">{contact.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-sm">{contact.subject}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-muted-foreground max-w-xs truncate">
                      {contact.message}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(contact.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(contact.status)}
                        {contact.status}
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{contact.date}</div>
                      <div className="text-muted-foreground">{contact.time}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.open(`mailto:${contact.email}?subject=Re: ${contact.subject}`)}
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                      {contact.status === "pending" && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleMarkAsResponded(contact.id)}
                          className="text-green-600 hover:text-green-600"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleDelete(contact.id)}
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