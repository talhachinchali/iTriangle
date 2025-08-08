// src/components/Login.tsx
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"

const DUMMY_EMAIL = "user@example.com"
const DUMMY_PASSWORD = "password123"

const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      setError("")
      navigate("/dashboard")
    } else {
      setError("Invalid email or password.")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
    <Card className="w-md max-w-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium pb-1">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium pb-1">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <Button type="submit" className="w-full " style={{background:'#155DFC'}}>
            Login
          </Button>
        </form>
        <div className="mt-4 text-xs text-gray-500 text-center">
          <div>Dummy credentials:</div>
          <div>Email: <span className="font-mono">user@example.com</span></div>
          <div>Password: <span className="font-mono">password123</span></div>
        </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
