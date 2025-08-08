'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Libre_Baskerville } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, LogOut, Mail, Search, Eye, Calendar, User, MessageSquare } from 'lucide-react'
import { ContactForm } from '@/lib/supabase'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function AdminDashboard() {
  const [contactForms, setContactForms] = useState<ContactForm[]>([])
  const [filteredForms, setFilteredForms] = useState<ContactForm[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedForm, setSelectedForm] = useState<ContactForm | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem('admin_authenticated')
    if (!authStatus) {
      router.push('/admin')
      return
    }
    
    setIsAuthenticated(true)
    fetchContactForms()
  }, [router])

  useEffect(() => {
    // Filter forms based on search and status
    let filtered = contactForms

    if (searchTerm) {
      filtered = filtered.filter(form => 
        form.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(form => form.status === statusFilter)
    }

    setFilteredForms(filtered)
  }, [contactForms, searchTerm, statusFilter])

  const fetchContactForms = async () => {
    try {
      const response = await fetch('/api/admin/contact-forms')
      const result = await response.json()
      
      if (response.ok) {
        setContactForms(result.data || [])
      } else {
        console.error('Failed to fetch contact forms:', result.error)
      }
    } catch (error) {
      console.error('Error fetching contact forms:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateFormStatus = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/contact-forms', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      })

      if (response.ok) {
        // Update local state
        setContactForms(prev => 
          prev.map(form => 
            form.id === id ? { ...form, status: status as any } : form
          )
        )
      }
    } catch (error) {
      console.error('Error updating form status:', error)
    }
  }

  const downloadCSV = () => {
    const headers = ['Date', 'Name', 'Email', 'Subject', 'Message', 'Status']
    const csvContent = [
      headers.join(','),
      ...filteredForms.map(form => [
        new Date(form.created_at).toLocaleDateString(),
        `"${form.first_name} ${form.last_name}"`,
        form.email,
        `"${form.subject}"`,
        `"${form.message.replace(/"/g, '""')}"`,
        form.status
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contact-forms-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    localStorage.removeItem('admin_email')
    router.push('/admin')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'read': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'replied': return 'bg-green-500/20 text-green-400 border-green-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  // Don't render anything until authentication is checked
  if (!isAuthenticated) {
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen galaxy-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-galaxy-gold/20 border-t-galaxy-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-galaxy-gold text-lg">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen galaxy-bg ${libreBaskerville.className}`}>
      {/* Header */}
      <header className="bg-black/40 backdrop-blur-sm border-b border-galaxy-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-galaxy-gold">Admin Dashboard</h1>
              <p className="text-white/70">Manage contact form submissions</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-galaxy-gold/20 text-galaxy-gold hover:bg-galaxy-gold hover:text-black"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-galaxy-gold/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Total Forms</p>
                <p className="text-2xl font-bold text-white">{contactForms.length}</p>
              </div>
              <Mail className="w-8 h-8 text-galaxy-gold" />
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">New</p>
                <p className="text-2xl font-bold text-blue-400">
                  {contactForms.filter(f => f.status === 'new').length}
                </p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Read</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {contactForms.filter(f => f.status === 'read').length}
                </p>
              </div>
              <Eye className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Replied</p>
                <p className="text-2xl font-bold text-green-400">
                  {contactForms.filter(f => f.status === 'replied').length}
                </p>
              </div>
              <User className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-galaxy-gold/20 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-galaxy-gold/60" />
                <Input
                  type="text"
                  placeholder="Search forms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                />
              </div>
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-galaxy-dark/40 border border-galaxy-gold/20 rounded-lg text-white focus:border-galaxy-gold focus:ring-galaxy-gold"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
              </select>
            </div>
            
            <Button
              onClick={downloadCSV}
              className="bg-galaxy-gold text-black hover:bg-galaxy-gold-light"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CSV
            </Button>
          </div>
        </div>

        {/* Contact Forms Table */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-galaxy-gold/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-galaxy-dark/40">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-galaxy-gold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-galaxy-gold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-galaxy-gold">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-galaxy-gold">Subject</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-galaxy-gold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-galaxy-gold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-galaxy-gold/10">
                {filteredForms.map((form) => (
                  <tr key={form.id} className="hover:bg-galaxy-dark/20 transition-colors">
                    <td className="px-6 py-4 text-sm text-white/80">
                      {new Date(form.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-white">
                      {form.first_name} {form.last_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-white/80">
                      {form.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-white max-w-xs truncate">
                      {form.subject}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(form.status)}`}>
                        {form.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedForm(form)}
                          className="border-galaxy-gold/20 text-galaxy-gold hover:bg-galaxy-gold hover:text-black"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <select
                          value={form.status}
                          onChange={(e) => updateFormStatus(form.id, e.target.value)}
                          className="px-2 py-1 bg-galaxy-dark/40 border border-galaxy-gold/20 rounded text-xs text-white focus:border-galaxy-gold"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredForms.length === 0 && (
            <div className="text-center py-12">
              <Mail className="w-12 h-12 text-galaxy-gold/40 mx-auto mb-4" />
              <p className="text-white/60">No contact forms found</p>
            </div>
          )}
        </div>
      </main>

      {/* Form Detail Modal */}
      {selectedForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-galaxy-gold">Contact Form Details</h2>
              <Button
                onClick={() => setSelectedForm(null)}
                variant="outline"
                size="sm"
                className="border-galaxy-gold/20 text-galaxy-gold hover:bg-galaxy-gold hover:text-black"
              >
                ✕
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-galaxy-gold mb-1">Name</label>
                  <p className="text-white">{selectedForm.first_name} {selectedForm.last_name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-galaxy-gold mb-1">Email</label>
                  <p className="text-white">{selectedForm.email}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-galaxy-gold mb-1">Subject</label>
                <p className="text-white">{selectedForm.subject}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-galaxy-gold mb-1">Message</label>
                <div className="bg-galaxy-dark/40 rounded-lg p-4 border border-galaxy-gold/20">
                  <p className="text-white whitespace-pre-wrap">{selectedForm.message}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-galaxy-gold mb-1">Date Submitted</label>
                  <p className="text-white">{new Date(selectedForm.created_at).toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-galaxy-gold mb-1">Status</label>
                  <select
                    value={selectedForm.status}
                    onChange={(e) => {
                      updateFormStatus(selectedForm.id, e.target.value)
                      setSelectedForm({...selectedForm, status: e.target.value as any})
                    }}
                    className="px-3 py-2 bg-galaxy-dark/40 border border-galaxy-gold/20 rounded-lg text-white focus:border-galaxy-gold focus:ring-galaxy-gold"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
