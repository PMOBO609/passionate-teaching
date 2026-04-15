'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://passionate-teaching-backend.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        window.location.href = '/dashboard'
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert('Server error. Make sure backend is running.')
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 2rem" }}>
      <Navbar />
      <div style={{ background: "#fff", border: "1px solid rgba(59,184,158,0.2)", borderRadius: "20px", padding: "40px", width: "100%", maxWidth: "420px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#0f2f2a", marginBottom: "6px" }}>Welcome back</h2>
        <p style={{ fontSize: "14px", color: "#4a7a72", marginBottom: "28px" }}>Sign in to continue learning.</p>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#4a7a72", display: "block", marginBottom: "6px" }}>Email address</label>
          <input type="email" placeholder="you@example.com" value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(59,184,158,0.3)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#0f2f2a", background: "#f8fdfc" }} />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <label style={{ fontSize: "12px", fontWeight: 500, color: "#4a7a72", display: "block", marginBottom: "6px" }}>Password</label>
          <input type="password" placeholder="password" value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
            style={{ width: "100%", padding: "10px 14px", border: "1px solid rgba(59,184,158,0.3)", borderRadius: "10px", fontSize: "14px", outline: "none", color: "#0f2f2a", background: "#f8fdfc" }} />
        </div>
        <button onClick={handleSubmit} style={{ width: "100%", padding: "12px", background: "linear-gradient(135deg,#1a5c52,#2a8a78)", border: "none", borderRadius: "12px", color: "#fff", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
          Sign in
        </button>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#4a7a72", marginTop: "16px" }}>
          No account? <Link href="/register" style={{ color: "#2a8a78", textDecoration: "none" }}>Sign up free</Link>
        </p>
      </div>
    </main>
  )
}