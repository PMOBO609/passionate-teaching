'use client'
import Navbar from '../../components/Navbar'

const courses = [
  { title: 'React & Next.js Bootcamp', progress: 78, emoji: '⚛️' },
  { title: 'Build LLM Apps with LangChain', progress: 45, emoji: '🤖' },
  { title: 'Ethical Hacking Masterclass', progress: 22, emoji: '🔐' },
  { title: 'AWS Solutions Architect', progress: 60, emoji: '☁️' },
]

export default function Dashboard() {
  return (
    <main style={{ minHeight: '100vh', padding: '100px 2rem 60px' }}>
      <Navbar />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0f2f2a', letterSpacing: '-1px', marginBottom: '6px' }}>Welcome back, Jordan 👋</h1>
        <p style={{ fontSize: '15px', color: '#4a7a72', marginBottom: '36px' }}>Keep learning — you are making great progress.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '12px', marginBottom: '36px' }}>
          {[['7','Courses enrolled'],['3','Completed'],['142h','Hours learned'],['3','Certificates']].map(([num, label], i) => (
            <div key={i} style={{ background: '#e8f7f5', borderRadius: '12px', padding: '18px' }}>
              <div style={{ fontSize: '26px', fontWeight: 700, color: '#1a5c52' }}>{num}</div>
              <div style={{ fontSize: '11px', color: '#4a7a72', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.8)', border: '0.5px