import { useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'LoginBreeze — Login Form Template'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-900 font-sans">
      {/* Background city skyline */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/loginbreeze-city/1920/1080")',
        }}
        role="img"
        aria-label="City skyline background"
      />

      {/* Login card + footer */}
      <div className="relative z-10 flex w-full flex-col items-center px-4 py-8">
        <LoginForm />
        <Footer />
      </div>
    </div>
  )
}
