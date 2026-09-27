import { useEffect } from 'react'
import { Background } from './components/Background'
import { RegistrationForm } from './components/RegistrationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regpilot — Registration Form'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col font-sans">
      <Background />
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
