"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Libre_Baskerville } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const allowedAdmins = [
    { email: "kondaneyash@gmail.com", password: "Skizoyash" },
    { email: "yashkondane@gmail.com", password: "1234567" },
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const isValid = allowedAdmins.some((a) => a.email === email && a.password === password)

    if (isValid) {
      localStorage.setItem("admin_authenticated", "true")
      localStorage.setItem("admin_email", email)
      router.push("/admin/dashboard")
    } else {
      setError("Invalid email or password")
    }

    setIsLoading(false)
  }

  return (
    <div className={`min-h-screen galaxy-bg flex items-center justify-center px-6 ${libreBaskerville.className}`}>
      <div className="w-full max-w-md">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-gold/20 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-galaxy-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-galaxy-gold" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-galaxy-gold mb-2">Admin Login</h1>
            <p className="text-white/70">Access the admin dashboard</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-galaxy-gold/60" />
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-galaxy-gold/60" />
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 bg-galaxy-dark/40 border-galaxy-gold/20 text-white placeholder:text-white/50 focus:border-galaxy-gold focus:ring-galaxy-gold"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-galaxy-gold/60 hover:text-galaxy-gold transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-galaxy-gold text-black hover:bg-galaxy-gold-light px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/50 text-sm">Authorized personnel only</p>
          </div>
        </div>
      </div>
    </div>
  )
}
