import { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (username: string, password: string) => {
    console.log('Login attempt:', { username, password })
    setSubmitted(true)
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 font-sans">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/gatepost/1920/1080")',
        }}
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm">
        <div className="rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="mb-2 text-center text-2xl font-semibold text-white">Welcome Back</h1>
          <p className="mb-8 text-center text-sm text-white/70">Please enter your credentials</p>

          <LoginForm onSubmit={handleSubmit} submitted={submitted} />
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-4 left-0 right-0 z-10">
        <Footer />
      </div>
    </div>
  )
}
